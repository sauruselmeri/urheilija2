//yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}
//aliluokka Urheilija
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omaPaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omaPaino = omaPaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  //tehdaan get- ja set-metodit mahdollisesti muuttuville tiedoille
  get LinkkiKuvaan() {
    return this.linkkiKuvaan;
  }
  set LinkkiKuvaan(uusiLinktoP) {
    this.linkkiKuvaan = uusiLinktoP;
  }
  get OmaPaino() {
    return this.omaPaino;
  }
  set OmaPaino(uusiOmaP) {
    this.omaPaino = uusiOmaP;
  }
  get Laji() {
    return this.laji;
  }
  set Laji(uusiLaji) {
    this.laji = uusiLaji;
  }
  get Saavutukset() {
    return this.saavutukset;
  }
  set Saavutukset(uusiSaavutukset) {
    this.saavutukset = uusiSaavutukset;
  }
}
//LeBron James tiedot
const urheilija = new Urheilija(
  "LeBron Raymone",
  "James",
  "King James",
  new Date("1984-12-30").getFullYear(),
  "https://www.nba.com/lakers/team/player-pages/lebron-james-2544",
  110,
  "Koripallo",
  "4 x NBA MVP, 2 x Olympiakulta, 4 x NBA mestari, NBA historian eniten pisteitä tehnyt pelaaja"
);
//Kobe Bryant tiedot
const urheilija2 = new Urheilija(
  "Kobe Bean",
  "Bryant",
  "Black Mamba",
  new Date("1978-08-23").getFullYear(),
  "https://fi.wikipedia.org/wiki/Kobe_Bryant",
  105,
  "Koripallo",
  "2 x NBA MVP, 2 x Olympiakulta, 5 x NBA mestari, 18 x All-Star pelaaja"
);

//tässä alla esimerkkejä, kuinka settereiden avulla voi lisätä tai muuttaa tietoja. Laitettu alla kommentteihin.
//urheilija.etunimet = "Elmeri";
//urheilija.sukunimi = "Saurus";
//urheilija2.Saavutukset = urheilija2.Saavutukset + ", 2 x NBA Finals MVP";

//LeBron James tietojen tulostus
console.log("----------------------TIEDOT ALKAA----------------------");
console.log(
  "Urheilijan koko nimi: ",
  urheilija.etunimet,
  urheilija.sukunimi,
  ", sekä hänen kutsumanimi: ",
  urheilija.kutsumanimi
);
console.log("Urheilijan", urheilija.sukunimi, "urheilulaji:", urheilija.Laji);
console.log(urheilija.sukunimi, "painaa:", urheilija.OmaPaino, "kiloa");
console.log(urheilija.sukunimi, "on syntynyt vuonna:", urheilija.syntymavuosi);
console.log(
  "Linkki urheilijan",
  urheilija.sukunimi,
  "kuvaan:",
  urheilija.LinkkiKuvaan
);
console.log(
  "Urheilijan",
  urheilija.sukunimi,
  "saavutuksia ovat muunmuassa:",
  urheilija.Saavutukset
);
console.log("----------------------TIEDOT LOPPUU---------------------");
console.log("\n");
//Kobe Bryant tietojen tulostus
console.log("----------------------TIEDOT ALKAA----------------------");
console.log(
  "Urheilijan koko nimi: ",
  urheilija2.etunimet,
  urheilija2.sukunimi,
  ", sekä hänen kutsumanimi: ",
  urheilija2.kutsumanimi
);
console.log("Urheilijan", urheilija2.sukunimi, "urheilulaji:", urheilija2.Laji);
console.log(urheilija2.sukunimi, "painaa:", urheilija2.OmaPaino, "kiloa");
console.log(
  urheilija2.sukunimi,
  "on syntynyt vuonna:",
  urheilija2.syntymavuosi
);
console.log(
  "Linkki urheilijan",
  urheilija2.sukunimi,
  "kuvaan:",
  urheilija2.LinkkiKuvaan
);
console.log(
  "Urheilijan",
  urheilija2.sukunimi,
  "saavutuksia ovat muunmuassa:",
  urheilija2.Saavutukset
);
console.log("----------------------TIEDOT LOPPUU---------------------");
