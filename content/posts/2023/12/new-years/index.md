---
title: "It's New Year's! Some updates going forward"
date: 2023-12-31
draft: true 
tags:
  - Blender 
  - IRL
---

It's New Year's, so you know what that means! Another New Year's render, but first some life updates to go through (ugh, I know). If you want to skip all of this, then click the button.

{{< button href="#this-years-new-years-render" target="_self" >}}
Skip
{{< /button >}}

As it might have been quite obvious over the last year, I've not been making many pieces, and I've started to break down the wall between my real world life and the digital world. I'll get to the former a bit later, but the latter might need a bit of explaining.

# Bring down the Wall!
For several years, I've been a believer in trying to keep one's digital life seperate from one's real life.
{{< image src="gallary/worlds.webp" alt="Seperate digital and real lives" position="center" style="border-radius: 8px;" >}}

But now at this point in time, it's important that my work (especially development related work) has something to be attributed to, hence why I'm breaking that seperation just a tad bit. 
{{< image src="gallary/worlds-combined.webp" alt="Less seperate digital and real lives" position="center" style="border-radius: 8px;" >}}

# Less art? Aww man
On some sadder news, I can't make as much art as I used to in the past. Mostly because I've exhausted all of my ideas and new ones come at a slow rate, and partly because I simply don't have much time anymore, which is why starting next year, I want to make at least 2 major pieces; one in May-June (Spring/Summer), and one in November-December (New Year's, like the now). There will likely be some other stuff in between, but those are when I plan to make "major pieces", pieces that wil make it on to my [ArtStation](https://www.artstation.com/standingpad). Ideally it wouldn't have gotten to this point, but that's just what's it's going to be moving forward.

I'm also doing a personal rebrand of myself as an artist (in conjunction with the previous section), so I've made a new logo and watermark (SVGs below):
{{< figure src="gallary/logo-cube.svg" caption="New Logo" >}}
{{< figure src="gallary/watermark-cube.svg" caption="New Watermark" >}}

# This Year's New Year's Render 
~~(that title is a bit of a mouthful)~~

With all of that out of the way, if you're just here for the render, here it is, you're welcome

{{< image src="gallary/NY-2023-2024.webp" alt="New year render" position="center" style="border-radius: 8px;" >}}

But I assume you want to know a bit more on how it's made if you're on the blog post for it (why else would you be here after all?), so here's a breakdown of some of the new things I did for this particular piece.

## Vivy
One of the things I've been working on is Vivy: an in-house fork of MCprep with a much improved materials system. I've been rambling a bit about it on Mastodon the past couple of months.
<iframe src="https://mastodon.art/@standingpad/111233778135205963/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="600" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.art/embed.js" async="async"></script> 

Now I know some people may be saying "gib download pls", especially after seeing the PBR demo
demo.
<iframe src="https://mastodon.art/@standingpad/111327393975731655/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="600" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.art/embed.js" async="async"></script>

While I initially wanted to make Vivy a full fork of MCprep (interestingly enough I actually got an offer from Kevin at Pidgeon Tools, the developers of Super Image Denoiser, to make it a part of their line of addons but denied the offer), I've since decided to keep it as an in-house fork, for these reasons:
1. As impressive as the demos look, there's a lot of manual work involved
2. I've been trying to design a simple to use UI for the full material system, but it's basically impossible
3. I don't want to deal with angry 12 year olds expecting something as easy as MCprep (Vivy is very much designed for people with **a lot** of Blender experience)

I have made it availible on GitHub for transparency reasons, but keep the above in mind if you plan on trying to use it yourself:
{{< github repo="StandingPadAnimations/Vivy" >}}

## Optimizing Scenes for Laptops
When I began working on this back in November, I made one rule: until the final render, everything is to be done on a laptop (the final render would be rendered on a system with an RTX 4060 and 32 GB of RAM). The reason is simple: using my more powerful system for everything is an absolute pain, from dealing with Windows (my daily driver is an Arch Linux system) to dealing with a Fornite gamer that doesn't seem to understand time management, it's easier for me to make everything on my laptop, then do the final render on a more powerful system.

Traditionally we think of optimization in Blender as optimizing the render time, but in this case, I had to optimize for something else: viewport performance. After all, you can't have a render if Blender keeps crashing. In the past, this wasn't something I normally had to think about, but on a laptop, it's a number 1 priority.

The main thing that caused crashing of my laptop was all objects being in the scene at once. For a while, I tried to just deal with it, but it got so bad that I began to sit down and rework how I do collections.

In the past, I would just have a mess of an outliner.
{{< image src="gallary/mess.webp" alt="Organized lights, mess everywhere else" position="center" style="border-radius: 8px;" >}}

but now I actually needed to have something organized to manage the mess. I did this by having a seperate forground and background collection, and seperating everything into those 2 collections. This allowed me to easily hide the background (unneeded 90% of the time) and unhide it when it came time to render.
{{< image src="gallary/outliner.webp" alt="Organized outliner with foreground and background, and seperate collections for everything else" position="center" style="border-radius: 8px;" >}}

It was with this trick that allowed me to continue working on a simple laptop. For further optimization, I even split the OBJ in 2 to allow seperate background and forground pieces.
{{< image src="gallary/background.webp" alt="Full OBJ" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/foreground.webp" alt="Just the foreground" position="center" style="border-radius: 8px;" >}}

I also "duplicated" the OBJ to use in the background, but using collection instances. What I did was, in a seperate file, create a version of the OBJ with some heavy decimation (finer details aren't needed for things far away), then imported it as an instance. This meant that, while I had multiple "duplicates" of this background OBJ, they all shared the same object data, which was important to reducing memory usage. Sadly they're not really noticeable at the final camera angle, but it's a neat trick nontheless. 

## Micro-detailing
For this scene (and all scenes moving forward), I'm trying a new method called micro-detailing, where I add smaller details on models, but try to keep the scene as a whole distinctly Minecrafty.

It's quite obvious on the dress and purse, but I also used higher resolution textures (32x32 instead of 16x16) with PBR.
{{< image src="gallary/md-1.webp" alt="Micro-detailing on the dress" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/md-2.webp" alt="Micro-detailing on the purse" position="center" style="border-radius: 8px;" >}}

It's far from perfect, but it'll only get better.

