# Terraria Block Palette Remastered
A more advanced version of the previous TBP site. It has actual functionality, better **original** design overall and some user interface elements.

Other than that, I made a custom (basic) admin panel, that lets me verify palettes submitted by users.
I can apply *tags* from db to a palette (also add a new one, if needed), remove the *username* of the submitted palette, add palette's *obtainability* and add an appropriate *title*.

Additionally I organized the data from simple item naming (item_1, item_2 ect. in the game's files) to proper item names using Python.

It's in hopes of being deployed one day to help the Terraria community with their builds.

It's one problem is searching for a block to add to the build (firebase doesn't provide useful string searching unfortunately, about which I didn't know : / )

## Techstack
- Vue 3 (Composition API)
- Pinia
- Sass
- Firebase

Live: https://terraria-block-palette-remastered.vercel.app
