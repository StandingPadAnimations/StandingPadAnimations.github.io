---
title: "Sandboxing Native Programs with Bubblewrap"
date: 2023-08-26
draft: false
toc: false
images:
tags:
  - Tech
  - Programming
---

Edit 9/9/2023: I was made aware of how the script could be improved [on GitHub](https://github.com/StandingPadAnimations/StandingPadAnimations.github.io/discussions/4), so I've edit this post to add those suggestions.

It all started with me changing browsers.

Recently I switched from Librewolf to Vivaldi. While I like Vivaldi, I didn't like how there was no Flatpak version (since Flatpaks are sandboxed). However, I figured this would make a good opportunity to learn sandboxing. Little did I know that this was going to be a headache.

# Simple Sandboxing
For this project, I decided to use [Bubblewrap](https://github.com/containers/bubblewrap), as that's the underlying program Flatpak uses to sandbox, and after a bit of digging and looking at examples for Chromium browsers, I created the following:
```sh 
#! /usr/bin/bash

bwrap \
    --symlink /usr/lib /lib \
    --symlink /usr/lib64 /lib64 \
    --symlink /usr/bin /bin \
    --symlink /usr/bin /sbin \
    --ro-bind /usr/lib /usr/lib \
    --ro-bind /usr/lib64 /usr/lib64 \
    --ro-bind /usr/bin /usr/bin \
    --ro-bind /etc /etc \
    --ro-bind /usr/share /usr/share \
    --ro-bind /opt/vivaldi /opt/vivaldi \
    --dev /dev \
    --dev-bind /dev/dri /dev/dri \
    --proc /proc \
    --ro-bind /sys/dev/char /sys/dev/char \
    --ro-bind /sys/devices /sys/devices \
    --ro-bind /run/dbus /run/dbus \
    --dir "$XDG_RUNTIME_DIR" \
    --ro-bind "$XDG_RUNTIME_DIR/wayland-1" "$XDG_RUNTIME_DIR/wayland-1" \
    --ro-bind "$XDG_RUNTIME_DIR/pipewire-0" "$XDG_RUNTIME_DIR/pipewire-0" \
    --ro-bind "$XDG_RUNTIME_DIR/pulse" "$XDG_RUNTIME_DIR/pulse" \
    --ro-bind "$XDG_RUNTIME_DIR/bus" "$XDG_RUNTIME_DIR/bus" \
    --ro-bind "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" \
    --dir /tmp \
    --ro-dir "$HOME" "$HOME" \
    --dir "$HOME"/.cache \
    --bind "$HOME"/.config/vivaldi "$HOME"/.config/vivaldi \
    --bind "$HOME"/VivaldiDownloads "$HOME"/Downloads \
    --ro-bind "$HOME"/.icons "$HOME"/.icons \
    --setenv XCURSOR_PATH "/run/host/user-share/icons:/run/host/share/icons:$HOME/.icons" \
    /usr/bin/vivaldi-stable --enable-features=UseOzonePlatform --ozone-platform=wayland
```

Great, this is good, right? No. Sure, it's better then nothing, but still behind Flatpak, because Portals.

## What's the Deal with Portals?
In the shell script above, we expose the entire a couple of directories, including the home directory. Sure, it's read-only, but nothing will stop a website from just reading those files and sending them somewhere else. We need to make a smaller hole.

A simple way of doing this would be to give access to a single folder, and then copy files when needed. This works, but is cumbersome to the user (me). It would be nice if we could automatically do that. Well that's what the [FileChooser Portal](https://docs.flatpak.org/en/latest/portal-api-reference.html#gdbus-org.freedesktop.portal.FileChooser) does. It allows the user to select any file, but not require the program to have access to the home directory at all, through some dbus proxy magic.

# Implementing Portals
So we just set up portals, right? After some digging around, I made some tweaks and created this:
```sh 
#! /usr/bin/bash

APP_FOLDER="$XDG_RUNTIME_DIR/app/net.vivaldi.Vivaldi"
mkdir -p "$APP_FOLDER"

if [ -z "$DBUS_SESSION_BUS_ADDRESS" ]; then
  export DBUS_SESSION_BUS_ADDRESS="unix:path=$XDG_RUNTIME_DIR/bus"
fi

bwrap --bind / / --die-with-parent --clear-env \
  xdg-dbus-proxy \
  "$DBUS_SESSION_BUS_ADDRESS" \
  "$APP_FOLDER/bus" \
  --filter \
  --log \
  --talk=org.freedesktop.* \
  --call="org.freedesktop.portal.Desktop=org.freedesktop.portal.Settings.Read@/org/freedesktop/portal/desktop" \
  --broadcast="org.freedesktop.portal.Desktop=org.freedesktop.portal.Settings.SettingChanged@/org/freedesktop/portal/desktop" &

sleep 0.1

bwrap \
    --unshare-all \
    --share-net \
    --symlink /usr/lib /lib \
    --symlink /usr/lib64 /lib64 \
    --symlink /usr/bin /bin \
    --symlink /usr/bin /sbin \
    --ro-bind /usr/lib /usr/lib \
    --ro-bind /usr/lib64 /usr/lib64 \
    --ro-bind /usr/bin /usr/bin \
    --ro-bind /etc /etc \
    --ro-bind /usr/share /usr/share \
    --ro-bind /opt/vivaldi /opt/vivaldi \
    --dev /dev \
    --dev-bind /dev/dri /dev/dri \
    --proc /proc \
    --ro-bind /sys/dev/char /sys/dev/char \
    --ro-bind /sys/devices /sys/devices \
    --ro-bind /run/dbus /run/dbus \
    --dir "$XDG_RUNTIME_DIR" \
    --chmod 0700 "$XDG_RUNTIME_DIR" \
    --ro-bind "$XDG_RUNTIME_DIR/wayland-1" "$XDG_RUNTIME_DIR/wayland-1" \
    --ro-bind "$XDG_RUNTIME_DIR/pipewire-0" "$XDG_RUNTIME_DIR/pipewire-0" \
    --ro-bind "$XDG_RUNTIME_DIR/pulse" "$XDG_RUNTIME_DIR/pulse" \
    --ro-bind "$APP_FOLDER/bus" "$XDG_RUNTIME_DIR/bus" \
    --bind-try "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" \
    --dir /tmp \
    --ro-bind "$HOME" "$XDG_RUNTIME_DIR/dconf" \
    --bind "$HOME"/.config/vivaldi "$HOME"/.config/vivaldi \
    --bind "$HOME"/VivaldiDownloads "$HOME"/Downloads \
    --ro-bind "$HOME"/.icons "$HOME"/.icons \
    --setenv XCURSOR_PATH "/run/host/user-share/icons:/run/host/share/icons:$HOME/.icons" \
    --new-session \
    --die-with-parent \
    /usr/bin/vivaldi-stable --enable-features=UseOzonePlatform --ozone-platform=wayland "${@}"
```

We launch `xdg-dbus-proxy`, tell the sandbox to use that as its bus, and then launch the program. We're all good, right? No, because of `xdg-desktop-portal`'s behavior. `xdg-desktop-portal` (which I'll shorten to `xdp`) is the one that actually provides the portals. However, it acts differently when a Flatpak is using a portal vs a sandboxed (but non-Flatpak) program. Why? Because `xdp` expects non-Flatpaks to have access to the system anyway.

*sigh*, really?

This behavior is not well documented, and really doesn't make sense at all. Supposedly it has something to do with security, but I digress. [I opened a GitHub issue](https://github.com/flatpak/xdg-desktop-portal/issues/1076) on the `xdp` repo and was told the following:
> You do not use a sandbox that is supported by xdp (flatapk or snap) and therefore xdp assumes your program is allowed to access this path because it assumes it is an "normal", unsandboxed host program.
>
> Very unfortunate situation right now that xdp has only support for these two and nor for a generic one (via some kind of plugin or api mechanism). So if you use firejail/bubblejail/plain bubblewrap/crablock you can not benefit from the documents portal (and other portals have a "is allowed anyway" logic too).
>
> There's a hacky workaround by pretending to be a platpak. You can place a minimal `/.flatpak-info` inside your sandbox. See netblue30/firejail#4716 (comment).
>
> \- rusty-snake

So I did that:
```sh 
  --ro-bind-data 3 "/.flatpak-info" \
  # ...
  /usr/bin/vivaldi-stable --enable-features=UseOzonePlatform --ozone-platform=wayland "${@}" \
  3<<EOF
[Application]
name=$APP_NAME
EOF
```

But... it didn't work.


After many days of debugging and looking into `/proc/{PID}/root` (yes, that's how annoying debugging sandboxes is), it turns out `xdg-dbus-proxy` also needed to have a `.flatpak-info` file in the root directory for its sandbox. [This is apparently to be expected](https://github.com/flatpak/xdg-desktop-portal/issues/1076#issuecomment-1689696764).

> If you're using `xdg-dbus-proxy`, then the message bus is receiving a D-Bus connection from `xdg-dbus-proxy`, not directly from the sandboxed app itself. This means that when `xdg-desktop-portal` asks the message bus "who sent this message?", the message bus tells it the process ID of `xdg-dbus-proxy`.
>
> Flatpak puts `/.flatpak-info` in the filesystem root of both `xdg-dbus-proxy` and the actual sandboxed app, so that the `xdg-dbus-proxy` can be identified as being run on behalf of the sandboxed app. If you are faking a Flatpak app then you will need to do the same.
>
> \- Simon McVittie



After doing that, it worked! Here's the final script:
```sh 
#! /usr/bin/sh

APP_NAME="net.vivaldi.Vivaldi"
APP_FOLDER="$XDG_RUNTIME_DIR/app/$APP_NAME"
mkdir -p "$APP_FOLDER"

if [ -z "$DBUS_SESSION_BUS_ADDRESS" ]; then
  export DBUS_SESSION_BUS_ADDRESS="unix:path=$XDG_RUNTIME_DIR/bus"
fi

# A sandboxed dbus filter that 
# makes things a little safer
#
# Bwrap was initially for --die-with-parent,
# but was expanded to fix bugs related to portals
set_up_dbus_proxy() {
  bwrap \
    --new-session \
    --symlink /usr/lib64 /lib64 \
    --ro-bind /usr/lib /usr/lib \
    --ro-bind /usr/lib64 /usr/lib64 \
    --ro-bind /usr/bin /usr/bin \
    --bind "$XDG_RUNTIME_DIR" "$XDG_RUNTIME_DIR" \
    --ro-bind-data 3 "/.flatpak-info" \
    --die-with-parent \
    --clear-env \
    -- \
    xdg-dbus-proxy \
    "$DBUS_SESSION_BUS_ADDRESS" \
    "$APP_FOLDER/bus" \
    --filter \
    --log \
    --talk="org.freedesktop.portal.Documents" \
    --talk="org.freedesktop.portal.Flatpak" \
    --talk="org.freedesktop.portal.Desktop" \
    --talk="org.freedesktop.portal.Notifications" \
    --talk="org.freedesktop.portal.FileChooser" \
    --call="org.freedesktop.portal.Desktop=org.freedesktop.portal.Settings.Read@/org/freedesktop/portal/desktop" \
    --broadcast="org.freedesktop.portal.Desktop=org.freedesktop.portal.Settings.SettingChanged@/org/freedesktop/portal/desktop" 3<<EOF
[Application]
name=$APP_NAME
EOF
}

set_up_dbus_proxy &
sleep 0.1
bwrap \
  --unshare-all \
  --share-net \
  --new-session \
  --symlink /usr/lib /lib \
  --symlink /usr/lib64 /lib64 \
  --symlink /usr/bin /bin \
  --symlink /usr/bin /sbin \
  --ro-bind /usr/lib /usr/lib \
  --ro-bind /usr/lib64 /usr/lib64 \
  --ro-bind /usr/bin /usr/bin \
  --ro-bind /etc /etc \
  --ro-bind /usr/share /usr/share \
  --ro-bind /opt/vivaldi /opt/vivaldi \
  --dev /dev \
  --dev-bind /dev/dri /dev/dri \
  --proc /proc \
  --ro-bind /sys/dev/char /sys/dev/char \
  --ro-bind /sys/devices /sys/devices \
  --ro-bind /run/dbus /run/dbus \
  --bind "$XDG_RUNTIME_DIR" "$XDG_RUNTIME_DIR" \
  --ro-bind "$XDG_RUNTIME_DIR/wayland-1" "$XDG_RUNTIME_DIR/wayland-1" \
  --ro-bind "$XDG_RUNTIME_DIR/pipewire-0" "$XDG_RUNTIME_DIR/pipewire-0" \
  --ro-bind "$XDG_RUNTIME_DIR/pulse" "$XDG_RUNTIME_DIR/pulse" \
  --bind "$XDG_RUNTIME_DIR/doc" "$XDG_RUNTIME_DIR/doc" \
  --bind "$APP_FOLDER/bus" "$XDG_RUNTIME_DIR/bus" \
  --bind-try "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" "$XDG_RUNTIME_DIR/app/org.keepassxc.KeePassXC" \
  --dir /tmp \
  --bind "$HOME"/.config/vivaldi "$HOME"/.config/vivaldi \
  --bind "$HOME"/VivaldiDownloads "$HOME"/Downloads \
  --ro-bind "$HOME"/.icons "$HOME"/.icons \
  --ro-bind-data 3 "/.flatpak-info" \
  --setenv XCURSOR_PATH "/run/host/user-share/icons:/run/host/share/icons:$HOME/.icons" \
  --setenv GTK_USE_PORTAL 1 \
  --cap-drop ALL \
  -- \
  /usr/bin/vivaldi-stable --enable-features=UseOzonePlatform --ozone-platform=wayland "${@}" \
  3<<EOF
[Application]
name=$APP_NAME
EOF
```

Complicated, sure, but it works properly with portals. These are all workarounds, but based on what I know, they shouldn't affect overall security all that much. After running this for a few days, there really aren't many issues related to the sandbox (especially after refining the script further).

Anyways, that's it for this small writeup, just wanted to get this out to the internet for future people trying to go this route. Cya!
