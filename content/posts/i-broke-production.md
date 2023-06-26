---
title: "How a Syntax Error I Made Deleted TheDuckCow's Files"
date: 2023-06-25
tags: 
    - MCprep
---

This just happened about an hour ago as I write this. So I'm just chilling when I get a GitHub notification email. Normally these aren't a bug deal, but [this one](https://github.com/TheDuckCow/MCprep/pull/422#issuecomment-1606525786) was a bug deal:

> {{< typeit 
  speed=20
>}}
"Don't know what just happened, but running my compile.sh script on dev somehow deleted all addons ... I think across all versions of blender for me, which was a real pain. But that was on dev [EDIT: that was a lie, I realize I'm check'd out with znight's annotate-documment branch). Are you aware of anything that got pushed to dev that would have changed the compile or clean scripts?"
- TheDuckCow
{{< /typeit >}}

TheDuckCow ran `compile.sh` (which is how we build MCprep) and it ended up deleting his installed Blender addons... across 7 versions of Blender.

Shit.

Initially it was thought to be a issue on `dev`, but it turned out to be an issue on `milestone-3-5-0`. I remembered [this commit](https://github.com/TheDuckCow/MCprep/commit/eccda95b80ae0a6445015dd0d6743111992bb3da) I made earlier this year, specifically the following section:

> {{< typeit 
  speed=20
>}}
"SC2115 is due to an `rm -rf "$i/$NAME/" statement, which if the variable
is not set or null, a person's system can be massively messed up."
- Me when making commit eccda95
{{< /typeit >}}

`SC2115` is defined [here on the ShellCheck wiki](https://www.shellcheck.net/wiki/SC2115). It occurs when a bash script tries to perform a deletion on a variable that might be null. This can have massive consequences, such as with [this user who lost their home directory](https://github.com/ValveSoftware/steam-for-linux/issues/3671) due to Valve (of all companies) making this mistake for the Steam client.

The mistake I made was in the "fix":
```sh
rm -rf "${i/$NAME:?}/"
```

Which Bash interprets as:
- Replace `i` with its value
- Check if `NAME` is null and if so, error out. Otherwise replace it with its value
- Remove anything in `i` that matches with `NAME` (which is nothing)
- Remove the resulting path

When I wrote this, I thought Bash was going to expand `i` and `NAME` after checking if they're null, and then put them with `/` in between (it's a filepath). However, Bash instead took it as a whole expression. The correct line should have been:
```sh
rm -rf "${i:?}/${NAME:?}"
```

Which translates to:
- Check if `i` and `NAME` are null and error out if they are
- Replace `i` and `NAME` with their values
- Remove the resulting path

What that means was instead of removing `path/to/addons/folder/MCprep`, it was removing `path/to/addons/folder`, which meant all of TheDuckCow's installed Blender addons were deleted.

In my defense, ShellCheck should have given a warning in this case (I've checked again today, ShellCheck considers everything fine), and [I've opened an issue](https://github.com/koalaman/shellcheck/issues/2786) on the ShellCheck repo for this very case, but past me should have known.

Thankfully we're replacing `compile.sh` with a [state of the art build system written in PEP8-complient Python](https://github.com/TheDuckCow/MCprep/pull/422), so hopefully this won't happen again (I hope). Just in case though, I've fixed the error on the MCprep repo, but that isn't going to restore any files.

Moral of the story: when working with Bash, no errors still means there's errors.
