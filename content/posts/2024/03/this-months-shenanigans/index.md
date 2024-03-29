---
title: "This Month's Standing: March 2024"
date: 2024-03-28
draft: false
toc: false
images:
tags:
  - IRL
  - Blender
  - Minecraft Rendering
  - CommonMCOBJ
  - Website
---

It's been a while, and the past month has been a bit interesting. From Ramadan starting to CommonMCOBJ, there's simply a lot I should have written about in the past, so I'm creating this giant megapost. Enjoy!

~~Also, the phrase "This Month's Standing" is completely intentional lol~~

# Ramadan
This year Ramadan began around March 10th where I live [^1][^2], and so far it's going great. 

I wanted to create a special theme for this website for Ramadan or Eid (based on [a post](https://jamesg.blog/2024/02/19/personal-website-ideas/) of some ideas for personal websites), but let's just say calculating when Ramadan and Eid occur in JS is... non-existent if you want something accurate, so alas, no custom theming :c.

As a quick aside, I also had my second SAT (school issued) this month; haven't gotten my scores back though.

[^1]: It's a long story but the short answer is that the Islamic calendar is not globally in the same way the Gregorian calendar is, but rather is based on the lunar cycle in one's local region. As an aside, the Islamic calendar typically moves 11 days earlier in the year relative to the Gregorian calendar, so we're going to have Ramadan during winter in good a couple of years.
[^2]: Also this year, [Ramadan](https://en.wikipedia.org/wiki/Ramadan) and [Lent](https://en.wikipedia.org/wiki/Lent) coincide with each other!

# CommonMCOBJ
One of the highlights of the past month is [CommonMCOBJ](https://github.com/CommonMCOBJ/CommonMCOBJ), which aims to create a standard specification for exporting extra metadata that OBJ exporters previously didn't export. It's bare-bones currently, but we plan to add more parts such as biome exports to get accurate colors for grass and leaves.

As part of CommonMCOBJ, I had to crack my knuckles a bit and learn Kotlin + Java to create [cmc2OBJ](https://github.com/CommonMCOBJ/cmc2obj) (forked from jmc2OBJ), which serves as the reference implementation for CommonMCOBJ.

As of writing, Mineways has just implemented support in the latest beta (and plans to get it out soon), and jmc2OBJ has a separate branch implementing CommonMCOBJ. MCprep is also working towards reading and parsing CommonMCOBJ data to push adoption.

# Lighting Series
One of the things I want to work on is rewriting the [lighting series](http://www.standingpad.org/lighting-guide/). Put it simply, I hate it, I absolutely hate it. The writing is bad, it's too much of a step-by-step tutorial rather then actually teaching lighting, and I'm just not a fan. I think a lot of it boils down to simply it originally being a PDF file and thus me having to complete the full thing before pushing it. Now that I can put it here, I can work on it over a longer period of time.

Before I rewrite the whole series though, I have an idea for a "catalog of lighting", where different lighting options are showcased as a quick reference for artists, all with the same main subject(s) (currently, I'm thinking of using the Minecraft build, ["The Uncensored Library"](https://www.uncensoredlibrary.com/en), as it just has so much opportunity). It'll be quite a bit of time before I start working on that though.

A bit off topic, but I also want to continue my Cycles optimization series (which I haven't updated in over a year now), since there does seem to be some traffic coming to those pages. I have a couple of ideas on what to cover next...

# Some Other Things
I've moved from Hyprland to KDE Plasma 6 as my main desktop now, but I feel that deserves its own article.

The past month or 2 I've also been using [Feedbin](https://feedbin.com/home) for my RSS feeds and newsletters. I'm like it, it's convenient and simple to use. Although it's a monthly subscription, it's only $5 and the free trial is about a month too. Plus, it's [open source](https://github.com/feedbin/feedbin), and I do like a good open source project. 

Speaking of stuff I've been trying, I've also been trying out [Kagi](https://kagi.com), but I've only been using it for a short time so I can't give any opinions yet (not that I want to turn the rest of this post into a product review, I think those deserve their own posts).

I've applied for an ArchViz internship at a local architecture company, hope it goes well! As an interesting tidbit, the person who interviewed me mentioned that they use Blender and Unreal Engine, which sounds fun.

Just today I've been looking into a somewhat dead project called [Plan 9](https://9p.io/plan9/), which is a research OS created at Bell Labs in the 90s with the main developers of the original UNIX operating system. From what I've found, a lot of the commands in Plan 9 such as `mk` (the Plan 9 version of `make`) are apparently cleaner and improved from their original UNIX versions, but I'm more focused on [the mascot](https://9p.io/plan9/glenda.html):
{{< image src="gallary/plan9.webp" alt="A plump, cartoon rabbit wearing a space helmet" position="center" style="border-radius: 8px;" >}}

Come on, this is peak mascot design, I'm really tempted to set this as my profile picture on the internet now. If Plan 9 was a desktop system with good support, this mascot alone would convince me to jump from Arch. Also I really like old style plain HTML websites like this:
{{< image src="gallary/website.webp" alt="A plain HTML website with very little content, only text" position="center" style="border-radius: 8px;" >}}

Honestly part of me wishes I had started with that since the beginning, but oh well. Maybe future me can do that, although that would be a massive pain.

That's pretty much all I have this month; hopefully I remember to start writing more. Cya!
