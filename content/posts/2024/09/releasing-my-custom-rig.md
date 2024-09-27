---
title: "Releasing My Custom Rig"
date: 2024-09-26
toc: false
images:
tags:
  - Blender
---

*Note: there's a lot of Mastodon embeds in this post.*

Late last year, I made a post (or toot I guess?) on Mastodon showing a test
of a custom rig I was working on.

<style>
.small-embed {
  min-height: 30vw
}

.large-embed {
  min-height: 100dvw
}

@media only screen and (max-width: 600px) {
  .small-embed {
    min-height: 90vw
  }
  .large-embed {
    min-height: 300dvw
  }
}

@media only screen and (max-width: 450px) {
  .small-embed {
    min-height: 125vw
  }
  .large-embed {
    min-height: 330dvw
  }
}
</style>

<iframe src="https://mastodon.art/@standingpad/111435312591929418/embed" class="mastodon-embed small-embed" style="max-width: 100%; border: 0" width="600" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.art/embed.js" async="async"></script>

And about a day later created what would be the first render I made utilizing
this rig for the first time

<iframe src="https://mastodon.art/@standingpad/111443670325055646/embed" class="mastodon-embed large-embed" style="max-width: 100%; border: 0; min-height: 80dvh"" width="600" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.art/embed.js" async="async"></script>

Now normally this would be the part where I would say that I've made now the
rig public for anyone to download, but there's actually a little but of history
behind this rig that goes beyond 2023. If you're only here for the download, then
it's on my [resources page](/resources), but now let's delve into the history, as
well as some of the design decisions.

The creation of this rig goes back not to 2023 but 2020, back during my time on
the Black Plasma Studios (BPS) Discord server. For a bit of context, I had only been
using Blender for about 2 or 3 months at this point, so naturally when I decided
to try and make my own rig, it didn't go well.

Fast forward 3 years and I'm annoyed at having to deal with the issues from the
aging BPS V3 rig. I did go back to that rig for a little bit but eventually decided
to try and debug BPS V3. BPS V3 is, for the lack of a better term, a clusterfuck
to debug.

<iframe src="https://mastodon.art/@standingpad/111381558631287127/embed" class="mastodon-embed large-embed" style="max-width: 100%; border: 0; min-height: 80dvh" width="600" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.art/embed.js" async="async"></script>

Although I was eventually able to fix the issues I had, it was clear from then on
that fixing issues in BPS V3 as it aged further was not worth my time. There is a
BPS V4 rig, but stylistically is not easily modifiable, at least when I tried a long
time back. So I decided to finally finish the rig I started 3-4 years.

When it comes to rigs, I have the following requirements:

- Easily modifiable
- Aren't taxing on my system (you'd be surprised how many
  Minecraft rigs are extremely taxing)
- Don't use too many drivers (to reduce potential issues)
- ***Don't depend on Python scripts or addons***

By the way, I want to expand on that last point: so many Minecraft rigs these days
depend on addons and scripts. Yes, I know technically they're just UIs for custom
properties, but seriously, are they necessary? I've already seen riggers use horrible
Python practices in their addons like using `eval` just to set a variable on an object
(use `setattr` for that if you're working with strings), importing "DLCs" (seriously?),
etc. And 75% of the time, these addons stop getting maintained after a few Blender
versions, or if they still do get maintained, only for the latest release
(though I can't blame them with the changes Blender gets in the API every release).
It's honestly made me consider adding a system in MCprep  to allow riggers to
create UIs for their rigs without needing to make their own addons, but I digress.

It's why with this rig, I decided to make it as minimal as possible. No, I
won't make an addon with a UI for it (it's not needed). No I won't add extrusion
support (I don't need it, and there's many options for that). And no, I won't
a smooth mouth (it doesn't fit my style and again, there's many options for that).
This rig is as minimal as possible, and improvements will mostly come in the form
of the actual rigging itself (i.e. the bones and controls).

That's pretty much all I have. As mentioned earlier, the rig is now on my
[resources page](/resources), for download. Cya!
