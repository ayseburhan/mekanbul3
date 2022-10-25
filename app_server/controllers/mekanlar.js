var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res) {
  res.render('anasayfa', 
  { 
    "baslik": "Ayşe BURHAN",
    "sayfaBaslik":{
      "siteAd":"Mekanbul",
      "slogan":"Civardaki mekanları keşfet"
  },
  "Mekanlar":[
    {
      "ad":"Burç",
      "adres":"İyaş",
      "puan":"4",
      "mesafe":"10km",
      "imkanlar":["Tatlı","Yemek","Kahve"]
    },
    {
      "ad":"Gloria",
      "adres":"SDÜ Doğu Kampüs",
      "puan":"2",
      "mesafe":"100m",
      "imkanlar":["Tatlı","Kahve"]
    },
    {
      "ad":"Starbucks",
      "adres":"Iyas AVM",
      "puan":"5",
      "mesafe":"18m",
      "imkanlar":["Tatlı","Kahve"]
    }
  ]
});
};
const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi',
    { 
      "baslik": "Mekan bilgisi",
      "mekanBaslik": "Starbucks",
      "mekanDetay":{
      "ad": "Starbucks",
      "adres": "Centrum Garden AVM",
      "puan": "4",
      "imkanlar":["Dünya Kahveleri", "Kekler", "Pastalar"],
      "koordinatlar":{
        "enlem": "37.7",
        "boylam": "30.5"
      },
      "saatler":[
        {
          "gunler": "Pazartesi-Cuma",
          "acilis": "07.00",
          "kapanis":"23.30",
          "kapali": false
        },
        {
          "gunler": "Cumartesi-Pazar",
          "acilis": "09.00",
          "kapanis":"23.30",
          "kapali": false
        }
      ],
      "yorumlar":[
        {
          "yorumYapan": "Ayşe",
          "puan": "4",
          "tarih": "13 Ekim 2022",
          "yorumMetni": "Kahveler güzel."
        },
        {
          "yorumYapan": "Arda",
          "puan": "3",
          "tarih": "13 Ekim 2022",
          "yorumMetni": "Kahveler iyi."
        },
        {
          "yorumYapan": "Ceren",
          "puan": "5",
          "tarih": "13 Ekim 2022",
          "yorumMetni": "Mükemmel."
        }
      ] 
    }
});
}

const yorumEkle = function (req, res) {
  res.render('yorumekle', { "title": "Yorum ekle" });
};



module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle
}