---
redirect_to: "https://blog.cemunalan.com.tr/2017/8/28/ancient-cities-of-turkey"
layout: post
title: Ancient Cities of Turkey
custom-date: 28 Ağustos 2017
published: true
categories: 
- Ancient Cities of Turkey
---


I have created a map where you can see, discover and learn about the ancient cities, prehistoric mounds, tumuluses and temples of Turkey.
You can see it [here.](http://ancientcitiesturkey.com)
<img class="box-shadow img-padding" src="{{site.url}}/assets/harita.jpg" alt="Turkey Ancient Cities Map"/> 

### Why?
This past March, during a one-night trip to Altınoluk, I wanted to be able see all of the ancient cities in Turkey on a map. So that I can discover and travel whichever is closeby. But according to my Googling, there were no such place where you can get all this information at once. So in May, I've started to build around this idea.

### What is it?
At first, I began with the idea of collecting ancient cities but when I determined the list of archeological sites from the Ministry of Culture and Tourism as my guide, the scope extended a bit. I decided to add not only ancient Greek or Roman cities but also prehistoric settlements. 

### Which Technologies?
Since my main language is [PHP](http://php.net) and the best best framework I know is [Laravel](https://laravel.com) I used them in the back-end. But I selected this project as an entry to front-end frameworks so I spent most of my time in that area. I selected [Backbone.js](http://backbonejs.org), an old but a fundamental front-end framework. I didn't like it very much after a while, since it didn't get along well with the [MapboxGL](https://www.mapbox.com/mapbox-gl-js/api/) library that I use to create the map. When I learned more about the [Vue.js](https://vuejs.org) ve [React](https://facebook.github.io/react/), Backbone started to stick out even more. To handle the project a little easier I have refactored it using [Require.js](http://requirejs.org).

### How Did I Do the Research?
Reasearch was the most time consuming and tiring phase of the project. However, since I was learning new things there were many pleasurable moments. 

First of all, I dedided to add the most well known and visited ancient cities. Starting from Istanbul and moving to Southwest and then to east, I have used the museums and archeological sites list from the Ministry of Culture and Tourism as my guide. However, I have also added many places that were not in that list from the internet and books.

I had the list of archeological sites in hand, however there were very little information about them. So I gathered all of the information, such as coordinates by myself. Especially, since some archeological sites had very little cataloged information about them so there were some instances where I had to open Google Maps and look for some ruins. 

After the coordinates, I have collected all kinds of information that could be useful for the visitors. Tripadvisor and Foursquare links, muze.gov.tr links that contain visiting hours and ticket info were collected by hand and saved to the database.

Along with these info, I have collected informational links for the curious. I started with Wikipedia links and later added some other casual information sources such as blogs.

<img class="box-shadow img-padding" src="{{site.url}}/assets/harita2.jpg" alt="Turkey Ancient Cities Map Sidebar"/> 

And after that, to create curiosity for the potential visitors I tried to find some entertaining informations about the archeological sites. I could not come up with these infos for every point on the much but around 30 of them have it.

### Sources

During this project, I have used many different sources, most of them being online. There are two sources that stick out from the rest.

1) [http://turkisharchaeonews.net](http://turkisharchaeonews.net)

This website has a map just like the one I have created. To be honest, I wasn't aware that this map existed until I started building mine, but I kept going. When I was collecting info I noticed some ancient cities and tumuluses were not included in this map. But this is an incredible English source of information with directions, pictures and of course literature info. 

2) Türkiye'nin Antik Kentleri Kitabı (Ancient Cities of Turkey book) ([http://www.yemyayin.com/kitaplar/turkiye-nin-antik-kentleri-754](http://www.yemyayin.com/kitaplar/turkiye-nin-antik-kentleri-754))

This book is very well prepared and contains archeological sites that were not in the official Ministry list.

### Status
Currently, there are 83 points on the map. The book I mentioned above, has 118 ancient cities in it. Since I want to include tumuluses and other single historic structes I'm guessing the maximum number I can react will be around 140. So, I have completed the 60% of the project data-wise. Apart from this, I only managed to add short information for 32 points.

### Future
My goal is to reach that potential 140 data points. After the first effort launching this project, now I'm gunning for more calm laid back reserach phase for the data points. I'm not planning to add new features to application yet. But I wanna export the data points to a file format (such as Excel, SQL or some else) and host it on a seperate repository.

If you want to follow the project, here is the [GitHub repository.](https://github.com/raicem/ancient-cities-turkey/)