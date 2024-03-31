---
title: "The Next Step with Vivy"
date: 2024-03-31
toc: false
images:
tags:
  - MCprep
  - Vivy
---

A while back I announced [Vivy](/posts/2023/12/new-years/#vivy), the in-house fork of MCprep with an overhauled material system that gives more control to the user. At the time, I stated I wasn't interested in making it a full fork of MCprep for the public as Vivy has a higher learning curve then MCprep when it comes to using. Well I've thought about it a little more and have decided to make it a full fork. 

# Things that Need to be Done
To make Vivy a full fork however, a lot of things need to be done.

## Code Side
For starters, Vivy's material system needs to be properly integrated in the rest of the codebase. Right now, Vivy's material system uses [seperate](https://github.com/StandingPadAnimations/Vivy/blob/d93046b45989aea494d3f60f4ab81ce329c7c54c/MCprep_addon/materials/vivy_materials.py#L279) [operators](https://github.com/StandingPadAnimations/Vivy/blob/d93046b45989aea494d3f60f4ab81ce329c7c54c/MCprep_addon/materials/vivy_materials.py#L407) for everything material related, to avoid breaking other parts of MCprep such as spawners. However, to make Vivy a proper fork, we'd need to properly redo the main MCprep operators.

One issue in Vivy's current system is that it uses raw JSON everywhere, which tends to make things messy. This was mostly due to sheer laziness on my part with wanting to get something that works, but that's not acceptable if we want to make Vivy a full public fork. To help with this, Vivy's material system have been split into 2 parts: the Vivy operators in the GNU GPL licensed addon, and JSON parsing + "Independent Operations" (operations that don't depend on Blender). The latter part is now on its own repository, under a more permissive BSD 3-Clause license called Vivy Components.

{{< github repo="StandingPadAnimations/Vivy-Components" >}}

Vivy Components will also help with one area Vivy has sorely been lacking in, UX.

## Documentation 
Vivy is an addon with a high learning curve. Out of the box, there's nothing; prep materials won't work, textureswap won't work, etc. Although some people have managed to figure out how to use Vivy by just looking at the Mastodon posts I made on Vivy, this isn't ideal as it only gives a bare minimum amount of information needed to use Vivy; Vivy as a system is highly complex, and should be learned in full for users to take advantage of. This is where GitHub Wikis becomes useful.

# Upstream
On the MCprep Discord, I've said in a couple of places that I'm thinking of implementing Vivy's material system in MCprep directly. Well, that won't be happening in the near future. The primary reason goes back to the high learning curve, but also some design decisions in MCprep that conflict with Vivy: MCprep is designed to be as simple as possible, and to do as much heavy lifting as possible. Vivy by contrast is the opposite, giving the user far more control in many areas while not being as simple. As such, it's better in the long run if Vivy continues to remain separate from MCprep (although both Vivy and Vivy Components are open source, in case someone wants to do that).

I can't give an exact timeline of when all of this will be done, other than "by my 2024 Summer Piece" (see [here](/posts/2023/12/new-years/#less-art-aww-man) for what I mean). Currently I'm also working on MCprep for the MCprep 3.6 update, and IRL I also have school to be concerned about. If anyone wants to contribute to Vivy, go ahead, it would be appreciated.

{{< github repo="StandingPadAnimations/Vivy" >}}

Cya!
