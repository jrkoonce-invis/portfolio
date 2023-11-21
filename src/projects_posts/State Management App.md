---
title: Project Management Platform
description: A project state management web app built using Go and p5.js
date: 2020-06-06
author: Jameson Koonce
tags:
  - go
---

<a href="/projects">
  <div class="fixed top-0 left-0 m-[1.5rem] hover:scale-[120%] duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>          
  </div>
</a>

Project Github can be <a href="https://github.com/jrkoonce-invis/State-Management-Web-App/tree/master/" target="_blank">found here</a>

**Project Goal:** The goal of this project was to learn about web development and how to build a complete full-stack application. I wanted to build a project with a dynamic UI frontend that displays project tasks which don't disappear when the user refreshes the page.

**Demo** 
<video width="800" controls>
    <source src="../../static/img/statemanagement.mp4" type="video/mp4">
</video>

#### Golang Backend
- serves index.html in the p5-ui/ folder
- api at *domain*/api serves data in the form of a post (simply text and a number)
- api allows for POST, DELETE, and GET requests
- existing posts stored in Mongodb database

#### P5 Frontend (p5-ui/)
- With gui, interacts with the bacend in the following ways:
    - POST request -> adds post
    - DELETE request -> deletes post
    - GET request -> gets posts

#### Session Management
- Keeps tracks of users exsisting posts with cookies for session management
- Cookies store userid which are associated with tasks in the MongoDB database

**Note**: Cookies are temporary and are just used for proof of concept. If I were to add to
this project, I would create a more permenant login system to store user project data

**Technologies**
- Frontend -> <a href="https://p5js.org/" target="_blank">p5.js</a> is the main driver for the frontend, an open-source javascript library for interactive development
- Backend -> <a href="https://go.dev/" target="_blank">Go</a> is the main driver for the backend
- Database -> <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is the database of choice. It houses users and their associated tasks