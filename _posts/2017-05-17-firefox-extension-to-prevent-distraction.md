---
layout: post
title: A Firefox Extension to Prevent Distraction
custom-date: 17 Mayıs, 2017
categories: 
- Firefox
---

I was looking for a blocker that would replace the [Go Fucking Work](https://chrome.google.com/webstore/detail/go-fucking-work/hibmkkpfegfiinilnlabbfnjcopdiiig) extension I'm using, as I wanted to switch to Firefox from Chrome. This extension simply blocks websites to prevent you from distracting and visiting attention seeking websites such as Facebook, Twitter and YouTube. You can also set break times for certain periods of the day, or you can immediately have a 5, 10, 20 etc minute breaks.

I found a couple of similar extensions in the [addons.mozilla.org/](https://addons.mozilla.org/) however they were not so simple to use and used older add-on APIs, so they would be eventually be broken. So I decided to build myself. At this point this extension only blocks the websites you provide and allows you to turn blocker on of off from the toolbar. There are fancy features such as setting 10 minute breaks and having predetermined schedules for break times. So there there is room for improvement feature-wise.

You can download the extension [here](https://addons.mozilla.org/en-US/firefox/addon/impulse-blocker/) for Firefox. Also you can see the source code [here](https://github.com/raicem/impulse-blocker). As you can see there is lotta room for improvement in code-wise as this was my first proper JavaScript encounter. 

It uses WebExtensions API that will be the onyl way of building extension on Firefox in a year. So this extension will last beyond Firefox 57 where the extensions using older APIs will stop working. Even though WebExtension API is cross-browser API, you still have to pay a little bit attention to make it work on Chrome and Firefox at the same time. I have failed to do so.

Please refer to [this guide]({{ site.baseurl }}{% post_url 2017-05-17-impulse-blocker-guide %}) about how to use the extension.