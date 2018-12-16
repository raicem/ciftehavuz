---
redirecto_to: "https://blog.cemunalan.com.tr/2017/08/24/firefox-extension-for-starting-xdebug/"
layout: post
title: Firefox Extension for Starting Xdebug
custom-date: 24 Ağustos, 2017
categories: 
- Firefox
---

I have been trying to incorporate Xdebug into my development workflow as practically using a debugger is I believe essential to software development. As I'm a web developer I mostly want to debug between the request and response cycle, and the most practical way of doing that is setting a cookie to trigger the Xdebug and halt the execution at your breakpoints. 

The most convenient way of doing this is just setting an XDEBUG_SESSION cookie in the web app you are developing. There are handy tools for that and for Firefox, the most famous is the [The easiest Xdebug](https://addons.mozilla.org/en-US/firefox/addon/the-easiest-xdebug/) extension. 

However as you can see from the mozilla.addons.org page, this extension is not compatible with Firefox version 57. Also, developer clearly [stated](https://addons.mozilla.org/en-US/firefox/addon/the-easiest-xdebug/reviews/900688/) that he has no intention of porting this extenison using WebExtension APIs. 

So I've built myself. I called it Xdebug Starter. Here is the link to get it for Firefox: https://addons.mozilla.org/en-US/firefox/addon/xdebug-starter/

It's dead simple really, just click on the icon and you will be presented with three options to trigger debugging, tracing, and profiling. You can also set you idekey that will be set as a value in the debugging cookie.
<img class="box-shadow img-padding" src="{{site.url}}/assets/xdebug-popup.png" alt="Xdebug Popup"/> 

Please feel free to report and issued and feature requests from the GitHub repo: https://github.com/raicem/xdebug-starter