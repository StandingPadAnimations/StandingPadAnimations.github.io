---
title: "Attempt 2 at making an RTX water shader"
date: 2023-06-22
tags: 
    - Blender
---

So in yesterday's post I mentioned how a long time ago I attempted to make a water shader based off of RTX Minecraft.

> {{< typeit 
  speed=20
>}}
Just like the clouds and aurora, I wanted to have a water shader that merely acted as an enhancement of the existing Minecraft water. However unlike the previous section, I already had an existing water shader that I could use. This time though, instead of basing it off of Reimagined, I based it off of RTX Minecraft. While I prefer Java edition shaders over RTX Minecraft in most cases, I really liked how the water looked in RTX
{{< /typeit >}}

{{< article link="/posts/ship-at-night-render/" >}}

Well, I've been playing around on my laptop and I think I've gotten closer. I present to you, RTX Water Shader V2: Electric Booga- *slap*

{{< image src="gallary/preview_1.png" alt="RTXish water shader" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/preview_2.png" alt="RTXish water shader but closer up" position="center" style="border-radius: 8px;" >}}

But before I release it, we got to talk about how we got here.

# Looking at Screenshots for a little too long
Yesterday when talking about my first attempt, I showed some screenshots of how water looks in RTX Minecraft.

{{< image src="gallary/rtx-water-surface.png" alt="Really fancy Minecraft water but it still looks like Minecraft water" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/rtx-water-underwater_1.png" alt="Underwater world" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/rtx-water-underwater_2.png" alt="Another underwater world" position="center" style="border-radius: 8px;" >}}

Let's disect this into 2 parts: surface and underwater rays

## Surface
Let's take another look at the first screenshot:

{{< image src="gallary/rtx-water-surface.png" alt="Really fancy Minecraft water but it still looks like Minecraft water" position="center" style="border-radius: 8px;" >}}

We see a couple of things:
- The water is transparent when close to the camera, but reflective when farther away
- The reflections aren't sharp by any means, but they're strong
- The water isn't pure blue, it's a slight blueish-green (though that might be due to the biome)

So lets start with the water color:

{{< image src="gallary/color.png" alt="Nodes to set the water color" position="center" style="border-radius: 8px;" >}}

These 6 nodes will act as the basis for everything else. Now we need to emulate that "transparent up close, reflective far" effect".

### Fresnel
{{< katex >}}

{{< alert >}}
Don't freak out when seeing \\(\theta\\), it's just the Greek letter Theta and in this context, it refers to the angle formed by a ray of light and the normal (a line perpendicular to the surface) of the surface it strikes at.
{{< /alert >}}

> {{< typeit 
  speed=20
>}}
"When light strikes the interface between a medium with refractive index n1 and a second medium with refractive index n2, both reflection and refraction of the light may occur."
- Wikipedia page on Fresnel equations
{{< /typeit >}}

Fresnel occurs due to light hitting a surface at different angles. The following diagram from [Scratch a Pixel](https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-shading/reflection-refraction-fresnel.html) helps to illustrate:

{{< image src="gallary/fresnel-diagram.png" alt="Diagram of the fresnel effect" position="center" style="border-radius: 8px;" >}}

In light physics, when a ray hits a surface, it bounces back at the same angle that it was at before. For example, if  \\(\theta_i\\) is the angle of the incoming ray, and \\(\theta_r\\) is the angle of the reflected ray, then $$ \theta_i = \theta_r $$

Alright this is fancy, but how does this tie in with water? We'll, it's a matter of perspective. From far away, the rays that that hit and are reflected are very steep, so it appears as glossy. Close up meanwhile, the angle isn't as steep, so it appears as transparent.

{{< image src="gallary/fresnel.png" alt="Nodes for fresnel" position="center" style="border-radius: 8px;" >}}

I still need to fix the reflection and refraction of this water shader, but we've disected a lot so far. Now let's move on.

## Underwater Rays
Let's look at the other screenshots:
{{< image src="gallary/rtx-water-underwater_1.png" alt="Underwater world" position="center" style="border-radius: 8px;" >}}
{{< image src="gallary/rtx-water-underwater_2.png" alt="Another underwater world" position="center" style="border-radius: 8px;" >}}

A big part of RTX water are the underwater rays. They inherit the color of the surface water, and they're also extremely powerful.

Normally we would use refraction to create these rays, but:
- Cycles sucks at brute force refraction
- These rays are very Minecrafty

So we need to fake the effect. Thankfully, that's easy.

{{< alert >}}
Note: The following is the reason why this water shader is Cycles only.
{{< /alert >}}

The first step is to use volumetrics. The reason we have rays appear in the first place is because they're being scattered around by particles before eventually being completely absorbed by said particles. Without volumetrics, no rays will appear. We can do this by creating a cube, scale it so it's entirely underwater, and then set the material to Principled Volume BSDF with the Color set to pure white:

{{< image src="gallary/volumetrics.png" alt="Volumetrics setup" position="center" style="border-radius: 8px;" >}}

Next we must create a texture that will allow us to let light pass through some areas (but not all). Since we want something Minecrafty, we can use a white noise texture (scaled down extremely) and clamp it to be purely black and white. To allow us to animate the texture, we set it to 4D and animate the W value. We can then apply our texture to the result, and then use that as the color for a Transparent BSDF node:

{{< image src="gallary/ray-mask.png" alt="Nodes to drive ray creation" position="center" style="border-radius: 8px;" >}}

To make this only affect shadows, we can then use a Mix Shader with the factor set to the Shadow Ray output of a Light Path node:

{{< image src="gallary/shadow-ray.png" alt="Shadow ray setup" position="center" style="border-radius: 8px;" >}}

And that's really all there is to the water shader. I've went ahead and added it to my [resources page](/resources/#rtx-style-water-shader-v2) if you're interested in downloading this, and I'll cya later! 
