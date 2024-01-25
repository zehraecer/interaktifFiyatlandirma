const myRange = document.getElementById("myRange");
const pageviews = document.getElementById("pageviews");
const fiyat = document.getElementById("price");
const aylikFaturalandirma = document.getElementById("faturalandirma");




function fiyatHesapla(selectedValue, aylikFaturaKontrolu) {
    let pageview;
    let price;
  
    switch (selectedValue) {
      case 1:
        pageview = "100K pageviews";
        price = aylikFaturaKontrolu ? "$6.00" : "$10.00";
        break;
      case 2:
        pageview = "150K pageviews";
        price = aylikFaturaKontrolu ? "$9.00" : "$20.00";
        break;
      case 3:
        pageview = "300K pageviews";
        price = aylikFaturaKontrolu ? "$12.00" : "$30.00";
        break;
      case 4:
        pageview = "400K pageviews";
        price = aylikFaturaKontrolu ? "$18.00" : "$40.00";
        break;
      case 5:
        pageview = "500K pageviews";
        price = aylikFaturaKontrolu ? "$27.00" : "$50.00";
        break;
      default:
        pageview = "";
        price = "$16.00";
    }
    pageviews.textContent = pageview;
    fiyat.textContent = price;
}


   myRange.addEventListener("input", () => {
    const selectedValue = parseInt(myRange.value, 10);
    const aylikFaturaKontrolu = aylikFaturalandirma.checked;
    fiyatHesapla(selectedValue, aylikFaturaKontrolu);
  });
  
  aylikFaturalandirma.addEventListener("change", () => {
    const selectedValue = parseInt(myRange.value, 10);
    const aylikFaturaKontrolu = aylikFaturalandirma.checked;
    fiyatHesapla(selectedValue, aylikFaturaKontrolu);
  });

fiyatHesapla();
