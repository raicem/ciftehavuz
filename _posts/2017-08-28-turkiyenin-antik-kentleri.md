---
layout: post
title: Türkiye'nin Antik Kentleri
custom-date: 28 Ağustos 2017
published: true
categories: 
- Diğer
---

Türkiye'nin antik kentlerini, yıkıntılarını, höyüklerini, tek kalmış antik yapılarını görebileceğiniz, keşfedebileceğiniz ve hakkında bilgi alabileceğiniz bir haritasını yaptım. 
[Şurada](http://ancientcitiesturkey.com) görebilirsiniz.
<img class="box-shadow img-padding" src="{{site.url}}/assets/harita.jpg" alt="Turkey Ancient Cities Map"/> 

### Neden?
Geçtiğimiz Mart ayında, günübirlik bir Altınoluk gezisinde aklıma geldi Türkiye'nin tüm antik kentlerini bir harita üzerinde görme isteği. Böylece yakınlarda ne var ne yok görebilecek ve ona göre gezebilecektim. Ancak öğrendim ki, bu bilgilerin toplandığı tek bir kaynak yok. Ben de Mayıs ayında oturdum ve bu bilgileri derleyebileceğim bir harita yapmaya başladım. 

### Nedir?
Başta antik kentleri ekleme fikriyle çıktım ancak daha sonra kendime rehber olarak Kültür ve Turizm Bakanlığı bünyesindeki ören yerlerini seçince kapsamı biraz daha genişledi. Höyükler, tek kalmış antik tapınaklar da harita üzerinde var.

### Hangi Teknolojileri Kullandım?
En iyi bildiğim dil [PHP](http://php.net) ve en iyi bildiğim framework [Laravel](https://laravel.com) olduğu için onları tercih ettim. Ancak bu projeyi kendim için front-end frameworklere giriş olarak belirlediğimden dolayı asıl vaktimi orada harcadım. Eski, ancak temel bir framework olarak [Backbone.js](http://backbonejs.org)'i tercih ettim. Pek fazla memnun kalmadım, çünkü harita için tercih ettiğim [MapboxGL](https://www.mapbox.com/mapbox-gl-js/api/) kütüphanesiyle pek iyi anlaşmadı. Yine de her istediğimi yapabildim ve kritik şeyler öğrendim. Bu esnada [Vue.js](https://vuejs.org) ve [React](https://facebook.github.io/react/) ile de ilgilenince Backbone iyice sırıtmaya başladı. Biraz kurtarabilmek için, [Require.js](http://requirejs.org) ile biraz çekidüzen verdim, düzelttim. 

### Nasıl Araştırma Yaptım?
Araştırma en çok vakit alan, işin hamallığı diye tabir edeceğim kısmıydı. Ancak bir yandan da yeni şeyler öğrendiğim için keyif aldığım anlar ağırlıktaydı. 

Önceliği en bilinen ve ziyaret edilen antik kentlere vermeye çalıştım. İstanbul'dan başlayıp Ege'ye inip daha sonra da doğuya ilerlerken, kendime Kültür ve Turizm Bakanlığı'nın [ören yerleri listesini](http://www.kulturvarliklari.gov.tr/TR,43253/bakanligimiza-bagli-muzeler.html) baz aldım. Ancak burada olmayan pek çok ören yerini de internetten ve kitaplardan araştırarak ekledim.

Listeyi bu dosyadan edindim ancak kataloglanmış bilgiler kısıtlı olduğu için ören yerlerinin koordinatlarını tek tek ben topladım. Özellikle bazı ören yerleri hakkında pek fazla bilgi olmadığı için Google Earth'te yıkıntı aradığım da oldu. 

Koordinatlardan sonra, ziyaret edecekler için faydalı olabilecek her türlü bilgiyi topladım. Tripadvisor ve Foursquare linkleri, saat ve giriş ücreti bilgilerinin yer aldığı muze.gov.tr linklerini de elle toparlayarak veritabanına ekledim. 

Bunların yanında, daha da araştırmak isteyen meraklılar için, öncelikli olarak Wikipedia linkleri daha sonra ise blog yazıları veya Ekşi Sözlük gibi eğlenceli kaynakları toparladım ve linklerini İngilizce ve Türkçe olarak ayırdım. 

<img class="box-shadow img-padding" src="{{site.url}}/assets/harita3.jpg" alt="Turkey Ancient Cities Map Sidebar"/> 

Ayrıca, ziyaret etmek isteyenlerin ilgisini çekecek enteresan bilgileri de toparlamaya çalıştım. Bu bilgileri her antik kent için çıkartamadım ancak yaklaşık 30 tanesine ekledim. 

### Kaynaklar
Bu süreçte, çoğu internet üzerinden olmak üzere pek çok farklı kaynaktan faydalandım. Bilgilerin en derli toplu yer aldığı iki adet kaynağım var. 

1) [http://turkisharchaeonews.net](http://turkisharchaeonews.net)

Bu aynı benim yapmak istediğim şekilde bir haritaya sahip olan bir site. Açıkçası ben de kendi haritam üzerine çalışmaya başladıktan sonra keşfettim ancak yine de çalışmaya devam ettim. Çalıştıkça da bazı antik kentlerin ve höyüklerin burada bulunmadığını farkettim. Yine de antik kentler hakkındaki bilgiler, ulaşım bilgileri olarak eşşiz bir İngilizce kaynak. 

2) Türkiye'nin Antik Kentleri Kitabı ([http://www.yemyayin.com/kitaplar/turkiye-nin-antik-kentleri-754](http://www.yemyayin.com/kitaplar/turkiye-nin-antik-kentleri-754))

Bu kitap da özenle hazırlanmış, bakanlığa bağlı olsun olmasın tüm antik kentleri içeren bir kaynak olarak yer aldı projemde.

### Durum
Şu anda haritada 83 tane nokta tanımlı. Yukarıda bahsettiğim Türkiye'nin Antik Kentleri kitabına göre, Türkiye'de 118 antik kent var. Ben höyükleri ve tek kalmış yapıları da dahil etmek istediğimden dolayı, ulaşabileceğim maksimum rakamın 140 civarı olacağını tahmin ediyorum. Yani daha %60 kadarı tamamlanmış durumda. Bunun yanında, şu ana kadar tek cümlelik bilgi ekleyebildiğim antik kent sayısı 32. 

### Gelecek
Hedefim tahmini 140 rakamına, veya ulaşılabilecek en yüksek rakama ulaşmak. Siteyi açarken ki gösterdiğim ilk efordan sonra geri kalan yerleri zamanla, yavaş yavaş eklemeyi hedefliyorum. Siteye yeni bir özellik eklemeyi henüz düşünmüyorum. Öncelikli amaç verileri tamamlamak. Öte yandan, bu noktaları ayrı bir formatta (Excel, SQL veya başka bir format) başka bir yerde tutmak istiyorum. Böylece harita yerine ham dataya da isteyen ulaşabilir.

Projeyi takip etmek istiyorsanız [GitHub repositorysine](https://github.com/raicem/ancient-cities-turkey/) bakabilirsiniz.