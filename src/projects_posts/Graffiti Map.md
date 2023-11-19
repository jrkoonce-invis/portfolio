---
title: Graffiti Map Web App
description: Created a site that documents the work of a graffiti artist "ZHERO" at the University of Illinois through an ineractive game for students on campus.
date: 2023-10-21
author: Jameson Koonce
tags:
  - python
---

<a href="/projects">
  <div class="fixed top-0 left-0 m-[1.5rem] hover:scale-[120%] duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>          
  </div>
</a>

**Project Goal:** This platform will act as a little game where users can see and try to spot all of the graffiti around campus at the University of Illinois. Users will see a map of all the general locations of graffiti and be able to check them off inidividually. After a grifiti location is selected, a 3d model of the object the grafiti is on will be displayed (as a sort of hint). Users will also be able to sort by "type" and location of graffiti on the map.

**Demo (Current Version)** 
![Image Unavailable](../../static/img/graffiti.png)

**Technologies**
- Frontend -> <a href="https://react.dev/" target="_blank">ReactJS</a> is the main driver for the frontend. Many components are borrowed from <a href="https://mui.com/joy-ui/getting-started/" target="_blank">MUI React Components</a> (JOY UI Core). The map element is an extension of <a href="https://leafletjs.com/" target="_blank">LeafletJS</a> for React named <a href="https://react-leaflet.js.org/" target="_blank">React Leaflet</a>.
- Backend -> <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank">Flask</a> is the main driver for the backend. It will be a data meditaor between the database and the frontened.
- Database -> <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is the database of choice. It will house the grafiti location, type, and model data.

**Next Steps**
- Collect Graffiti data around campus
- Add 3d model display functionality (look at <a href="https://threejs.org/" target="_blank">ThreeJS</a>)
- MongoDB database integration
- Deployment + Advertisement