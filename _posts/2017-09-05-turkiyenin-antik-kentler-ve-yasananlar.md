---
layout: post
title: Türkiye'nin Antik Kentleri ve Sonrasında Yaşananlar
custom-date: 5 Eylül 2017
published: true
categories: 
- Ancient Cities of Turkey
---

Önce sayılar ile başlayayım. 

Herşeyi başlatan kadim dostum İnan Özdemir'in tweeti oldu. O tweet şu ana dek 4227 kere RT'lendi ve 15.274 beğeni aldı. 
<blockquote class="twitter-tweet" data-lang="tr"><p lang="tr" dir="ltr">Çok faydalı bir site. Arkadaşım Cem Ünalan, Türkiye&#39;nin antik kentlerini harita üzerinde topladı. İlginizi çekerse: <a href="https://t.co/fng6hdFh2I">https://t.co/fng6hdFh2I</a> <a href="https://t.co/lnQXH0fgab">pic.twitter.com/lnQXH0fgab</a></p>&mdash; İnan Özdemir (@inanozdemir) <a href="https://twitter.com/inanozdemir/status/903961271300710400">2 Eylül 2017</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Bu RT'ler arasında [Kaan Sezyum](https://twitter.com/kaansezyum), [Mert Fırat](https://twitter.com/mert__firat), [Kaan Kural](https://twitter.com/kaankural), [Mine Tugay](https://twitter.com/Minetugay) ve [Ayşe Arman](https://twitter.com/ArmanAyse) gibi yüksek takipçi sayısına sahip kişiler vardı. 

(Tam Ayşe Arman RT yaptığı sırada Google Analytics'i canlı takip ediyordum ve kullanıcıların sayısında ciddi bir artış olmadı. Acaba 2.4 milyon takipçisi organik değil mi diye düşündüm ama bilmiyorum)

2 ve 5 Eylül arasındaki 4 günde, siteyi toplamda 24.492 kişi, 26.994 kez ziyaret etti. 98.078 kere sayfa görüntülendi. 

<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/visitors-per-day.jpg" alt="Turkey Ancient Cities Map"/> 

En çok görüntülenen sayfalar ise şu şekilde. İstanbul'a yakınlığı ile ilgi çeken [Bathonea](http://ancientcitiesturkey.com/tr/bathonea) birinci sırada:
<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/pages.jpg" alt="Turkey Ancient Cities Map"/> 

2 ve 5 Eylül arasında en fazla ziyarette bulunan iller ise şu şekilde oldu. Burada İzmir Ankara'yı geçmiş:
<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/cities.jpg" alt="Turkey Ancient Cities Map"/> 

Dünyada ise 94 farklı ülkeden ziyaretçi geldi. Özellikle Google Analytics'i takip ederken Peru'dan birinin o sırada sitede dolandığını görünce baya dumura uğradım. Kendisinin hikayesini dinlemek isterim. 
<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/countries.jpg" alt="Turkey Ancient Cities Map"/> 

### Tepkiler
Öncelikle insanların bu kadar ilgi göstermesine inanamadığımı söylemeliyim. İlk Ekşi Sözlük'e koyduktan sonra insanların başlığın altına yazması bile beni müthiş sevindirmişti. Twitter'da patlamasına, ünlüler tarafından paylaşılacak kadar yayılmasına hala inanamıyorum. 

Olay sadece Twitter üzerinde de kalmadı. İnternetten uzak kaldığım bir kaç saatlik aralıkta sozcu.com.tr'nin benim blog yazımı (blog yazısı link) [haberleştirerek yayına aldığını](http://www.sozcu.com.tr/hayatim/kultur-sanat-haberleri/turkiyenin-antik-kentlerini-tek-bir-sitede-topladi/) bir e-posta'dan öğrendim. Bunu sorun etmeliyim hala bilmiyorum, ancak internette sosyal medya harici kalıcı bir yerde olması hoşuma gitti. Bunun yanında sozcu.com.tr'den içerikleri araklayan bazı sitelerde de belirmeye başladı. 

Dün ise [dunyahalleri.com](https://www.dunyahalleri.com/turkiyenin-antik-sehirleri/)'da ve bugün de [posta.com.tr](http://www.posta.com.tr/turkiye-nin-antik-sehirleri-haberi-1329561)'de siteyle ilgili haberleri gördüm. 

### Teknoloji
İnan Özdemir'le daha önce de yüksek trafiğe maruz kaldığımız bir an olmuştu. Kendisinin blogunda yayınladığı ["Güçlü Bir Türkiye İçin..."](https://ozdmr.in/2017/01/3309/) yazısı çılgınca paylaşılmış, bugün ancientcitiesturkey.com'u host eden 512 MB RAM'e sahip server ([DigitalOcean](https://www.digitalocean.com) aylık 5 dolarlık tier) ayılıp bayılmaya başlamıştı. Özellikle işlerin de yoğun olduğu çok özel bir Cuma öğleden sonrası yaşatmıştı bana. O blog [Wordpress](https://wordpress.org) kullanıyordu. 

Bu kötü deneyimden sonra benzer bir duruma Laravel ile girmiş bulundum. Ancak bu sefer hem Laravel olması, hem de çoğu sayfanın API üzerinden servis ediliyor olması işimi kolaylaştırdı. Anlık 190 kişiyi gördüğümüz anlarda bile herhangi bir sorun olmadı (biraz yavaşladı galiba ama ölçemedim). Elbette böyle bir trafiği hiç tahmin etmediğim için sitede veritabanı sorguları için herhangi bir caching çözümü kullanmadığımı söylemeliyim. 

Yine de RAM'i %80-90'larda bırakıp swapa düşmemek için ve internetimin olmadığı saatlerde sürpriz yaşamamak için çift çekirdekli ve 2 GB RAM'e sahip sunucuya yükselttim. Şu anda trafik azaldığı için tekrar ufak servera geri döndüm.
<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/countries.jpg" alt="Turkey Ancient Cities Map"/> 

Bu süreçte en büyük golü Mapbox'tan yedim. Mapbox'ın 50 bin harita gösterimi sonrası ücret almaya başladığını 3 Eylül akşamı gelen acı bir e-posta ile öğrendim. Şu anda 221.127 görüntülemedeyiz... Dolayısı ile şahsıma 75 USD kaçmış bulunmaktadır.  
<img class="box-shadow img-padding" src="{{site.url}}/assets/ancientcitiesturkey/mapbox.jpg" alt="Turkey Ancient Cities Map"/> 

### Ekslikler
Twitter üzerinden İnan Özdemir'e ve bana gönderilen tüm cevapları ve bana gelen tüm e-postaları okudum. Ekşi Sözlük'ten ve GitHub'dan da bazı eksik yerler bildirildi. Kimin nereyi eksik olarak bildirdiği bilgisiyle birlikte bunların hepsini kaydettim. Herkese açık olan [bu Trello panosunda](https://trello.com/b/3HLV5QDp/ancientcitiesturkeycom) panosunda görüntüleyebilirsiniz.

Hepsinin üzerinde sıra ile çalışacağım ve ekledikçe bu bildirim yapan kişilere haber vereceğim. 

### Teşekkürler
Öncelikle [İnan Özdemir](https://twitter.com/inanozdemir)'e ve sosyal medya hesaplarında paylaşan herkese teşekkür ederim. Pek çok mesaj ve e-posta aldım. Eksik yerlerin fotoğrafları ve koordinatlarıyla yardımcı olmak isteyen de çok kişi oldu. Bunlar bu konularla ilgili çok fazla kişinin olduğunu gösterdi bana ve motive etti.

### Sonuç
Bu siteye öncelikli olarak bir şeyler öğrenmek istediğim için başladım ve belki birilerinin de işine yarar diye düşündüm. Şimdi biraz kapsamı değişmiş durumda. Artık bu sitenin güncel kalmasını kendime bir görev biçtim ve oflamadan poflamadan çalışmaya devam edeceğim. Hedefim uzun soluklu, her zaman güvenebileceğiniz bir kaynak haline gelmesi. 

