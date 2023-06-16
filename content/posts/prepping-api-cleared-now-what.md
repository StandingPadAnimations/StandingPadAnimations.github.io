---
title: "Prepping Api Cleared! Now What?"
date: 2023-05-18T16:52:29-05:00
draft: false
toc: false
images:
tags:
  - MCprep
  - Blender
---

Just yesterday I gave the greenlight for [Prepping API](https://github.com/TheDuckCow/MCprep/issues/329), a proposal that would allow users to create their own prep material functions in Python.

But is it worth it?

That proposal was made in 2022, and for about a year now I've spent time thinking about how such an API could be secured. The problem is obvious: this API would allow arbitrary Python scripts to be loaded.

Sandboxing? Not in Blender where we have only pure Python.
Restricting modules? I guess we'll ban half of the standard library.
Custom scripting language? Not with the current state of things.

Does it matter?

I think it does. As I stated in my comment:
> {{< typeit 
  speed=20
>}}
We MCprep maintainers have a responsibility in keeping users' systems safe. If we make the Prepping API too easy to enable and users suffer as a result, I personally believe the blame would lie on us as we could have made this far harder to exploit.
{{< /typeit >}}

This new feature is a both a blessing and a curse. It's a blessing since it allows MCprep to better support edge case setups, and gives users more power in material generation, but I feel that I've just approved of something I'll regret in the future.

MCprep's audience is mostly 12 year olds who want to have fun making Minecraft animations. There's nothing fun in losing your system. This question really applies to the entire Minecraft animation space, I've started seeing a surge of rigs that require custom, poorly maintained (most of the time) addons made by random people. I fear one of these days, we're going to have a widespread issue of users losing their systems due to a malicious script, or a poorly defended `exec` statement.

So let me rephrase the question: Does it matter when the majority of Minecraft animators are 12 year olds looking for fun?

Yes. That's all I need to say.
