---
layout: post
title: Windows Geliştirme Ortamı
custom-date: 31 Temmuz, 2016
categories: 
- PHP
---
PHP ve daha genel olarak web geliştirme işlerine bulaşmadan önce bir Mac'e sahip olduğum için oldukça avantajlıydım. İnternetteki kaynaklardan göreceğiniz üzere, geliştiricilerin çoğu Mac kullanıyor ve hazırladıkları rehberler de dolayısı ile Mac üzerinde oluyor. Bu sebepten, özellikle Jeffrey Way videolarını takip ederken hiç zorlanmadım. Brew, iTerm, Composer, gulp gibi araçları yükleme kullanma oldukça rahattı. 

Şimdiki işimde ise bir adet Windows bilgisayar verildi. Açıkçası evde de ufak bir Windows bilgisayarım vardı ama çok fazla kullanmıyordum. Ortaya tabi ki enteresan bir durum çıktı. Yüklediğim ve kullandığım tüm araçları gözden geçirmem gerekti. Alışkanlıkların biraz dışına çıkmak iyidir, yeni şeyler öğrendim. 

Öncelikle rehber makalemiz [bu olsun.](http://www.newmediacampaigns.com/blog/woah-i-switched-to-windows-and-its-awesome-for-php-development)

Öncelikli olarak meselemiz PHP olduğu için, en önemli şey lokalde çalıştığımız ortam. Henüz yeni yetme bir geliştirici olduğum için Vagrant ya da genel olarak sanal makine dünyasına adım atmamıştım. Açıkçası o kadar dikkat gerektirecek büyük bir projede elimden geçmedi zaten. Sadık bir [MAMP](https://www.mamp.info/en/) kullanıcısıydım ve hayatımdan memnundum. Windows'ta MAMP'e karşılık bir sürü alternatif var. [WAMP](http://www.wampserver.com/en/), [XAMPP](https://www.apachefriends.org/tr/index.html) vs vs. Ama benim tercihim [Uniserver](http://www.uniformserver.com/) oldu. Neden bilmiyorum, inanılmaz pratik ve güzel düşünülmüş bir uygulama olduğunu düşünüyorum. Üç ayrı PHP konfigürasyonu tutup bunlar arasında hızlıca geçiş yapabiliyorsunuz. Gerekli, gereksiz PHP modüllerini hızlıca açıp kapatabiliyorsunuz. MySQL terminaline hızlı geçiş oldukça mümkün. Tavsiye edeceğim Apache + PHP + MySQL çözümü. 

Sonra gelelim terminal işine. Bu konuda pek fazla tecrübem yok aslında. Babun adlı Aslında iTerm ve brew ile yüklediğim eklentilerin tam karşılığını bulamadım diyebilirim. Örneğin çok ziyaret edilen klasörleri tekrar tekrar yazmamak için kullandığım [z adlı eklentiyi](https://www.smashingmagazine.com/2015/07/become-command-line-power-user-oh-my-zsh-z/#using-z-to-jump-to-frecent-folders) henüz yükleyebilmiş değilim. Babun gibi güzel CYGWIN çözümleri var ancak ben yukarıda paylaştığım makalenin de tavsiyesiyle CMDER adlı programı kullanıyorum ve memnunum. 