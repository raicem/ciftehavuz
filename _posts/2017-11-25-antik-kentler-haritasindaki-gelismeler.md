---
layout: post
title: Antik Kentler Haritasındaki Gelişmeler
custom-date: 25 Kasım, 2017
published: true
categories: 
- Diğer
---

Haritayı yayınlayalı neredeyse 3 ay oldu. Daha önceki blog [yazısında](https://raicem.github.io/2017/08/28/turkiyenin-antik-kentleri/) bahsettiğim üzere, haritayı yayınladıktan sonra yeni özellikler geliştirmeyi pek planlamıyordum. Ancak elbette projenin çok tutması, 25 bin kişinin ziyaret etmesi, bir kaç gazetede haber olması ve Twitter'da 1 milyonun üzerinde kişi tarafından görüntülenmesi olayı bambaşka bir seviyeye taşıdı. Bu yayınladıktan sonra unutacağım, ilgilenmeyeceğim bir proje olmaktan çıktı benim gözümde. Uzun süreler yayında kalması ve ulaşılabilir olması artık benim bir sorumluluğum.

Harita ilk yayınlandığında 80 adet antik yerleşim işaretlenmiş durumdaydı. Elbette bunun çok ama çok eksik olduğunu biliyordum ve yayınlarken mümkün olan her yere yazdım. Yine de haritanın eksik diye bi sürü tepki geldi. İnsanların bildirdiği eksikliklerin hepsi [Trello'da](https://trello.com/b/3HLV5QDp/ancientcitiesturkeycom) herkesin
incelemesine açık bir şekilde duruyor. Ayrıca kendi bulduğum eksiklikleri de burada tutuyorum. Bu listedekilerin hepsinin üzerinden geçilecek, ya eklenecek ya da eklenmeyecek.

Ayrıca bunun uzun ömürlü bir proje olacağı kesinleşince, neler daha iyi olabilir diye düşünmeye başladım. Sitenin ön yüzünü yazarken kullandığım teknolojiler biraz eskide kaldığı için ve yeni uygulama geliştirme tekniklerine uymadığı için zorlanmaya başlamıştım. Zira düzeltemediğim bir kaç hata vardı. Örneğin bir [link](https://ancientcitiesturkey.com/tr/knidos) direkt olarak ziyaret edildiğinde, o lokasyon hakkında bilgi verilirken haritada o noktanın işaretlenmemesi gibi basit gözüken ancak çözümü karmaşık olabilecek sorunlar vardı. Bunların hepsini not aldım ve sitenin ön yüzünü [Backbone.js](http://backbonejs.org/) gibi eski bir teknoloji yerine [React](https://reactjs.org/) ile tekrardan yazmaya karar verdim. Sorun şuydu ki, React bilmiyordum.

Bir aydan biraz daha fazla süren uğraşlarım sonucu React'i öğrendim ve haritayı React'e geçirdim. Bu süreç başlı başına ayrı bir yazının konusu. Kullandığım tüm kaynakları, izlediğim videoları, bu süre boyunca takibe aldığım blogları, e-posta bültenlerini ve Twitter kişiliklerini yazacağım.

Aynı zamanda sitenin sunucusunu da baştan kurdum. Son kullanıcıya ne kadar yansıyacak bilmiyorum ancak [nginx](https://nginx.org/en/), [PHP 7.1](http://php.net/), [Laravel 5.5](https://laravel.com/) kullanan ve kaynakları yeni [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protokolüyle servis eden iyi bir sunucusu var artık. 

Son nokta ise sitedeki bilgilerin güncelliğine dair. İnternetin büyük sorunlarından bir tanesi [link rot](https://journalistsresource.org/studies/society/internet/website-linking-best-practices-media-online-publishers). Yani bizim deyimizle linklerin kurbağa olması. Bu uzun vadede haritayı etkileyebilir çünkü şu anda bile 550 civarında link var. Her lokasyona da 4-5 link ekleme hedefim var. 

Bununla mücadele için her hafta bu linkleri ziyaret eden ve eğer 404 kodu alınırsa bunu otomatik olarak bildiren bir script yazdım ve yayına aldım. Bu gibi detayların önemli olduğunu düşünüyorum. Zira aynı antik kente denk gelebilecek üç bozuk link kullanıcı deneyimini oldukça düşürebilir.