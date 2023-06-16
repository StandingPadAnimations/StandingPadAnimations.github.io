---
title: "Problems of MCprep Development"
date: 2023-03-11T16:05:06-06:00
draft: false
toc: false
images:
tags:
  - Blender
  - MCprep
---

As the MCprep 3.4.2 release date draws nearer, I think it's important to remind users how MCprep development works, and how important it is that MCprep receives supports from the community. I feel like people have forgotten how much work goes into MCprep, and I think a little reminder wouldn't hurt.

## Overview
Currently, MCprep only has 2 active maintainers (TheDuckCow and myself). While the MCprep GitHub repo says there's 7, most of them haven't contributed in a while:
{{< image src="/imgs/mcprep-problems/maintainers.png" alt="List of all the maintainers" position="center" style="border-radius: 8px;" >}}

Now obviously TheDuckCow would have the most commits (411 at the time of writing this) since he's been working on MCprep for almost 10 years now (yes, MCprep has been around for 10 years), with myself being behind with 96 commits. The rest have made a couple of commits here and there, and as far as I know that was before we had an official guide on contributing. So we're already spread thin when it comes to implementing new features and bug fixes (not factoring how we also have things to do IRL). 

{{< image src="/imgs/mcprep-problems/dependency.png" alt="xkcd comic that represents the situation" position="center" style="border-radius: 8px;" >}}

Like any open source project though, MCprep depends on outside contributions, and we have a couple. These are the users who have contributed in the past:
- zNightlord: Blender 3.4 Mix node compatability
- Tiefseetauchner: Camera setup for panoramas
- Ghost (Ok Ghost is just a placeholder GitHub uses for deleted accounts) + Bytzo: The modern texture generator we're all familier with

I can literally count on one hand how many users have contributed to MCprep. In contrast, if we check the amount of unique IDs recorded by Google Analytics from MCprep 3.3.0 to 3.4.1 (for 2022), we find that **10,740** unique IDs have been recorded in the last year alone. If we add MCprep 3.2.5 and 3.2.5.1 to the mix, that number increases to **10,867**.

Now counting unique IDs isn't completely accurate, but it does give a general glimpse in the amount of MCprep users. If we add in that MCprep supports Blender versions 2.78-3.4 (that is **15 versions**) of Blender), it's impressive that MCprep receives quite stable updates every 4-6 months.

I'm not giving these stats to make people feel bad, I'm giving these stats to outline the reality of MCprep development. People seem to complain about MCprep features, while doing nothing to fix such issues. That isn't to say complaining about MCprep is a bad thing, but people seem to forget how spreadly thin we already are.

## How the Community Can Help
The simplest way the community can help is improve the assets MCprep provides, as that's were most complaints seem to arise from. We already have [asset submissions open](https://github.com/TheDuckCow/MCprep/issues/new?assignees=&labels=enhancement&template=Asset-Submission.yaml) for those interested. While most people submit rigs for new mobs, it's important to know that we also accept improved/replacement rigs for any existing mobs in MCprep (especially as BSS seems to no longer update their rig pack).

Also, report bugs on [GitHub](https://github.com/TheDuckCow/MCprep/issues), but please don't treat it like a support channel. That's what the [MCprep Discord server](https://discord.gg/mb8hBUC) is for.

If you know how to code in Python and have some experience, then bug fixes are also welcome. We have a [guide on contributing code](https://github.com/TheDuckCow/MCprep/blob/dev/CONTRIBUTING.md). We do expect however a basic understanding of the Blender Python API (BPY) and Git. A good first contribution is PEP8 Formatting (basically reformatting MCprep's code to make it comply with PEP8 convention), since that's doesn't rely too much on BPY and is relatively easy (just reformatting code).
