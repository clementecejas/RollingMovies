let peliculas2 = JSON.parse(localStorage.getItem("peliculas")) || [];

function idRandom() {
    if (peliculas.length > 0) {
        return peliculas[peliculas.length - 1].id + Math.round(Math.random() * 100);
    } else {
        return Math.round(Math.random() * 100);
    }
}

let peliculasPorDefecto = [
    {
        id: 1,
        nombre: 'Daredevil',
        imagen: 'https://pbs.twimg.com/media/FWgU1ZTUIAIGOmH.jpg:large',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51549B21334AB3968E620AB93B4F20F3D18D43E0C3B0655C775BA61819650A81/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/cDUKA6Tqiw8" title="Daredevil de Marvel | Tráiler oficial en ESPAÑOL | Temporada 1 | Netflix España" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Ciego desde que era joven, Matt Murdock lucha contra la injusticia de día como abogado y por la noche como Daredevil en Nueva York.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 2,
        nombre: 'Capitan America Civil War',
        imagen: 'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170636/170636.jpg',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6D8F1C5A690E3CFE951AE58D7E8581EA27AD92759B19CBCF0D26914E66D112C/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1280" height="533" src="https://www.youtube.com/embed/LuOLcuKVFwY" title="Capitán América: Civil War de Marvel | Tráiler Oficial en español| HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Después de que otro incidente internacional, en el que se ven envueltos los Vengadores, produzca daños colaterales, la presión política obliga a poner en marcha un sistema para depurar responsabilidades.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 3,
        nombre: 'Capitan America y el soldado del Invierno',
        imagen: 'https://es.web.img3.acsta.net/pictures/14/01/31/16/12/220933.jpg',
        imagenPortada: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/24537.jpg',
        trailer: '<iframe width="1280" height="533" src="https://www.youtube.com/embed/Ics4g1xppFg" title="Capitán América: El Soldado de Invierno de Marvel | Tráiler Oficial en español | HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Capitán América, Viuda Negra y un nuevo aliado, Falcon, se enfrentan a un enemigo inesperado mientras intentan exponer una conspiración que pone en riesgo al mundo.',
        categoria: 'Marvel',
        publicado: true,
        favorito: true,
        portada: true
    },
    {
        id: 4,
        nombre: 'Capitan America el Primer Vengador',
        imagen: 'https://es.web.img3.acsta.net/medias/nmedia/18/84/79/82/20099009.jpg',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1BF743FA5C68171968E444AEB4FDD84BFFC6A7E9ADC8EC0A427DE7E80D62C04/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/YqEJ0jpFvSU" title="Capitán América: El Primer Vengador. Tráiler En Español HD 1080P" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Tras tres meses de someterse a un programa de entrenamiento físico y táctico, encomiendan a Steve Rogers su primera misión como Capitán América. Armado con un escudo indestructible, emprende la guerra contra la perversa organización HYDRA',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 5,
        nombre: 'Iron Man 3',
        imagen: 'https://pics.filmaffinity.com/Iron_Man_3-473505612-large.jpg',
        imagenPortada: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ironman-3-1556537437.jpeg',
        trailer: '<iframe width="1280" height="533" src="https://www.youtube.com/embed/4-hAI2nVBng" title="Iron Man 3 de Marvel | Anuncio: Final Fútbol Americano 2013 Español | HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites. Este viaje pondrá a prueba su entereza una y otra vez, y le obligará a confiar en su ingenio.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 6,
        nombre: 'Iron Man',
        imagen: 'https://pics.filmaffinity.com/Iron_Man-108960873-large.jpg',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/8ugaeA-nMTc" title="Iron Man (2008) Trailer #1 | Movieclips Classic Trailers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 7,
        nombre: 'Avengers Infinity War',
        imagen: 'https://lumiere-a.akamaihd.net/v1/images/image_91864e3f.jpeg',
        imagenPortada: 'https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2018/04/avengers_infinity_war_joe_anthony_russo.jpg',
        trailer: '<iframe width="1280" height="532" src="https://www.youtube.com/embed/823iAZOEKt8" title="Avengers: Infinity War, de Marvel Studios – Tráiler Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 8,
        nombre: 'Avengers Endgame',
        imagen: 'https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?format=jpg&width=960',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A4B58B11C7019B5403E07D551249121C4F4CC99119907F4460F0725B34A27086/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1280" height="532" src="https://www.youtube.com/embed/PyakRSni-c0" title="Avengers: Endgame – Tráiler oficial #2 (Subtitulado)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 9,
        nombre: 'Spider Man No Way Home',
        imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HTFXQHQKW5AZFOJEVTQSEQALIA.png',
        imagenPortada: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/01/spider-man-no-way-home.jpeg?fit=2048%2C1087&quality=50&strip=all&ssl=1',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/r6t0czGbuGI" title="SPIDER-MAN: SIN CAMINO A CASA - Tráiler Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para recuperar su vida, pero algo sale mal y provoca una fractura en el multiverso.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 10,
        nombre: 'Doctor Strange en el Multiverso de la locura',
        imagen: 'https://es.web.img3.acsta.net/pictures/22/04/07/11/43/1839314.jpg',
        imagenPortada: 'https://as01.epimg.net/meristation/imagenes/2022/05/04/reportajes/1651689635_866482_1651736910_noticia_normal.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/KREBGtEeW9U" title="Doctor Strange en el Multiverso de la Locura | Tráiler Oficial | Doblado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora, su equipo debe enfrentarse a una amenaza que podría destruirlo todo.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 11,
        nombre: 'Black Panther: Wakanda for Ever',
        imagen: 'https://m.supergeek.cl/noticias/site/artic/20220726/imag/foto_0000000320220726124058/WAKANDAFOREVER_POSTER.jpg',
        imagenPortada: 'https://notifarandula.club/wp-content/uploads/2022/10/Lanzamiento-del-trailer-de-Black-Panther-Wakanda-Forever.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="Marvel Studios’ Black Panther: Wakanda Forever | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: 12,
        nombre: 'Eternals',
        imagen: 'https://lumiere-a.akamaihd.net/v1/images/eternals_ka_pay1_las_mi_affe3bf6.png',
        imagenPortada: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB95B246902D39FDB268C138975F2EEE6F3E6616A7A760033262695B2D216942/scale?width=1200&aspectRatio=1.78&format=jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/v1EkoQV4g5c" title="Eternals de Marvel Studios | Tráiler Oficial | Doblado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Los Eternos son una raza de seres inmortales con poderes sobrehumanos que han vivido en secreto en la Tierra durante miles de años. Aunque nunca han intervenido en el destino de la población, ahora una amenaza se cierne sobre la humanidad.',
        categoria: 'Marvel',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Los juegos del hambre: en llamas',
        imagen: 'https://es.web.img2.acsta.net/pictures/210/455/21045552_20131001101323189.jpg',
        imagenPortada: 'https://pics.filmaffinity.com/the_hunger_games_catching_fire-503209467-large.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/azqXcc31HKk" title="Los Juegos Del Hambre: En Llamas - Trailer  Oficial #2 Subtitulado - FULL HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Tras salir victoriosos en los juegos del hambre, Katniss Everdeen y Peeta Mellark emprenden el tour de la victoria. Katniss cree que se está gestando una rebelión, pero un cruel cambio en las reglas del próximo torneo podría cambiar Panem.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Los juegos del hambre',
        imagen: 'https://pics.filmaffinity.com/Los_juegos_del_hambre-634460284-large.jpg',
        imagenPortada: 'https://hbomax-images.warnermediacdn.com/images/GYOVrkwGAqquiBgEAAAQd/tileburnedin?size=1280x720&partner=hbomaxcom&v=92260131296ef72ee731921322f85d70&host=art-gallery.api.hbo.com&language=es-419&w=1280',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/_8Ktfs2mBDY" title="Los Juegos del Hambre - Tráiler Oficial HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'En lo que alguna vez fue Norteamérica, la capital de Panem mantiene sus 12 distritos obligándolos a seleccionar a un niño y a una niña, llamados Tributos, a competir en un evento televisado nacionalmente llamado los Juegos del Hambre. Cada ciudadano debe ver pelear a muerte a los jóvenes. El Tributo del Distrito 12, Katniss Everdeen, solo confía en sus habilidades de caza y buenos instintos en un escenario en donde debe sobrevivir contra la humanidad.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Los juegos del hambre: Sinsajo - Parte 1',
        imagen: 'https://es.web.img3.acsta.net/pictures/14/09/12/10/51/011753.jpg',
        imagenPortada: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e0f41d9eb424509cfc055a786aad5b67c7dc5ca3f5288cfa932dbbadd52d2ed2._V_SX1080_.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/usWO2JUx464" title="Los Juegos Del Hambre Sinsajo Parte 1 Trailer 2014 Español" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Después de destruir los juegos para siempre, Katniss llega al Distrito 13 para salvar a Peeta y una nación conmovida por su coraje.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Los juegos del hambre: Sinsajo - Parte 2',
        imagen: 'https://es.web.img2.acsta.net/pictures/15/10/05/09/45/058912.jpg',
        imagenPortada: 'https://occ-0-1009-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUHEh_QtXeRu2o3ZpKYvK9T9BCsRyEvNxKN-iv9skDF-NGIqNjnU0mJ7KO4O_AMG9zzAfoKE250BlpX8-E6eEAwxka1dKgYAOUZy.jpg?r=5a4',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/6LJpUk5KCFM" title="LOS JUEGOS DEL HAMBRE: SINSAJO - PARTE 2 Final Tráiler #4 Español" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Katniss y sus amigos Peeta, Gale y Finnick se embarcan en su última misión. Abandonan juntos el Distrito 13 para enfrentarse al presidente Snow, quien está obsesionado con destruir a Katniss, y liberar a los ciudadanos de Panem.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Rápido y furioso',
        imagen: 'https://mx.web.img2.acsta.net/pictures/18/11/29/04/36/0147821.jpg',
        imagenPortada: 'https://img.remediosdigitales.com/87d1ce/coches-miticos-fast-and-furious-dodge-charger-toyota-supra-01/1366_521.jpeg',
        trailer: '<iframe width="1070" height="713" src="https://www.youtube.com/embed/J8kzPh6-40I" title="Película | Rápido y Furioso (1) | Trailer | 2001" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Un policía encubierto se infiltra en una banda de carreras callejeras de Los Ángeles mientras investiga robos de automóviles.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '+ Rápido + furioso',
        imagen: 'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        imagenPortada: 'https://assets.whichcar.com.au/image/private/s--aoPnHOzQ--/ar_1.9047619047619047,c_fill,f_auto,g_xy_center,q_auto:good,x_948,y_431/c_scale,w_1200/v1/Street%20Machine/Features/2-fast-2-furious-1896.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/ZZGkV_xWGw4" title="2 Fast 2 Furious - Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Un expolicía y su amigo se unen a un agente de aduanas para atrapar a un criminal de Miami conectado al lavado de dinero.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Rápido y furioso: reto Tokio',
        imagen: 'https://www.ecured.cu/images/5/5f/R%C3%A1pido_y_Furioso3.jpeg',
        imagenPortada: 'http://i2.hdslb.com/bfs/archive/38d755a0769e5ce5af7e2e3950b9c9a9b20e9b32.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/IiN9-b7RGZk" title="Película | Rápido y Furioso: Reto Tokio (3) | Trailer | 2006" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Sean Boswell siempre se ha sentido como un intruso, pero él se define a sí mismo a través de sus victorias como corredor callejero de autos. Su pasatiempo lo vuelve impopular con las autoridades, así que se va a vivir con su padre a Japón. Una vez allá, y aún más enajenado, Sean descubre un nuevo deporte emocionante, pero peligroso. Las apuestas son muy altas cuando Sean se enfrenta al campeón local y se enamora de su novia.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Rápidos y furiosos 4',
        imagen: 'https://pics.filmaffinity.com/Fast_amp_Furious_A_n_m_s_r_pido_A_todo_gas_4-855174409-large.jpg',
        imagenPortada: 'http://2.bp.blogspot.com/_ydgrGWjIm5I/SOBCmbYaC-I/AAAAAAAABFQ/rl2RfPQrZts/w1200-h630-p-k-no-nu/79-1-Rapido+y+furioso+4+Tuning.jpg',
        trailer: '<iframe width="1280" height="544" src="https://www.youtube.com/embed/mUXekPixdNo" title="Rapido y Furioso 4 Trailer Oficial Subtitulado y en HD (2009)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: "El exconvicto Dominic Toretto se une a su viejo adversario, Brian O'Conner, que ahora trabaja para el FBI en Los Ángeles, con el fin de infiltrarse en una organización criminal que se dedica a introducir heroína en la ciudad.",
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Rápidos y furiosos: 5in control',
        imagen: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_.jpg",
        imagenPortada: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/01/Fast-five-vault-stunt-1.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/ndth_OIyfJw" title="FAST AND FURIOUS 5 - Nuevo Trailer HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: "En Río de Janeiro, Dominic Toretto y Brian O'Conner reúnen a su pandilla de corredores callejeros para llevar a cabo un atraco, mientras están en la mira de un poderoso narcotraficante brasileño y un peligroso agente federal.",
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Rápidos y furiosos 7',
        imagen: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/616055.jpg',
        imagenPortada: 'https://asalallena.com.ar/wp-content/uploads/2020/07/rapidos-y-furiosos-7.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/tX0MGnC41nk" title="FAST & FURIOUS 7 - Tráiler Mundial 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Un agente del gobierno que habla sin problemas le ofrece ayuda a Dominic Toretto y su banda para eliminar a un enemigo peligroso; a cambio, pide rescatar a un pirata informático secuestrado.',
        categoria: 'Acción',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Series ======================================================================================================


    {
        id: idRandom(),
        nombre: 'Loki',
        imagen: 'https://pics.filmaffinity.com/Loki_Serie_de_TV-814995520-large.jpg',
        imagenPortada: 'https://static.wikia.nocookie.net/marveldatabase/images/a/ae/Loki_%28TV_series%29_Season_1_5.jpg/revision/latest?cb=20210707090821',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/YBLOatn1sps" title="Loki (2021) Marvel Serie Tráiler Oficial Subtitulado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Loki, el Dios de las Mentiras, se aleja de la sombra de su hermano para embarcarse en una aventura que se desarrolla tras los acontecimientos de "Vengadores: Endgame".',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'WandaVision',
        imagen: 'https://pics.filmaffinity.com/Bruja_Escarlata_y_Visi_n_Miniserie_de_TV-568232831-mmed.jpg',
        imagenPortada: 'https://culturageek.com.ar/wp-content/uploads/2021/01/wandavision-release-date.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/UuhqbcMNrME" title="WandaVision | Marvel Studios | Tráiler Subtitulado | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Con vidas suburbanas idealizadas, los seres superpoderosos Wanda y Vision comienzan a sospechar que nada es lo que parece.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Breaking Bad',
        imagen: 'https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg',
        imagenPortada: 'https://indiehoy.com/wp-content/uploads/2021/06/breaking-bad.jpg',
        trailer: '<iframe width="951" height="713" src="https://www.youtube.com/embed/rJnjxvgvkBM" title="TRAILER BREAKING BAD SUBTITULADA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia, una situación que no mejora cuando su esposa da a luz y su hijo adolescente sufre de parálisis cerebral, pero Walter queda anonadado cuando se entera que tiene un cáncer terminal. Al concluir que su enfermedad iba a arruinar financieramente a su familia, él toma una decisión desesperada con el fin de ganar más dinero durante el tiempo que le queda y transforma un viejo vehículo de recreación en un laboratorio de matanfetaminas sobre ruedas.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Better Call Saul',
        imagen: 'https://es.web.img2.acsta.net/pictures/18/07/02/14/12/5660762.jpg',
        imagenPortada: 'https://statics.eleconomista.com.ar/2022/08/62f46753dfe55.png',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/Ylv21uNzW4k" title="Better Call Saul - Official Tráiler #1 Subtitulado Español [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Seis años antes de conocer a Walter White, el cuestionable abogado Jimmy McGill asume el alias de Saul Goodman, mientras intenta labrarse un nombre propio en Albuquerque.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Dark',
        imagen: 'https://es.web.img3.acsta.net/pictures/17/11/10/12/27/3064798.jpg',
        imagenPortada: 'https://media.glamour.mx/photos/61906e7d2d97bd4c522a6a5d/master/w_1600%2Cc_limit/228672.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/z2wPBG-GSJ0" title="Dark | Temporada 3 | Tráiler oficial | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'La desaparición de dos niños muestra los vínculos entre cuatro familias y expone el pasado de una pequeña ciudad.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Stranger Things',
        imagen: 'https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg',
        imagenPortada: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/stranger-things.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/d0JYlUTbv1A" title="Stranger Things 4 | Volumen 2: Tráiler | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Moon Knight',
        imagen: 'https://lumiere-a.akamaihd.net/v1/images/moon_knight_full_poster_a1af18d1.png',
        imagenPortada: 'https://media.revistagq.com/photos/62447ee604f9a9e64ff59db1/master/pass/moon%20knight.jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/HebHYBeqGv0" title="MOON KNIGHT Tráiler Latino (2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'La investigación de los misterios del antiguo Egipto desde el interior de un mismo cuerpo.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Dahmer',
        imagen: 'https://de.web.img2.acsta.net/c_310_420/pictures/22/09/17/18/16/3249476.jpg',
        imagenPortada: 'https://occ-0-1361-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbGc2TAB37p9Qw9GUUonCQ_hGDMkGq_eYQyinAsOFG4Fr8n1b9bnh9Aio-7QY5QjzWFjrn8wuaIuTt3iK9uhvHunlX0wuVlf-1B3.jpg?r=f23',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/XGTrtPATyPs" title="DAHMER - Monstruo: La historia de Jeffrey Dahmer | Tráiler oficial (Tráiler 1) | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'La historia de uno de los asesinos en serie más conocidos de Estados Unidos, contada en gran parte desde los puntos de vista de sus víctimas.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Game of Thrones',
        imagen: 'https://gameofthrones.hbolatam.com/img/seasons-got-01.jpg',
        imagenPortada: 'https://i.ytimg.com/vi/kDIlADvnC_s/maxresdefault.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/kDIlADvnC_s" title="Game of Thrones | Temporada 8 | Trailer Oficial (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'El libro mejor vendido de la serie "A Song of Ice and Fire" escrito por George R.R, es llevado a la pantalla chica cuando HBO decide recrear esta historia épica de fantasía. Es la descripción de dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada en el Norte de Irlanda y Malta.',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'House of the Dragon',
        imagen: 'https://vorterixsla.com/wp-content/uploads/2022/08/La_Casa_del_Drag_n_Serie_de_TV-678918948-large.jpg',
        imagenPortada: 'https://dib.com.ar/wp-content/uploads/2022/08/dragon.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/DotnJ7tTA34" title="House of the Dragon | Official Trailer | HBO Max" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'La historia de la familia Targaryen, 200 años antes de los eventos que tuvieron lugar en "Game of Thrones".',
        categoria: 'Series',
        publicado: true,
        favorito: false,
        portada: false
    },


    //DC ======================================================================================================


    {
        id: idRandom(),
        nombre: 'Joker',
        imagen: 'https://pics.filmaffinity.com/Joker-790658206-large.jpg',
        imagenPortada: 'https://i.ytimg.com/vi/ygUHhImN98w/maxresdefault.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/ygUHhImN98w" title="JOKER - Tráiler Final" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'The Batman',
        imagen: 'https://pics.filmaffinity.com/The_Batman-449856406-large.jpg',
        imagenPortada: 'https://90lineas.com/wp-content/uploads/2022/03/Batman.jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/fWQrd6cwJ0A" title="Batman - Trailer Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entra en conflicto con un asesino en serie conocido como "el Acertijo".',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'El hombre de acero',
        imagen: 'https://es.web.img3.acsta.net/pictures/15/11/20/13/14/031438.jpg',
        imagenPortada: 'http://www.lacabecita.com/wp-content/uploads/20130419-manofsteel-xl.jpg',
        trailer: '<iframe width="1280" height="533" src="https://www.youtube.com/embed/BddCj2i5pRw" title="EL HOMBRE DE ACERO - Tráiler 3 doblado  español latino HD - Oficial de Warner Bros. Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'A pesar de luchar con las ramificaciones de su origen y habilidades extraordinarias, el joven Clark Kent (Henry Cavill) debe convertirse en un héroe y salvar a las personas que ama de una grave amenaza.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Batman inicia',
        imagen: 'https://pics.filmaffinity.com/Batman_Begins-413277928-large.jpg',
        imagenPortada: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OGHDYZFBURBBPGKVK46X73IYHM.jpg',
        trailer: '<iframe width="1280" height="547" src="https://www.youtube.com/embed/QhPqez3CwiM" title="Batman Begins - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Después de la muerte de sus padres, el joven heredero Bruce Wayne se convierte en un vengador enmascarado que lucha contra las fuerzas del mal en Ciudad Gótica.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Batman: el caballero de la noche',
        imagen: 'https://pics.filmaffinity.com/El_caballero_oscuro-102763119-large.jpg',
        imagenPortada: 'https://es.rollingstone.com/wp-content/uploads/2021/12/Batman-en-busca-de-la-redencion-de-%E2%80%98El-Caballero-de-la-noche.jpg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/LDG9bisJEaI" title="The Dark Knight (Trailer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Batman tiene que mantener el equilibrio entre el heroísmo y el vigilantismo para pelear contra un vil criminal conocido como el Guasón, que pretende sumir Ciudad Gótica en la anarquía.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'Batman: el caballero de la noche asciende',
        imagen: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7b3bc6cff7081f143c977272b39fac071b892ff6925fb7620f2babf05e6af5fd._RI_V_TTW_.jpg',
        imagenPortada: 'https://media.lacapital.com.ar/p/88bf22122226b09b8d81016c560a3b2a/adjuntos/203/imagenes/006/034/0006034039/la-masacre-denver-reavivo-el-fantasma-la-muerte-heath-ledger-el-guason-del-filme-anterior-batman.jpg',
        trailer: '<iframe width="1280" height="533" src="https://www.youtube.com/embed/c_BZOsbX3MI" title="BATMAN: EL CABALLERO DE LA NOCHE ASCIENDE - Trailer 1 doblado HD - oficial Warner Bros. Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Ocho años después de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'El Escuadrón Suicida',
        imagen: 'https://pics.filmaffinity.com/El_Escuadr_n_Suicida-629689677-large.jpg',
        imagenPortada: 'https://cinefilosoficial.com/wp-content/uploads/2021/08/the-suicide-squad-guinos-argentina.jpeg',
        trailer: '<iframe width="1268" height="713" src="https://www.youtube.com/embed/IblLmbGxw1Q" title="El Escuadrón Suicida - Trailer Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        descripcion: 'Con tal de salir de una prisión infernal, los supervillanos más peligrosos del mundo aceptan una misión del Gobierno: viajar a una remota isla, enemiga de los Estados Unidos y repleta de soldados, para destruir un laboratorio de alta tecnología.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: 'La Liga de la Justicia de Zack Snyder',
        imagen: 'https://i0.wp.com/revistacontrapunto.com/wp-content/uploads/2021/04/portada-Justice-League2.jpg?resize=1080%2C1350&ssl=1',
        imagenPortada: 'https://media.gq.com.mx/photos/6041318b94037dd0571a4088/master/pass/snyder-cut%20justice.jpg',
        trailer: "<iframe width='1268' height='713' src='https://www.youtube.com/embed/ui37YKQ9AC4' title='Zack Snyder's Justice League - Official Trailer - Warner Bros. UK' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'",
        descripcion: 'Impulsado por su restaurada fe en la humanidad e inspirado por el acto desinteresado de Superman, Batman y su nueva aliada la Mujer Maravilla reclutan a Aquaman, Cyborg y Flash para que los ayuden a salvar el planeta de un enemigo recién despertado.',
        categoria: 'DC',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Comedia ======================================================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Comedia',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Ciencia Ficción ==========================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Ciencia Ficción',
        publicado: true,
        favorito: false,
        portada: false
    }
    ,


    //Aventura ======================================================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Aventura',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Aventura',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Aventura',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Terror ======================================================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Terror',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Terror',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Terror',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Romance ======================================================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Romance',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Romance',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Romance',
        publicado: true,
        favorito: false,
        portada: false
    },


    //Documentales ======================================================================================================


    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Documentales',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Documentales',
        publicado: true,
        favorito: false,
        portada: false
    },
    {
        id: idRandom(),
        nombre: '',
        imagen: '',
        imagenPortada: '',
        trailer: '',
        descripcion: '',
        categoria: 'Documentales',
        publicado: true,
        favorito: false,
        portada: false
    }
];

function setPeliculasDefecto() {
    if(peliculas2.length  === 0){
        localStorage.setItem('peliculas', JSON.stringify(peliculasPorDefecto));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste peliculas por defecto!",
            showConfirmButton: true,
            timer: 1500,
        });
        setTimeout(() => {
            location.reload()
        }, 1500);
    }else{
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Ya agregaste las peliculas por defecto",
            showConfirmButton: true,
            timer: 1500,
        });
    }
};

if(peliculas2.length > 0){
    const botonAgregar = document.getElementById('boton-agregar');
    botonAgregar.style.display = 'none'
}
