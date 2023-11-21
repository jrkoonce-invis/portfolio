---
title: Ninja Frog Python Platformer
description: A sidescrolling platformer built with python and the pygame game engine. Fully functional with animations, game states, and a tile-based map system.
date: 2020-06-28
author: Jameson Koonce
tags:
  - game
---

<a href="/projects">
  <div class="fixed top-0 left-0 m-[1.5rem] hover:scale-[120%] duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>          
  </div>
</a>

Project Github can be <a href="https://github.com/jrkoonce-invis/Pygame-Platformer" target="_blank">found here</a>

**Project Goal:** The goal of this project was to build a sidescrolling platformer in python. I really wanted to try and build as much at possible without using outside source material to figure out common game development porblems on my own. In this way, I built the game object system, animation system, collision, and game state system without the pygame library! 

**Demo** 
<video width="600" controls>
    <source src="../../static/img/ninjafrog.mp4" type="video/mp4">
</video>

**Features**
- Graphics and custom animation system -> possible through the <a href="https://pixelfrog-assets.itch.io/pixel-adventure-1" target="_blank">pixel adventure asset</a> pack
- Camera movement to allow for sidescrolling gameplay
- Tile-based level editor -> compatible with the <a href="https://www.mapeditor.org/" target="_blank">Tiled level editor</a>
- Custom game state management system -> allows for menu, pause, lose states and more!
- Game object system with 6+ game object types and 25+ possible object propterties

**Technologies**
- Game Engine -> built using the <a href="https://www.pygame.org/news" target="_blank">Pygame</a> python game engine
- Map Parser -> tile map parsing is done with the help of the <a href="https://pytmx.readthedocs.io/en/latest/" target="_blank">PyTMX</a> map loader library