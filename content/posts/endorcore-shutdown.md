---
title: "EndorCore Is Shutting Down"
date: 2023-02-09T18:41:39-06:00
draft: false
toc: false
images:
tags:
  - Discord
  - Programming
---

On Feburary 11th I'll be shutting my Discord bot EndorCore down.

# Background
A couple of years back, I coded a Discord bot using the Discord.py framework. It was the primary way I learned Python, and it was a blast while it lasted, but all good things some to an end.

# Why
For starters, EndorCore is no longer maintained. The last commit on the Github repo was in March of 2022. Because of this, EndorCore has slowly started to lose functionality as time passed and Discord changed the API. Today, EndorCore is just a former husk of what it used to be.

## Security Concerns
Right now EndorCore is ran on a Debian server, one that needs some serious maintanince. Back when I started it, it was the only Linux machine I had (these days I use Linux as my daily driver), and as such, stupid mistakes were made, such as:
* Not doing proper updates
* Installing Python modules systemwide instead of in a virtual environment
* Not isolating the process

In addition, after recently going over the code, EndorCore has sections that in theory would be vulnerable to SQL injection, such as the following:
```py
        if user_result == None:
            
            cursor = await self.client.db.cursor()
                
            sql = f"INSERT INTO Strikes(Guild_ID, User_ID, Strikes_Have) VALUES({ctx.guild.id}, {member.id}, {first_strike})"
            
            await ctx.respond(f"Striked {member}")
            
            await cursor.execute(sql)
            await self.client.db.commit()
            await cursor.close()
```

The issue lies in lines such as this:
```py
sql = f"INSERT INTO Strikes(Guild_ID, User_ID, Strikes_Have) VALUES({ctx.guild.id}, {member.id}, {first_strike})"
```

This should have never been a raw Python format string, and yet it is. Back when I was firsting adding SQL to the EndorCore codebase, lines like this were common. While many have been removed, some still remain. In theory Discord's API should prevent wrongful parameters from being passed, but I can't count on that.

EndorCore also currently runs an alpha build of Pycord 2.0 from around 2021, and still hasn't been updated. Updating the module would require massive code changes that I'm not willing to do.

All of this should have spelled the end for EndorCore a long time ago, and fr that I'm sorry.

# What Happens Now
EndorCore's codebase can be found on [Github](https://github.com/StandingPadAnimations/EndorCore), but I don't plan on writing documentation on how to deploy it. In my opinion, EndorCore's codebase should never be used anymore, so don't expect any support in working with it. If you plan to make a Discord bot to replace EndorCore, do not make the mistake of not maintaining it for a long time. Discord bots require the attention of a toddler.

It's was a good run while it lasted, but now EndorCore's days are numbered. You may continue using its commands until Feburary 11, 2022 when it'll be taken down, but I doubt many will work except for the incredibly simple ones. 

Until then, cya later.
