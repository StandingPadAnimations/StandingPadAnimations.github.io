---
title: "Plans for a New Vivy Addon"
date: 2024-05-03
toc: false
images:
tags:
  - Vivy
  - Blender
---

Yep, a new Vivy addon will be made. Here's why and how.

# The Rationale
For those that don't know, [Vivy](https://github.com/StandingPadAnimations/Vivy) is a fork of MCprep I made to give myself more control with the materials that MCprep generates. For the most part, it has succeeded, but as an MCprep fork, it's a headache to maintain.

MCprep goes through a lot of changes per update (admittedly, a lot of that is my fault, as I'm also a MCprep developer, and a lot of architectural changes come from me), which makes Vivy a hell to maintain. In addition, MCprep is also thousands of lines of code (17,000 as I write this), and while in theory an individual could make and maintain a fork, I have my plate full with MCprep already, so Vivy doesn't get the time it needs to be properly maintained. Ideally, one would be able to install both side-by-side, but that's not possible as conflicts would occur with registered classes.

Another reason is changes with Vivy that are better off getting a rewrite. [Vivy Components](https://github.com/StandingPadAnimations/Vivy-Components) was created to abstract much of the raw JSON parsing and handling for Vivy, but using it would require a full rewrite of the Vivy system anyway. In addition, I also want to change ow Vivy as a whole works, and I figure it will be more productive to just make a new addon.


# The How
Firstly, the old Vivy repo will be archived, and eventually a new Vivy2 repo will be created. It should be noted that none of this will affect the planned date for this year's Summer piece, since that won't rely on Vivy. That being said, the December piece will rely on Vivy, so we're starting early. 

The entire way Vivy will operate will be changed. I'll go more in detail once I get Vivy2 out, but in short, all materials will be stored in a tree hierarchy, over the current... idk what to call it. This config will be managed with nodes using Blender's custom nodetree API, but again, more on that in the future.

Unlike the current Vivy, Vivy2 will be made with public use in mind. No more of having to wait for me to write documentation on how to use Vivy (if future me keeps my word on that...).

Yeah, that's pretty much it. It's a bit of a messy post, since I wanted to get this out quickly. Cya!
