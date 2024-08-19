---
title: "Affinity on Linux"
date: 2024-06-22T14:09:26-05:00
lastmod: 2024-08-19
toc: false
images:
tags:
  - Affinity
---

Yes, you heard that right, I got Affinity Photo and Designer working on Linux

{{< image src="gallary/photo-linux.webp" alt="Screenshot of Affinity on Linux" position="center" style="border-radius: 8px;" >}}

Here's a write-up explaining how I did it, using [Bottles](https://usebottles.com/)

### Some Important Info:
- If you have Affinity 1, this is mostly unnecessary (except maybe Bottles setup), since Upstream WINE supports most releases of Affinity 1. Later versions (`1.10.3` and above) might be a bit of a hit or miss though, since Serif changed their license manager at some point, and it requires some files from Windows (see [WinMD](#winmetadata-files) for instructions on how to set that up)
- Much of this comes from [Wanesty's guide](https://codeberg.org/Wanesty/affinity-wine-docs). If you discover any fixes, please comment those fixes on the repo. That said, Wanesty's guide uses Rum to manage prefixes, whereas we're using Bottles (just a personal preference on my part).
  - Compatibility wise, this should work with Affinity 2.5 (the latest release)
  - Wanesty's repo also has a [Tips and Fixes](https://codeberg.org/wanesty/affinity-wine-docs/src/branch/guide-wine8.14/Tips-n-Fixes.md) section if you come across some issues.

- There are still many known problems with Affinity on WINE that have not yet been solved, such as user preferences not saving. That said, at least in the past few days, Affinity has worked pretty well on Linux

- For those saying "Why use Affinity instead of Free Software?", I'll say this (and this will be a hot take): *I run Linux for choice, __and that includes the choice of using whatever software I want__*. If you don't want to run Affinity at all, that's fine, but don't act like you're somehow morally superior as a result. Many people (myself included) prefer Affinity over free software alternatives, whether it be personal preference or absolute necessity (I'm looking at you GIMP and your lack of multi-layer EXR support). If you've never had any issues, good for you, but that doesn't mean they don't exist.

Anyway, here's a basic overview of what I did to get Affinity to work.

## WINE
For Affinity 2, upstream WINE doesn't support the necessary functions needed.

Thankfully, ElementalWarrior has [created some patches](https://gitlab.winehq.org/ElementalWarrior/wine) to get Affinity to work on WINE [^1], which we'll be using to get Affinity working on Linux

[^1]: Footnote for transparency: This tutorial used to use the ElementalWarrior fork of WINE 8.14, then Lukas Magauer rebased those patches for WINE 9.12. Finally, ElementalWarrior updated the patches to WINE 9.3. Yeah welcome to WINE development.

I don't know about y'all, but I don't really want to install all of the build dependencies on my system. In addition, you might have issues if you're on a more stable distro. Thankfully, someone has made a [Podman container](https://github.com/daegalus/wine-builder) (you can also use Docker if you wish) to build WINE from source without impacting the main system.

So first we need to clone ElementalWarrior's patches. We only need the `affinity-photo3-wine9.13-part3` branch, so to save time, we can simply do the following:
```sh
git clone https://gitlab.winehq.org/ElementalWarrior/wine.git ElementalWarrior-wine -b affinity-photo3-wine9.13-part3
```

Next we need to `cd` into repo and run the `wine-builder` container. I'll be using Podman since that's what the container was designed for, but you can also use Docker
```sh
podman run -v ./:/wine-builder/wine-src wine-builder
```

This will take a while, so find something else to do in the meantime.

## Bottles
Now we need to create a Bottle for Affinity. I'm assuming y'all know the basics of using Bottles and running executables with it (as well as installing dependencies), so I'll simply give a basic overview.

First, copy the built WINE to the runners directory for Bottles. This can either be `$HOME/.local/share/bottles/bottles/runners` (if installed natively) or `$HOME/.var/app/com.usebottles.bottles/bottles/runners` (if installed as a Flatpak). The built WINE should exist in a `wine-install` folder.
```sh
cp -r path/to/ElementalWarrior-wine/wine-install/ path/to/bottles/runners/ElementalWarrior-9.3
```

Create a new bottle for Affinity, and with it, set the following under Settings:
- `Components > Runner`: ElementalWarrior-9.3
- `Components > DXVK`: Disabled
- `Components > VKD3D`: Disabled
- `Display > Advanced Display Settings > Renderer`: Vulcan
- `Compatibility > Windows Version`: Windows 10

Next, install the following dependencies:
- `allfonts`
- `dotnet35`
- `dotnet48`
- `mono`
- `vcredist2015` [^2]

[^2]: I've heard this can cause some issues with crashing, and Wanesty has removed it from her guide as a result. I'm keeping it here since it helps with export bugs, but do be aware of that.

### WinMetadata Files
Before we can run the Affinity installer, we need to copy some files from a Windows install. Not a Window install of Affinity, but the actual install of Windows itself. To do this, on Windows, copy `C:/windows/system32/WinMetadata` somewhere that you can access on Linux, and then copy those files to your Affinity bottle. [^3]
```sh
cp -r path/to/WinMetadata path/to/bottles/bottles/[bottle-name]/drive_c/windows/system32/WinMetadata
```

[^3]: For legal reasons, I cannot distribute these files.

### Preferences
One issue with Affinity on Linux is that preferences don't save properly, and no one knows why. The best option for now is to set important preferences (like OCIO config) on Windows, bring the config over from `AppData/Roaming` to the WINE bottle, and then change the XML as needed for any paths. Not ideal, but better then nothing.

With all of that done, you can now run the installer for any Affinity product! Like I said earlier, check out [Wanesty's repo](https://codeberg.org/Wanesty/affinity-wine-docs) if you come across any issues, as this guide is simply an Bottles adaption of her guide.

Enjoy!
