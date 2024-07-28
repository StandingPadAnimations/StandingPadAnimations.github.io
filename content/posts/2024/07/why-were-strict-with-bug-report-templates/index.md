---
title: "Why We're Strict With Bug Report Templates"
date: 2024-07-28
draft: false
toc: false
images:
tags:
  - MCprep
---

I know, I know, a lot of people hate how we've become strict with bug report templates on the MCprep repo, especially in the past, we might have been a lot more forgiving with bug reports. I think it's best if I explain why we need to be so strict with using the proper template for bug reports.

# The Problem
One of the biggest issues we've had (and still do some degree in some areas) is the lack of useful information in bug reports. What defines useful information? For MCprep development, useful information is the following:
- Detailed description of the problem (with screenshots!)
- MCprep and Blender versions
- Steps to reproduce the issue (biggest thing!)

However, in the past, a good chunk of bug reports in MCprep would be some variation of the following:

> User: Hi I have an issue \
> Us: Ok, what is the issue? Can you elaborate further or share a screenshot? \
> *silence...*

This caused several issues for us developers, including but not limited to:
- Back and forth over several days, weeks, even months, just to get useful information
- Unable to gather more info due to users ghosting us after the initial report (since most don't use GitHub beyond just making a single bug report)
  - This still occurs somewhat with asset submissions, leading us to introduce a requirement that rig submitters must be active in the discussion, or risk their submission being rejected
- Bug reports that, after much effort, turn out to be user error (mostly due to ignoring updates), unnecessarily clogging the bug tracker for a long time
- Inability to reproduce bugs on our end due to poor descriptions with little to no steps to reproduce

## Built-in Reports
"But what about those reports we send in Blender itself" I hear some of you say. Sure, MCprep has built-in reports, but this is what they look like:
{{< image src="gallary/built-in-reports.webp" alt="What built-in reports look like on our end: just a bunch of hard to read rows" position="center" style="border-radius: 8px;" >}}

Ignoring the fact that this is not even accessible to most developers beyond us maintainers [^1], it's also just extremely hard to use, especially as all of the comments are just horrible for reproducing information. Here's some examples:
- "iron"
- "pls"
- "1"
- "CRAP YOU" (yes, this is a real comment made from someone on June 24th, 2024)
- "dawg imma be fr wit chu dw bout this my blender addons jus fr keep breaking" (if you're the user that made this comment, just know that you were also using MCprep 3.4.3. You're behind by like 3 versions)
- "3" 
- "4"
- "dream"

[^1]: To be specific, as far as I'm aware, built-in reports are only accessible to TheDuckCow and myself

From this assortment of comments, 2 things are clear: 1. that clearly I should compile a list of the funniest comments from the built-in tracker (seriously, who doesn't want to read stuff like this on a slow day?), but more importantly 2. the comments from the built-in tracker are useless. Sure, there's *some* useful info, and a minority of users are actually decent and explain what they were doing, but the keyword is *minority*. 

This isn't to say we don't use the built-in tracker, but these days, it's mainly a second source of information for known bugs if we want to determine how widespread something is. For example, we used it to determine how widespread a bug in textureswap was after the release of MCprep 3.5.2. Other then that though, it's mostly useless for regular development.

# Here Comes the Templates
We found that the only way to get more information from bug reports was to make said information a requirement when filing them out. GitHub makes this easy with [Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository). By adding fields for certain pieces of info, we've effectively made most bug reports much easier to reproduce and debug, or quicker to close if the issue is not a bug. There are exceptions of course since some people just don't follow instructions (see [#558](https://github.com/Moo-Ack-Productions/MCprep/issues/558)), but I estimate that, when counting all of the hours saved from pain and agony, we've saved *several years* worth of time and energy with bug reports as a whole. That's why we're extremely strict about using bug report templates, they save a lot of time and effort with debugging. [^2]

So please, just use the bug report template and fill it out correctly the first time.

[^2]: There is only one time reports that don't use the template are accepted: if they're opened by maintainers, but even then we use the bug report and feature request templates unless they hinder in our ability to describe what we're opening a GitHub Issue on
