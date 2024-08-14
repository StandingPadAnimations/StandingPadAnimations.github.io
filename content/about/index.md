---
title: About Me
description: About StandingPad, also known as Mahid Sheikh; 3D artist and MCprep developer
images: 
- /imgs/WebsiteBanner.webp
showDate: false
showRelatedContent: false
showAuthor: false
showReadingTime: false
showWordCount: false
noComment: true
showPagination: false
---
<link rel="stylesheet" href="overrides.css">
<link href="/css/aos.css" rel="stylesheet">
<script defer src="/js/aos.js"></script>
<script>
window.addEventListener('load', () => { 
  if ((window.matchMedia('(prefers-reduced-motion: reduce)').matches)) { 
    AOS.init({ disable: true }); 
  } else { 
    AOS.init({ disable: 'mobile' }); 
  } 
}); 
</script>

{{< figure src="gallary/me/main.webp" default=true class="my-photo" alt="Mahid Sheikh" width=2886px height=3798px >}}

<br class="linebreak-cls">

Hey there, I'm Mahid Sheikh, a 3D artist and developer from the Dallas-Fort Worth metroplex in Texas. I'm also a Pakistani-American (born in the US) and an Muslim. My main area is Minecraft rendering, and I work on the MCprep addon for Blender. In addition, I also maintain the Flatpak package for Bforartists. Outside of 3D rendering and programming, I play the flute (played for my local high school marching band), do some photography, or read.

A bit boring, I'm aware.


<div style="clear:both;"></div>

# 3D art work
My main area of work is Minecraft rendering. My main piece of software is Blender, though I also gained Revit certification in May of 2023.

{{< figure src="gallary/revit-badge.webp" alt="Revit Certification Badge" href="https://www.credly.com/badges/63c62d4b-7f16-44d7-8305-a49771cbd8d0/public_url" position="left" class="revit-badge" nozoom=true >}}

## Professional Work
Here's some of the work I've done professionally.

### Release artwork for MCprep 3.5
MCprep is a workflow addon for Minecraft artists working in Blender, and I work as one of the maintainers of the project. Normally, we'd hold a contest with the community, but due to short notice, I was asked to make the release artwork for MCprep 3.5.
<div data-aos="fade-right">
{{< figure src="gallary/mcprep-splash.webp" caption="Release splash for MCprep 3.5" class="mcprep-35-splash" >}}
</div>

## Work I've done in My Spare Time
This is a curated selection of work I've done in my spare time. As mentioned earlier, my main focus is Minecraft rendering, but I've also dabbled a little in ArchViz rendering in the past.

*Click an image to expand*
<div data-aos="fade-left">
  {{< gallery >}}
    <img src="gallary/EP-20-11-2023.webp"  style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/EP-02-03-2024.webp"  style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/archviz1.webp"       style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1280" height="1810"  />
    <img src="gallary/EP-17-02-2024.webp"  style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/EP-04-10-2023.webp"  style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/archviz3.webp"       style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1024" height="1536"  />
    <img src="gallary/birthday.webp"       style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1280" height="905"   />
    <img src="gallary/archviz2.webp"       style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="2481" height="1754"  />
    <img src="gallary/forest.webp"         style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/new-years.webp"      style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="2481" height="2000"  />
    <img src="gallary/waters.webp"         style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
    <img src="gallary/holograms.webp"      style="border-radius: 8px;" class="grid-w50 md:grid-w33 xl:grid-w25" width="1754" height="2481"  />
  {{< /gallery >}}
</div>

## Major Pieces
Since December 2023, I've been doing 2 major pieces a year, one on summer and one in winter, noted with a black border. These are pieces where I try and break my limits, and demonstrate what I've learned in the past several years. Here's the major pieces from the past 2 years.

As a bit of a nerdy easter egg, the black border has a slight noise to the value of the original hex value (`#171717`), using the GnuIMP HSV noise filter, with the noise driven by the following 2 equations:
{{< katex >}}
$$ v(a, b, c) = sin(a+b+c) $$
$$ s(x, y, z) = sin(x) + sin(xy) + sin(xz) $$

Meaning the border is unique per image.

### 2024
<div data-aos="fade-left">
This piece was made for the summer of 2024. Unlike most of my work, this uses the Kuwahara filter to emulate a painting look.
{{< figure src="gallary/major_pieces/thumbnails/MP-Summer-2024.webp" alt="2024 Summer Major Piece" class="summer-2024-major-piece" caption="[View in original resolution](gallary/major_pieces/actual/MP-Summer-2024.png)" >}}
</div>


### 2023
<div data-aos="fade-right">
2023 only had one major piece, the winter piece for New Years, and doesn't use noise from the above equations.
{{< figure src="gallary/major_pieces/thumbnails/NY-2023-2024.webp" alt="2023 Winter Major Piece" class="main-major-piece" caption="[View in original resolution](gallary/major_pieces/actual/NY-2023-2024.png)" >}}
</div>

# Development Experience
I'm not only a 3D artist but also a programmer. My main languages are:
- Python
- C++
- Rust

Additionally, I have experience with:
- Haskell
- Go
- Lua
- Bash

## Development Work
My main development work encompasses multiple areas, but these days it's in addons that improve users workflows and contributing to open source projects in eneral. I'm one of the maintainers for the MCprep addon, a Blender addon that speeds up the workflow of Minecraft animators by providings tools such as material generation, importing premade rigs, creating automatic weather effects, and more, all with the click of a button.
{{< github repo="Moo-Ack-Productions/MCprep" >}}

In my MCprep career, I also created BpyBuild for the MCprep project. BpyBuild a program that aims to streamline the process of building Blender addons and automatically installing them to the targeted Blender versions, allowing developers to perform less mundane tasks and more development.
{{< github repo="Moo-Ack-Productions/bpy-build" >}}

I'm also the maintainer of the Bforartists Flatpak package. Bforartists is a fork of Blender focused on improving the GUI experience for users, and I maintain the Flatpak build for Linux users who either prefer Flatpak or can only use a Flatpak version.
{{< github repo="flathub/de.bforartists.Bforartists" >}}

And recently in 2024, I created a new addon called Estella, which streamlines light linking and light groups by using improved UX.
{{< github repo="StandingPadAnimations/Estella" >}}

# Contact
Interested? Contact me at [contact@standingpad.org](mailto:contact@standingpad.org)

Resume can be found [here](./base-resume-redacted.pdf)

*Unsoliciated advertisements will result in me blocking your email address and adding it to a public list of all email addresses blocked here, so please ___do not send me advertisements though email.___*

