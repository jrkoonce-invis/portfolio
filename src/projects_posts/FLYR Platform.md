---
title: Flyr Platform
description: Founded a startup called Flyr which is creating a platform to allow students to see all of the flyers on campus at the University of Illinois in one place. 
date: 2023-12-10
author: Jameson Koonce
tags:
  - startup
---

<a href="/projects">
  <div class="fixed top-0 left-0 m-[1.5rem] hover:scale-[120%] duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>          
  </div>
</a>

Project Github can be <a href="hhttps://github.com/jrkoonce-invis/FLYR" target="_blank">found here</a>

#### **What is Flyr?**
Flyr is a student run startup at the University of Illinois that is more effectivly connecting students with opportunities on campus! We are a team of 4 that started at Founders' 54 (LINK) event in the Seibel Center for Design. Since then, we have been deadset on launching our Flyr Platform project during the Spring '24 semester.

<div class="flex justify-center gap-4">
  <img src="../../static/img/flyr_logo.png" alt="Image Unavailable" width="200" />
  <img src="../../static/img/flyr_logo2.png" alt="Image Unavailable" width="200" />
</div>

#### **What is the Flyr Platform?**
The Flyr Platform will be a web application where students can see all of the flyers on campus in one place. At the University of Illinois, students largely find out about new events and opportunities through word of mouth and social media. That being said, U of I also has an impressive flyer culture which we want to help maintain! Therefore, our platform will allow organizations, startups, the University itslef, and local businesses to advertise events, deals, and opportunities to students in the form of flyers! Students will also be able to put in their preferences (entreprenurship, consulting, sports, etc.) in order to receive a weekly email roundup of new opportunies relevant to them on campus.

#### **Market Research**
Before we started developing, we really wanted to make sure that students (other than our team) had a need/want for this platform on campus. We completed numerous individual interviews, but found that it was challenging to get a definitive answer representative for the entire student-body. Therefore, we created the ORGS project: We created an alter-ego brand named ORGS with similar goals to Flyr and placed flyers around campus advertising our platform to "see all the events on campus in one place" (see samples below). From this experiment, we received 100+ flyer scans and 60+ multichoice responses in one week. Knowing that when the Flyr platform releases, we will advertise in many more ways than simply flyers, we are confident and excited about developing the platform!

<div class="flex flex-row gap-4 flex-wrap w-full">
  <img src="../../static/img/ORGS1.png" alt="Image Unavailable" width="350" />
  <img src="../../static/img/ORGS2.png" alt="Image Unavailable" width="350" />
</div>

**Flyr Platform Details**
- Users will be able to sort flyers by catagory, location, and time
- When an organization posts a flyer, it doesn't go directly on the platform. Instead, it goes to an admin dahsboard where the community admin can accept or delete the flyer
- From the admin dashboard, community admins can also manage posted flyers and contact organizations
- Each posted flyers is associated with a date (in which it will get archived)

**Demo (Current Version)** 
<video width="800" controls>
    <source src="../../static/img/FLYR_DEMO.mp4" type="video/mp4">
</video>


**Technologies**
- Frontend -> <a href="https://react.dev/" target="_blank">ReactJS</a> is the main driver for the frontend along with Tailwind CSS. Many components are borrowed from <a href="hhttps://daisyui.com/" target="_blank">Daisy UI</a> and their Tailwind components
- Backend -> <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank">Flask</a> is the main driver for the backend. It is a data meditaor between the database and the frontened.
- Database -> <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is the database of choice. It houses flyer image data, points of contact data (name, email), along with potential event data (location, time), etc.
- Authentication -> Authentication for the admin-side site is done through <a href="https://auth0.com/" target="_blank">Auth0</a>. This allows us to securly manage (delete, accept, etc) the posts on the platform.
