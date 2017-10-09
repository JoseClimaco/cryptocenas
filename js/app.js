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
      0: {OrderUuid:"353bbe54-f5f9-49c2-93dd-01aebfdfa18c",Exchange:"BTC-LTC",Type:"LIMIT_BUY",Quantity:1.00000000,Limit:0.01334989,CommissionPaid:0.00003337,Price:0.01334988,Opened:"9/27/20171:13:17PM",Closed:"9/27/20171:13:29PM"},
    }
  },
  /*neo: {
    SYMBOL: "NEO",
    AVAILABLE: 1.00234257,
    TRANSACTIONS:
    {
      0: {
        OrderUuid: 'f18f0f18-886c-424e-bd9d-fe2402625fb8',
        Exchange: 'BTC-NEO',
        Type: 'LIMIT_BUY',
        Quantity: 0.20824635,
        Limit: 0.00479000,
        CommissionPaid: 0.00000249,
        Price: 0.00099750,
        Opened: '9/6/2017 12:30:35 PM',
        Closed: '9/6/2017 12:30:35 PM'
      },
      1: {OrderUuid:"08764fca-f83a-4052-84b3-9a442caac73f",Exchange:"BTC-NEO",Type:"LIMIT_BUY",Quantity:"0.24409622",Limit:0.00613000,CommissionPaid:"0.00000374",Price:"0.00149630",Opened:"9/8/20172:47:21PM",Closed:"9/8/20172:50:23PM"},
      2: {OrderUuid:"28393d52-b60a-4ee7-932b-9a48d3d6e2b6",Exchange:"BTC-NEO",Type:"LIMIT_BUY",Quantity:"0.55000000",Limit:0.00658052,CommissionPaid:"0.00000904",Price:"0.00361928",Opened:"9/26/20179:12:47AM",Closed:"9/26/20179:12:47AM"}
      
    }
  },*/
  komodo: {
    SYMBOL: "KMD",
    AVAILABLE: 7.20371247,
    TRANSACTIONS:
    {
      0: {OrderUuid:"4fc440ea-a3d7-4b4e-85d1-dd186984708a",Exchange:"BTC-KMD",Type:"LIMIT_BUY",Quantity:"5.00000000",Limit:0.00049659,CommissionPaid:"0.00000620",Price:"0.00248295",Opened:"9/12/201711:01:24AM",Closed:"9/12/201711:01:24AM"},
      1: {OrderUuid:"e84b6540-0f42-4d39-9938-6d604155a65c",Exchange:"BTC-KMD",Type:"LIMIT_BUY",Quantity:"1.00000000",Limit:0.00072318,CommissionPaid:"0.00000179",Price:"0.00071900",Opened:"9/6/201712:33:49PM",Closed:"9/6/201712:33:49PM"},
      2: {OrderUuid:"ae26a77c-a43b-4bfb-a982-aba92c356a15",Exchange:"BTC-KMD",Type:"LIMIT_BUY",Quantity:"1.20371247",Limit:0.00042263,CommissionPaid:"0.00000127",Price:"0.00050872",Opened:"10/7/2017 1:32:39 PM",Closed:"10/7/2017 1:32:39 PM"}
    }
  },
  monero: {
    SYMBOL: "XMR",
    AVAILABLE: 0.13494957,
    TRANSACTIONS:
    {
      0: {OrderUuid:"062ec255-2e06-495a-b7ca-859f9e471f4c",Exchange:"BTC-XMR",Type:"LIMIT_BUY",Quantity:"0.10000000",Limit:0.02648000,CommissionPaid:"0.00000661",Price:"0.00264589",Opened:"9/12/201711:00:26AM",Closed:"9/12/201711:00:26AM"},
      1: {OrderUuid:"28f3f9f8-0f9a-4aa7-9943-8fe86e7594e7",Exchange:"BTC-XMR",Type:"LIMIT_BUY",Quantity:"0.03494957",Limit:0.02637885,CommissionPaid:"0.00000230",Price:"0.00092192",Opened:"9/6/201712:41:18PM",Closed:"9/6/201712:41:18PM"},
    }
  },
  qtum: {
    SYMBOL: "QTUM",
    AVAILABLE: 1.00598528,
    TRANSACTIONS:
    {
      0: {OrderUuid:"e4c2a8b1-d643-4e39-b0a0-45f79d1735ca",Exchange:"BTC-QTUM",Type:"LIMIT_BUY",Quantity:"0.29598528",Limit:0.00337010,CommissionPaid:"0.00000249",Price:"0.00099749",Opened:"9/8/20179:52:46AM",Closed:"9/8/20179:52:46AM"},
      1: {OrderUuid:"8fbaaed2-8522-4700-ad3b-4ef3f9c8a8e3",Exchange:"BTC-QTUM",Type:"LIMIT_BUY",Quantity:"0.71000000",Limit:0.00253572,CommissionPaid:"0.00000450",Price:"0.00180036",Opened:"9/26/20179:13:30AM",Closed:"9/26/20179:13:30AM"},
    }
  },  
  lunyr: {
    SYMBOL: "LUN",
    AVAILABLE: 1.10000000,
    TRANSACTIONS:
    {
      0: {OrderUuid:"53150267-1992-4114-b425-1d8c79adeb4a",Exchange:"BTC-LUN",Type:"LIMIT_BUY",Quantity:"0.50000000",Limit:0.00294200,CommissionPaid:"0.00000367",Price:"0.00147100",Opened:"9/13/20173:09:48PM",Closed:"9/13/20173:09:48PM"},
      1: {OrderUuid:"cc41f2b2-7d15-4d66-89ac-52c11fee2275",Exchange:"BTC-LUN",Type:"LIMIT_BUY",Quantity:"0.60000000",Limit:0.00201968,CommissionPaid:"0.00000302",Price:"0.00121140",Opened:"9/26/20179:08:43AM",Closed:"9/26/20179:08:43AM"},
      
    }
  },  
  particl: {
    SYMBOL: "PART",
    AVAILABLE: 1.01932332,
    TRANSACTIONS:
    {
      0: {OrderUuid:"3f1ea370-de9d-4f88-a291-8252f7dfcf2c",Exchange:"BTC-PART",Type:"LIMIT_BUY",Quantity:"0.21932332",Limit:0.00227404,CommissionPaid:"0.00000124",Price:"0.00049875",Opened:"9/8/20179:53:59AM",Closed:"9/8/20179:53:59AM"},
      1: {OrderUuid:"bfa31c6b-e8f5-4b1e-8d93-9f483eaaa8c2",Exchange:"BTC-PART",Type:"LIMIT_BUY",Quantity:"0.80000000",Limit:0.00177648,CommissionPaid:"0.00000355",Price:"0.00142110",Opened:"9/26/20179:14:18AM",Closed:"9/26/20179:14:19AM"},
    }
  },  
  okcash:
  {
    SYMBOL: "OK",
    AVAILABLE: 27.59387437,
    TRANSACTIONS:
    {
     0: {OrderUuid:"71228e7e-27e5-4611-836e-375fa640c98f",Exchange:"BTC-OK",Type:"LIMIT_BUY",Quantity:"22.59387437",Limit:0.00006392,CommissionPaid:"0.00000361",Price:"0.00144420",Opened:"10/2/201711:38:07AM",Closed:"10/2/201711:38:07AM"},
     1: {OrderUuid:"dbfb7e90-47e9-40b7-9581-b36aca55d5aa",Exchange:"BTC-OK",Type:"LIMIT_BUY",Quantity:"5.00000000",Limit:0.00019401,CommissionPaid:"0.00000242",Price:"0.00097000",Opened:"9/12/201711:02:12AM",Closed:"9/12/201711:02:12AM"},
      
    }
  },  
  cardano:
  {
    SYMBOL: "ADA",
    AVAILABLE: 302.83505155,
    TRANSACTIONS:
    {
      0: {OrderUuid:"c78e8e66-f109-426c-9210-e011e98361d7",Exchange:"BTC-ADA",Type:"LIMIT_BUY",Quantity:"200.00000000",Limit:0.00000512,CommissionPaid:"0.00000255",Price:"0.00102000",Opened:"10/2/201711:37:38AM",Closed:"10/2/201711:37:38AM"},      
      1: {OrderUuid:"986c8df9-e232-46d2-827e-a2af15c66f03",Exchange:"BTC-ADA",Type:"LIMIT_BUY",Quantity:"102.83505155",Limit:0.00000485,CommissionPaid:"0.00000124",Price:"0.00049669",Opened:"10/7/2017 1:30:27 PM",Closed:"10/7/2017 1:30:27 PM"},
      
    }
  },  
  ripple:
  {
    SYMBOL: "XRP",
    AVAILABLE: 20.36545529,
    TRANSACTIONS:
    {
      0: {OrderUuid:"30476b5c-5862-4452-b842-2211a8077129",Exchange:"BTC-XRP",Type:"LIMIT_BUY",Quantity:"20.36545529",Limit:0.00004898,CommissionPaid:"0.00000249",Price:"0.00099750",Opened:"9/8/20179:52:19AM",Closed:"9/8/20179:52:19AM"},
    }
  },  
  vertcoin:
  {
    SYMBOL: "VTC",
    AVAILABLE: 4.00000000,
    TRANSACTIONS:
    {
      0: {OrderUuid:"1c337d61-25a8-4ef1-8ae6-3b718ae851fa",Exchange:"BTC-VTC",Type:"LIMIT_BUY",Quantity:"4.00000000",Limit:0.00020239,CommissionPaid:"0.00000202",Price:"0.00080956",Opened:"9/6/201710:51:04AM",Closed:"9/7/20176:28:08AM"},
    }
  },  
  verge:
  {
    SYMBOL: "XVG",
    AVAILABLE: 369.13367647,
    TRANSACTIONS:
    {
      0: {OrderUuid:"6a3cee11-e585-4bc4-aaa9-bc8508f3f7f7",Exchange:"BTC-XVG",Type:"LIMIT_BUY",Quantity:"369.13367647",Limit:0.00000153,CommissionPaid:"0.00000139",Price:"0.00055739",Opened:"9/6/201712:29:35PM",Closed:"9/6/201712:29:35PM"},
    }
  },  
  siacoin:
  {
    SYMBOL: "SC",
    AVAILABLE: 281.77966102,
    TRANSACTIONS:
    {
      0: {OrderUuid:"43241343-28d0-4748-b64f-a08cd3e977e8",Exchange:"BTC-SC",Type:"LIMIT_BUY",Quantity:"281.77966102",Limit:0.00000177,CommissionPaid:"0.00000123",Price:"0.00049593",Opened:"9/6/201712:37:24PM",Closed:"9/6/201712:37:24PM"},
    }
  },  
  bitcoin:
  {
    SYMBOL: "BTC",
    AVAILABLE: 0.00125062,
    TRANSACTIONS:
    {
      
    }
  },
  ark:
  {
    SYMBOL: "ARK",
    AVAILABLE: 11.52658228,
    TRANSACTIONS:
    {
      0: {OrderUuid:"2559a0e9-ebae-4ab9-bf9a-6628e5de1e4a",Exchange:"BTC-ARK",Type:"LIMIT_BUY",Quantity:"2.54278614",Limit:0.00081989,CommissionPaid:"0.00000521",Price:"0.00208480",Opened:"9/13/20173:10:52PM",Closed:"9/13/20173:10:52PM"},
      1: {OrderUuid:"fb10857b-9ae1-432a-8733-ff6dc6881a1d",Exchange:"BTC-ARK",Type:"LIMIT_BUY",Quantity:"12.62658228",Limit:0.00079000,CommissionPaid:"0.00002493",Price:"0.00997500",Opened:"9/25/20172:23:46PM",Closed:"9/25/20172:30:49PM"},
      2: {OrderUuid:"b0c2eb57-91b7-4b25-bd2b-6b1edce856ec",Exchange:"BTC-ARK",Type:"LIMIT_BUY",Quantity:"1.00000000",Limit:0.00058832,CommissionPaid:"0.00000146",Price:"0.00058600",Opened:"9/6/201712:36:51PM",Closed:"9/6/201712:36:51PM"},
      3: {OrderUuid:"c29dd769-702b-49f9-95cd-afcd586c29f0",Exchange:"BTC-ARK",Type:"LIMIT_BUY",Quantity:"2.00000000",Limit:0.00087290,CommissionPaid:"0.00000436",Price:"0.00174580",Opened:"9/12/201710:59:25AM",Closed:"9/12/201710:59:26AM"},
    }
  },
  real:
  {
    SYMBOL: "REAL",
    AVAILABLE: 15.84,
    TRANSACTIONS:
    {
      
    }
  },
  atlant:
  {
    SYMBOL: "ATL",
    AVAILABLE: 14.0895,
    TRANSACTIONS:
    {
      
    }
  },
  omisego:
  {
    SYMBOL: "OMG",
    AVAILABLE: 0.26648769,
    TRANSACTIONS:
    {
      0: {OrderUuid:"aa10eb5e-b8b3-4503-b9a3-4db047352ec8",Exchange:"BTC-OMG",Type:"LIMIT_BUY",Quantity:"0.26648769",Limit:"0.00190900",CommissionPaid:"0.00000126",Price:"0.00050792",Opened:"10/7/2017 1:31:24 PM",Closed:"10/7/2017 1:31:25 PM"}      
    }
  },
  metal:
  {
    SYMBOL: "MTL",
    AVAILABLE: 0.27862973,
    TRANSACTIONS:
    {
      0: {OrderUuid:"0d8edeeb-8d4f-4e06-a065-c3ce2ce60cbc",Exchange:"BTC-MTL",Type:"LIMIT_BUY",Quantity:"0.27862973",Limit:"0.00179001",CommissionPaid:"0.00000124",Price:"0.00049872",Opened:"10/7/2017 1:32:10 PM",Closed:"10/7/2017 1:32:10 PM"}      
    }
  },
  zcash:
  {
    SYMBOL: "ZEC",
    AVAILABLE: 0.00869379,
    TRANSACTIONS:
    {
      0: {OrderUuid:"c5fb4aff-3246-4b91-8da9-d69c1f814f40",Exchange:"BTC-ZEC",Type:"LIMIT_BUY",Quantity:"0.00869379",Limit:"0.05736856",CommissionPaid:"0.00000124",Price:"0.00049874",Opened:"10/7/2017 1:32:53 PM",Closed:"10/7/2017 1:32:53 PM"}      
    }
  },
  "circuits-of-value":
  {
    SYMBOL: "COVAL",
    AVAILABLE: 498.75000000,
    TRANSACTIONS:
    {
      0: {OrderUuid:"73be419a-3f40-470e-9ecc-ca874bfc50f0",Exchange:"BTC-COVAL",Type:"LIMIT_BUY",Quantity:"498.75000000",Limit:"0.00000100",CommissionPaid:"0.00000124",Price:"0.00049875",Opened:"10/7/2017 1:27:05 PM",Closed:"10/7/2017 1:33:26 PM"}      
    }
  },
  reddcoin:
  {
    SYMBOL: "RDD",
    AVAILABLE: 2267.04545455,
    TRANSACTIONS:
    {
      0: {OrderUuid:"d45efb3f-dbd5-416d-af62-c6f87f0e6c72",Exchange:"BTC-RDD",Type:"LIMIT_BUY",Quantity:"2267.04545455",Limit:"0.00000022",CommissionPaid:"0.00000124",Price:"0.00049875",Opened:"10/7/2017 1:26:12 PM",Closed:"10/8/2017 6:39:33 PM"},      
    }
  },
  stellar:
  {
    SYMBOL: "XLM",
    AVAILABLE: 100.35211268,
    TRANSACTIONS:
    {
      0: {OrderUuid:"719155e1-6062-45d9-9b21-421de37edbb4",Exchange:"BTC-XLM",Type:"LIMIT_BUY",Quantity:"100.35211268",Limit:"0.00000497",CommissionPaid:"0.00000124",Price:"0.00049875",Opened:"10/7/2017 1:22:50 PM",Closed:"10/7/2017 1:33:26 PM"},
      
    }
  },
}




var cointotal = 0;
$.each(portfolio, function (key, val) {
    $.get( "https://api.coinmarketcap.com/v1/ticker/" + key + "/?convert=EUR", function( data ) {
      if (val.TRANSACTIONS) {
        var mediaRate = 0;
        var totalTransactions = Object.keys(val.TRANSACTIONS).length;
        var totalRate = 0;
        $.each(val.TRANSACTIONS, function (idx, transaction) {
          mediaRate = mediaRate + transaction.Limit;
        });
        totalRate = mediaRate / totalTransactions;
      }
      var val_eur = val.AVAILABLE * data[0].price_eur;
      cointotal = cointotal + val_eur;
      $(".total").html(cointotal);
      if (totalRate < data[0].price_btc) {
        var color = "green";
      } else {
        var color = "red";
      }
      var insert = "<tr class='"+color+"'><td><img src='https://files.coinmarketcap.com/static/img/coins/16x16/"+ data[0].id +".png'></td><td>" + data[0].name + "</td><td>"+ val.SYMBOL+ "</td><td>"+ val.AVAILABLE +"</td><td>"+ totalRate +"</td><td>"+ data[0].price_btc +"</td><td>"+ totalRate * 3800 +"</td><td>€"+ data[0].price_eur +"</td><td>€" + val_eur + "</td></tr>"
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
