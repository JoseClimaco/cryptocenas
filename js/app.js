// $.get( "https://bittrex.com/api/v1.1/account/getbalances?apikey=905c00cce76d4a1bb1b7f93cdb87d0fe", function( data ) {
//     $( ".result" ).html( data );
//     alert( "Load was performed." );
//   });


var portfolio =
{
  litecoin: {
    SYMBOL: "LTC",
    AVAILABLE: 1.00000000,
    TRANSACTIONS:
    {
      0: {
        rate: 0.01334988,
        units: 1
      }
    }
  },
  neo: {
    SYMBOL: "NEO",
    AVAILABLE: 1.00234257,
    TRANSACTIONS:
    {
      0: {
        rate: 0.00658050,
        units: 0.55000000
      },
      0: {
        rate: 0.00612995,
        units: 0.24409622
      },
      0: {
        rate: 0.00478999,
        units: 0.20824635
      }
    }
  },
  komodo: {
    SYMBOL: "KMD",
    AVAILABLE: 6.00000000
  },
  monero: {
    SYMBOL: "XMR",
    AVAILABLE: 0.13494957
  },
  qtum: {
    SYMBOL: "QTUM",
    AVAILABLE: 1.00598528
  },  
  lunyr: {
    SYMBOL: "LUN",
    AVAILABLE: 1.10000000
  },  
  particl: {
    SYMBOL: "PART",
    AVAILABLE: 1.01932332
  },  
  okcash:
  {
    SYMBOL: "OK",
    AVAILABLE: 27.59387437
  },  
  cardano:
  {
    SYMBOL: "ADA",
    AVAILABLE: 200.00000000
  },  
  ripple:
  {
    SYMBOL: "XRP",
    AVAILABLE: 20.36545529
  },  
  vertcoin:
  {
    SYMBOL: "VTC",
    AVAILABLE: 4.00000000
  },  
  verge:
  {
    SYMBOL: "XVG",
    AVAILABLE: 369.13367647
  },  
  siacoin:
  {
    SYMBOL: "SC",
    AVAILABLE: 281.77966102
  },  
  bitcoin:
  {
    SYMBOL: "BTC",
    AVAILABLE: 0.00000001
  },
  ark:
  {
    SYMBOL: "ARK",
    AVAILABLE: 11.52658228
  },
  real:
  {
    SYMBOL: "REAL",
    AVAILABLE: 15.84
  },
  atlant:
  {
    SYMBOL: "ATL",
    AVAILABLE: 14.0895
  }
}

var cointotal = 0;
$.each(portfolio, function (key, val) {
    $.get( "https://api.coinmarketcap.com/v1/ticker/" + key + "/?convert=EUR", function( data ) {
      if (val.TRANSACTIONS) {
        var mediaRate = 0;
        var mediaUnits = 0;
        var totalRate = 0;
        $.each(val.TRANSACTIONS, function (key, val) {
          mediaRate = mediaRate + val.rate;
          mediaUnits = mediaUnits + val.units;
        });
        totalRate = mediaRate / mediaUnits;
      }
      var val_eur = val.AVAILABLE * data[0].price_eur;
      cointotal = cointotal + val_eur;
      $(".total").html(cointotal);
      var insert = "<tr><td>" + data[0].name + "</td><td>"+ val.SYMBOL+ "</td><td>"+ val.AVAILABLE +"</td><td>"+ totalRate +"</td><td>"+ totalRate * 3800 +"</td><td>€"+ data[0].price_eur +"</td><td>€" + val_eur + "</td></tr>"
      $(insert).appendTo( "body > div.table-responsive > table > tbody" );
  });
});
console.log(cointotal);


/*{
  "id": "bitcoin", 
  "name": "Bitcoin", 
  "symbol": "BTC", 
  "rank": "1", 
  "price_usd": "573.137", 
  "price_btc": "1.0", 
  "24h_volume_usd": "72855700.0", 
  "market_cap_usd": "9080883500.0", 
  "available_supply": "15844176.0", 
  "total_supply": "15844176.0", 
  "percent_change_1h": "0.04", 
  "percent_change_24h": "-0.3", 
  "percent_change_7d": "-0.57", 
  "last_updated": "1472762067"
}*/
