---
title: "MCprep Development Isn't Sustainable"
date: 2023-06-13T0:01:33-05:00
draft: false
toc: false
images:
tags:
  - MCprep
  - Blender
---
{{< image src="/imgs/mcprep-mi-exodus/meme.png" alt="MCprep is turning 10 now. So we can chill right? blank stare. right?" position="center" style="border-radius: 8px;" >}}

+Note: MCprep is turning 10 on October 28

In February 2023, the Mine-imator (also known as Mi) developer Nimi [announced the end of Mi's development](https://www.mineimatorforums.com/index.php?/topic/90712-dev-update-24-moving-on-20-release-date/):

> {{< typeit 
  speed=20
>}}
With the release of the much awaited 2.0 update, David and I will be leaving development of Mine-imator/Modelbench due to limited availability and wanting to pursue other projects. While active development will be over, patches may still come out if any critical/project-breaking bugs comes up but anything hardware or graphics related likely won't be fixed. The source code for Mine-imator and Modelbench will be updated accordingly on March 1st for any developers who want to mod the program and add their own features. 
{{< /typeit >}}

Of course, this has triggered an exodus of Mi users to Blender. While that's a good thing, it forces us MCprep developers to have to rethink MCprep's design goals. See, just like many Blender addons, MCprep aims to not abstract too much. However, many Mi users are used to and expect heavy abstraction, which conflicts with the design goals of MCprep.

In addition, we're now at a point where man-power. As I have stated before (in the article below), for 10,000 users, we only have 2 active maintainers and 4 external contributers (1 active at the moment). 
{{< article link="/posts/problems-of-mcprep/" >}}

This brings up the larger issue that MCprep development isn't sustainable. 

At this point a question has to be asked: will MCprep make it to 12 years? 15? As it stands, with the current circumstances and lack of manpower, I wouldn't be surprised if it didn't even make it to 11.

## Sustainability of MCprep
Most users want new features. Personally, I would love to make an MCprep release solely focused on fixing bugs and actually revamping ancient parts of the MCprep codebase, but I bet you a big portion of the community will be mad that we (god forbid) choose to focus on making MCprep's existing features better and not add anything new. Even now, we've already got people asking when we're going to add 1.20 assets, despite 1.20 coming out 5 days ago (as I write this). 

And that's not factoring life outside of MCprep. TheDuckCow and I are getting busier each day, and it's only going to ramp up. TheDuckCow works at Poligon and is working the game [Wheel Steal](https://twitter.com/WheelStealGame) (you should check it out, it's looking really good now). Meanwhile I'm just starting to enter the architectual rendering and IT worlds. 

So where do we go?

Ultimately the community decides. MCprep is open source, which means contributing code is easy. While TheDuckCow and I might be too busy with our day-to-day lives to do active MCprep development, we do have time to look at submissions and pull requests. But those submissions pull requests must come from the community. If the community is not willing to volunteer at least a little bit of their time in submitting contributions, then MCprep's fate has already been sealed.

I've already been talking with TheDuckCow on a "Summer of MCprep" sort of idea (based of Blender's Summer of Code) where we create a list of goals and specifically focus on certain aspects of MCprep. A part of me though feels it's going to be useless, but we have to try.

Happy almost-10 years to MCprep, let's hope it makes it to 11.
