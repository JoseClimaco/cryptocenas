// $.get( "https://bittrex.com/api/v1.1/account/getbalances?apikey=905c00cce76d4a1bb1b7f93cdb87d0fe", function( data ) {
//     $( ".result" ).html( data );
//     alert( "Load was performed." );
//   });
var allthedata = [
  {local:"bittrex",id:"bfa31c6b-e8f5-4b1e-8d93-9f483eaaa8c2",out:"BTC",in:"PART",type:"LIMIT_BUY",quantity:0.8,limit:0.00177648,fee:"0.00000355",price:"0.0014211",opened:"9/26/2017 9:14:18 AM",closed:"9/26/2017 9:14:19 AM"},
  {local:"bittrex",id:"353bbe54-f5f9-49c2-93dd-01aebfdfa18c",out:"BTC",in:"LTC",type:"LIMIT_BUY",quantity:1,limit:0.01334989,fee:"0.00003337",price:"0.01334988",opened:"9/27/2017 1:13:17 PM",closed:"9/27/2017 1:13:29 PM"},
  {local:"bittrex",id:"73be419a-3f40-470e-9ecc-ca874bfc50f0",out:"BTC",in:"COVAL",type:"LIMIT_BUY",quantity:498.75,limit:0.000001,fee:"0.00000124",price:"0.00049875",opened:"10/7/2017 13:27:05",closed:"10/7/2017 13:33:26"},
  {local:"bittrex",id:"aa10eb5e-b8b3-4503-b9a3-4db047352ec8",out:"BTC",in:"OMG",type:"LIMIT_BUY",quantity:0.26648769,limit:0.001909,fee:"0.00000126",price:"0.00050792",opened:"10/7/2017 13:31:24",closed:"10/7/2017 13:31:25"},
  {local:"bittrex",id:"986c8df9-e232-46d2-827e-a2af15c66f03",out:"BTC",in:"ADA",type:"LIMIT_BUY",quantity:102.8350516,limit:0.00000485,fee:"0.00000124",price:"0.00049669",opened:"10/7/2017 13:30:27",closed:"10/7/2017 13:30:27"},
  {local:"bittrex",id:"d45efb3f-dbd5-416d-af62-c6f87f0e6c72",out:"BTC",in:"RDD",type:"LIMIT_BUY",quantity:2267.045455,limit:0.00000022,fee:"0.00000124",price:"0.00049875",opened:"10/7/2017 13:26:12",closed:"10/8/2017 18:39:33"},
  {local:"bittrex",id:"719155e1-6062-45d9-9b21-421de37edbb4",out:"BTC",in:"XLM",type:"LIMIT_BUY",quantity:100.3521127,limit:0.00000497,fee:"0.00000124",price:"0.00049875",opened:"10/7/2017 13:22:50",closed:"10/7/2017 13:33:26"},
  {local:"bittrex",id:"5119e4b4-fa3a-44d2-a13e-61afdab36b6b",out:"BTC",in:"OK",type:"LIMIT_BUY",quantity:50,limit:0.000049,fee:"0.00000612",price:"0.00245",opened:"10/6/2017 20:14:40",closed:"10/6/2017 20:14:41"},
  {local:"bittrex",id:"2a52155b-7581-4710-a772-cd755f8085fe",out:"BTC",in:"NEO",type:"LIMIT_SELL",quantity:1.00234257,limit:0.00772447,fee:"0.00001935",price:"0.00774309",opened:"10/5/2017 13:52:53",closed:"10/5/2017 13:52:53"},
  {local:"bittrex",id:"71228e7e-27e5-4611-836e-375fa640c98f",out:"BTC",in:"OK",type:"LIMIT_BUY",quantity:22.59387437,limit:0.00006392,fee:"0.00000361",price:"0.0014442",opened:"10/2/2017 11:38:07",closed:"10/2/2017 11:38:07"},
  {local:"bittrex",id:"c78e8e66-f109-426c-9210-e011e98361d7",out:"BTC",in:"ADA",type:"LIMIT_BUY",quantity:200,limit:0.00000512,fee:"0.00000255",price:"0.00102",opened:"10/2/2017 11:37:38",closed:"10/2/2017 11:37:38"},
  {local:"bittrex",id:"8fbaaed2-8522-4700-ad3b-4ef3f9c8a8e3",out:"BTC",in:"QTUM",type:"LIMIT_BUY",quantity:0.71,limit:0.00253572,fee:"0.0000045",price:"0.00180036",opened:"9/26/2017 9:13:30 AM",closed:"9/26/2017 9:13:30 AM"},
  {local:"bittrex",id:"28393d52-b60a-4ee7-932b-9a48d3d6e2b6",out:"BTC",in:"NEO",type:"LIMIT_BUY",quantity:0.55,limit:0.00658052,fee:"0.00000904",price:"0.00361928",opened:"9/26/2017 9:12:47 AM",closed:"9/26/2017 9:12:47 AM"},
  {local:"bittrex",id:"cc41f2b2-7d15-4d66-89ac-52c11fee2275",out:"BTC",in:"LUN",type:"LIMIT_BUY",quantity:0.6,limit:0.00201968,fee:"0.00000302",price:"0.0012114",opened:"9/26/2017 9:08:43 AM",closed:"9/26/2017 9:08:43 AM"},
  {local:"bittrex",id:"4ba307b4-b54e-4ac5-921b-b5098c2a0a0a",out:"BTC",in:"ETH",type:"LIMIT_BUY",quantity:0.1051245,limit:0.07590999,fee:"0.00001994",price:"0.00797998",opened:"9/25/2017 2:30:58 PM",closed:"9/25/2017 2:30:58 PM"},
  {local:"bittrex",id:"fb10857b-9ae1-432a-8733-ff6dc6881a1d",out:"BTC",in:"ARK",type:"LIMIT_BUY",quantity:12.62658228,limit:0.00079,fee:"0.00002493",price:"0.009975",opened:"9/25/2017 2:23:46 PM",closed:"9/25/2017 2:30:49 PM"},
  {local:"bittrex",id:"bd94c356-afd1-4134-8806-031386638cc7",out:"BTC",in:"ARK",type:"LIMIT_SELL",quantity:5.54278614,limit:0.0010893,fee:"0.00001509",price:"0.00603775",opened:"9/14/2017 2:15:34 PM",closed:"9/14/2017 2:16:29 PM"},
  {local:"bittrex",id:"2559a0e9-ebae-4ab9-bf9a-6628e5de1e4a",out:"BTC",in:"ARK",type:"LIMIT_BUY",quantity:2.54278614,limit:0.00081989,fee:"0.00000521",price:"0.0020848",opened:"9/13/2017 3:10:52 PM",closed:"9/13/2017 3:10:52 PM"},
  {local:"bittrex",id:"53150267-1992-4114-b425-1d8c79adeb4a",out:"BTC",in:"LUN",type:"LIMIT_BUY",quantity:0.5,limit:0.002942,fee:"0.00000367",price:"0.001471",opened:"9/13/2017 3:09:48 PM",closed:"9/13/2017 3:09:48 PM"},
  {local:"bittrex",id:"dbfb7e90-47e9-40b7-9581-b36aca55d5aa",out:"BTC",in:"OK",type:"LIMIT_BUY",quantity:5,limit:0.00019401,fee:"0.00000242",price:"0.00097",opened:"9/12/2017 11:02:12",closed:"9/12/2017 11:02:12"},
  {local:"bittrex",id:"4fc440ea-a3d7-4b4e-85d1-dd186984708a",out:"BTC",in:"KMD",type:"LIMIT_BUY",quantity:5,limit:0.00049659,fee:"0.0000062",price:"0.00248295",opened:"9/12/2017 11:01:24",closed:"9/12/2017 11:01:24"},
  {local:"bittrex",id:"062ec255-2e06-495a-b7ca-859f9e471f4c",out:"BTC",in:"XMR",type:"LIMIT_BUY",quantity:0.1,limit:0.02648,fee:"0.00000661",price:"0.00264589",opened:"9/12/2017 11:00:26",closed:"9/12/2017 11:00:26"},
  {local:"bittrex",id:"c29dd769-702b-49f9-95cd-afcd586c29f0",out:"BTC",in:"ARK",type:"LIMIT_BUY",quantity:2,limit:0.0008729,fee:"0.00000436",price:"0.0017458",opened:"9/12/2017 10:59:25",closed:"9/12/2017 10:59:26"},
  {local:"bittrex",id:"89d596a9-f670-497d-bf8f-2c45fb6cc165",out:"BTC",in:"ETH",type:"LIMIT_SELL",quantity:0.122475,limit:0.0715,fee:"0.00002189",price:"0.00875696",opened:"9/12/2017 10:54:03",closed:"9/12/2017 10:55:52"},
  {local:"bittrex",id:"28f3f9f8-0f9a-4aa7-9943-8fe86e7594e7",out:"BTC",in:"XMR",type:"LIMIT_BUY",quantity:0.03494957,limit:0.02637885,fee:"0.0000023",price:"0.00092192",opened:"9/6/2017 12:41:18",closed:"9/6/2017 12:41:18"},
  {local:"bittrex",id:"b0c2eb57-91b7-4b25-bd2b-6b1edce856ec",out:"BTC",in:"ARK",type:"LIMIT_BUY",quantity:1,limit:0.00058832,fee:"0.00000146",price:"0.000586",opened:"9/6/2017 12:36:51",closed:"9/6/2017 12:36:51"},
  {local:"bittrex",id:"f18f0f18-886c-424e-bd9d-fe2402625fb8",out:"BTC",in:"NEO",type:"LIMIT_BUY",quantity:0.20824635,limit:0.00479,fee:"0.00000249",price:"0.0009975",opened:"9/6/2017 12:30:35",closed:"9/6/2017 12:30:35"},
  {local:"bittrex",id:"c5fb4aff-3246-4b91-8da9-d69c1f814f40",out:"BTC",in:"ZEC",type:"LIMIT_BUY",quantity:0.00869379,limit:0.05736856,fee:"0.00000124",price:"0.00049874",opened:"10/7/2017 13:32:53",closed:"10/7/2017 13:32:53"},
  {local:"bittrex",id:"ae26a77c-a43b-4bfb-a982-aba92c356a15",out:"BTC",in:"KMD",type:"LIMIT_BUY",quantity:1.20371247,limit:0.00042263,fee:"0.00000127",price:"0.00050872",opened:"10/7/2017 13:32:39",closed:"10/7/2017 13:32:39"},
  {local:"bittrex",id:"0d8edeeb-8d4f-4e06-a065-c3ce2ce60cbc",out:"BTC",in:"MTL",type:"LIMIT_BUY",quantity:0.27862973,limit:0.00179001,fee:"0.00000124",price:"0.00049872",opened:"10/7/2017 13:32:10",closed:"10/7/2017 13:32:10"},
  {local:"bittrex",id:"3f1ea370-de9d-4f88-a291-8252f7dfcf2c",out:"BTC",in:"PART",type:"LIMIT_BUY",quantity:0.21932332,limit:0.00227404,fee:"0.00000124",price:"0.00049875",opened:"9/8/2017 09:53:59",closed:"9/8/2017 09:53:59"},
  {local:"bittrex",id:"e4c2a8b1-d643-4e39-b0a0-45f79d1735ca",out:"BTC",in:"QTUM",type:"LIMIT_BUY",quantity:0.29598528,limit:0.0033701,fee:"0.00000249",price:"0.00099749",opened:"9/8/2017 09:52:46",closed:"9/8/2017 09:52:46"},
  {local:"bittrex",id:"30476b5c-5862-4452-b842-2211a8077129",out:"BTC",in:"XRP",type:"LIMIT_BUY",quantity:20.36545529,limit:0.00004898,fee:"0.00000249",price:"0.0009975",opened:"9/8/2017 09:52:19",closed:"9/8/2017 09:52:19"},
  {local:"bittrex",id:"43241343-28d0-4748-b64f-a08cd3e977e8",out:"BTC",in:"SC",type:"LIMIT_BUY",quantity:281.779661,limit:0.00000177,fee:"0.00000123",price:"0.00049593",opened:"9/6/2017 12:37:24",closed:"9/6/2017 12:37:24"},
  {local:"bittrex",id:"6a3cee11-e585-4bc4-aaa9-bc8508f3f7f7",out:"BTC",in:"XVG",type:"LIMIT_BUY",quantity:369.1336765,limit:0.00000153,fee:"0.00000139",price:"0.00055739",opened:"9/6/2017 12:29:35",closed:"9/6/2017 12:29:35"},
  {local:"bittrex",id:"1c337d61-25a8-4ef1-8ae6-3b718ae851fa",out:"BTC",in:"VTC",type:"LIMIT_BUY",quantity:4,limit:0.00020239,fee:"0.00000202",price:"0.00080956",opened:"9/6/2017 10:51:04",closed:"9/7/2017 06:28:08"},
  {local:"bittrex",id:"e84b6540-0f42-4d39-9938-6d604155a65c",out:"BTC",in:"KMD",type:"LIMIT_BUY",quantity:1,limit:0.00072318,fee:"0.00000179",price:"0.000719",opened:"9/6/2017 12:33:49",closed:"9/6/2017 12:33:49"},
  {local:"bittrex",id:"08764fca-f83a-4052-84b3-9a442caac73f",out:"BTC",in:"NEO",type:"LIMIT_BUY",quantity:0.24409622,limit:0.00613,fee:"0.00000374",price:"0.0014963",opened:"9/8/2017 14:47:21",closed:"9/8/2017 14:50:23"},
  //{local:"coinbase",id:"59ad59ba133ed70272c2a651",out:"EUR",in:"BTC",type:"LIMIT_BUY",quantity:0.00236322,limit:9.01,fee:"0.99",price:"10",opened:"2017-09-04 06:48:42 -0700",closed:"2017-09-04 06:48:42 -0700"},
  //{local:"coinbase",id:"59afd7324d3af2038e1a5191",out:"EUR",in:"BTC",type:"LIMIT_BUY",quantity:0.00711162,limit:28.01,fee:"1.99",price:"30",opened:"2017-09-06 04:08:35 -0700",closed:"2017-09-06 04:08:35 -0700"},
  //{local:"coinbase",id:"59bb944be67669031b60061c",out:"EUR",in:"BTC",type:"LIMIT_BUY",quantity:0.03590304,limit:96.16,fee:"3.84",price:"100",opened:"2017-09-15 01:50:19 -0700",closed:"2017-09-15 01:50:19 -0700"},
  {local:"coinbase",id:"59ad59fa133ed700bfc2cf16",out:"EUR",in:"ETH",type:"LIMIT_BUY",quantity:0.03431908,limit:9.01,fee:"0.99",price:"10",opened:"2017-09-04 06:49:46 -0700",closed:"2017-09-04 06:49:46 -0700"},
  {local:"coinbase",id:"59b799b8f8050000accd2d4e",out:"EUR",in:"ETH",type:"LIMIT_BUY",quantity:0.18324183,limit:48.01,fee:"1.99",price:"50",opened:"2017-09-12 01:24:24 -0700",closed:"2017-09-12 01:24:24 -0700"},
  {local:"gdax",id:"349959",out:"EUR",in:"LTC",type:"LIMIT_BUY",quantity:2.30868344,limit:44.15,fee:"0",price:"101.9283739",opened:"2017-10-09T15:22:13.505Z",closed:"2017-10-09T15:22:13.505Z"},
  {local:"jaxx",id:"0xf284b03c9a5912c8fbfe26cc5b821baae08fb76e7e79be16f50c495ddd7d5a94",out:"ETH",in:"EOS",type:"LIMIT_BUY",quantity:0,limit:0,fee:"0.00051416",price:"0.101402559",opened:"9/29/2017 1:16:59 PM",closed:"9/29/2017 1:16:59 PM"},
  {local:"jaxx",id:"0x34d14334cde292df428550cc1bfbfb962b518c58ff4188a30225ce534821839e",out:"ETH",in:"ETH",type:"TRANSFER",quantity:0.1001245,limit:0,fee:"0.001071",price:"",opened:"9/29/2017 1:05:04 PM",closed:"9/29/2017 1:05:04 PM"},
  {local:"jaxx",id:"0xa58efde710dfd0d4fe37d7fe3affa2ad8f70685a98474fafcaa4d55ca7a13027",out:"ETH",in:"ETH",type:"TRANSFER",quantity:0.122475,limit:0,fee:"0.000442071",price:"",opened:"9/12/2017 09:58:38",closed:"9/12/2017 09:58:38"},
  {local:"jaxx",id:"0xebccceba79415e77cd1e0280c36f15ff40ca82ca4d127b88d68f6a4b6b8991b1",out:"ETH",in:"REAL",type:"LIMIT_BUY",quantity:15.84,limit:0.003787878787879,fee:"0.003406242",price:"0.06",opened:"9/12/2017 08:36:59",closed:"9/12/2017 08:36:59"},
  {local:"jaxx",id:"0x1a525f1ed1d6db4c878502da20b4d1c5b0981ee3244f250dbb309d0320592d27",out:"ETH",in:"ETH",type:"TRANSFER",quantity:0.18756091,limit:0,fee:"0.0004815335021",price:"",opened:"9/12/2017 08:29:39",closed:"9/12/2017 08:29:39"},
  {local:"jaxx",id:"0xfb6d1e111240d07a9ab27187a69b79e4277aef6640f803bd6bbfa5a4ac57c23f",out:"ETH",in:"ATL",type:"LIMIT_BUY",quantity:14.0895,limit:0,fee:"0.001259538",price:"0.0279",opened:"9/8/2017 10:03:23",closed:"9/8/2017 10:03:23"},
  {local:"jaxx",id:"0xa0a9e506f596ec004673b944ae7482f05d46f92eb573125a13b33c7f2c8a40ad",out:"ETH",in:"ETH",type:"TRANSFER",quantity:0.03,limit:0,fee:"0.001016730662",price:"",opened:"9/8/2017 09:53:15",closed:"9/8/2017 09:53:15"},     {local:""}
]

var portfolio =
{
  litecoin: {
    SYMBOL: "LTC",
  },
  neo: {
    SYMBOL: "NEO",
  },
  komodo: {
    SYMBOL: "KMD",
  },
  monero: {
    SYMBOL: "XMR",
  },
  qtum: {
    SYMBOL: "QTUM",
  },  
  lunyr: {
    SYMBOL: "LUN",
  },  
  particl: {
    SYMBOL: "PART",
  },  
  okcash:
  {
    SYMBOL: "OK",
  },  
  cardano:
  {
    SYMBOL: "ADA",
  },  
  ripple:
  {
    SYMBOL: "XRP",
  },  
  vertcoin:
  {
    SYMBOL: "VTC",
  },  
  verge:
  {
    SYMBOL: "XVG",
  },  
  siacoin:
  {
    SYMBOL: "SC",
  },  
  bitcoin:
  {
    SYMBOL: "BTC",
  },
  ark:
  {
    SYMBOL: "ARK",
  },
  real:
  {
    SYMBOL: "REAL",
  },
  atlant:
  {
    SYMBOL: "ATL",
  },
  omisego:
  {
    SYMBOL: "OMG",
  },
  metal:
  {
    SYMBOL: "MTL",
  },
  zcash:
  {
    SYMBOL: "ZEC",
  },
  "circuits-of-value":
  {
    SYMBOL: "COVAL",
  },
  reddcoin:
  {
    SYMBOL: "RDD",
  },
  stellar:
  {
    SYMBOL: "XLM",
  },
}




var cointotal = 0;
$.each(portfolio, function (key, val) {
    $.get( "https://api.coinmarketcap.com/v1/ticker/" + key + "/?convert=EUR", function( data ) {
      /*if (val.TRANSACTIONS) {
        var mediaRate = 0;
        var totalTransactions = Object.keys(val.TRANSACTIONS).length;
        var totalRate = 0;
        $.each(val.TRANSACTIONS, function (idx, transaction) {
          mediaRate = mediaRate + transaction.Limit;
        });
        totalRate = mediaRate / totalTransactions;
      }*/

      var coinMediaRate = 0;
      var coinTotalQuantity = 0;
      var coinTotalBuy = 0;
      var coinTotalValue = 0;
      var coinTotalTransactions = 0;
      var totalTransactions = 0;
      var color = "white";
      
      $.each(allthedata, function (idx, transaction) {
        if(val.SYMBOL === transaction.in && transaction.type != "TRANSFER" && transaction.type != "LIMIT_SELL") {
          
          coinMediaRate = coinMediaRate + (transaction.limit);
          coinTotalQuantity = coinTotalQuantity + transaction.quantity;

          /*
          totalofcoin = totalofcoin + transaction.quantity * transaction.limit;
          quantityofcoin = quantityofcoin + transaction.quantity;
          mediaRate = mediaRate + transaction.limit;
          */
          
          totalTransactions++;
        } else if (val.SYMBOL === transaction.in && transaction.type === "LIMIT_SELL") {
          coinTotalQuantity = coinTotalQuantity - transaction.quantity;
        }
      });
      coinMediaRate = coinMediaRate / totalTransactions;


      var val_eur = coinTotalQuantity * data[0].price_eur;
      cointotal = cointotal + val_eur;
      $(".total").html(cointotal);
      if (coinMediaRate < data[0].price_btc) {
        var color = "green";
      } else {
        var color = "red";
      }
      var insert = "<tr class='"+color+"'><td><img src='https://files.coinmarketcap.com/static/img/coins/16x16/"+ data[0].id +
                  ".png'></td><td>" + data[0].name + // name
                  "</td><td>"+ val.SYMBOL+  //symbol
                  "</td><td>"+ coinTotalQuantity + //quantity
                  "</td><td>"+ coinMediaRate + // bought at btc
                  "</td><td>"+ data[0].price_btc + // value at btc
                  "</td><td>€"+ coinMediaRate * 3800 + // bought at euro
                  "</td><td>€"+ data[0].price_eur + // value at euro
                  "</td><td>%"+ calculatePercentage(coinMediaRate, data[0].price_btc) + // value at euro   % Decrease = Decrease ÷ Original Number × 100
                  "</td><td>€" + coinTotalQuantity * data[0].price_eur + // est value
                  "</td></tr>"
      $(insert).appendTo( "body > div.table-responsive > table > tbody" );
  });
});
console.log(cointotal);



function calculatePercentage(oldFigure, newFigure)
{
    var percentChange = ((oldFigure - newFigure) / oldFigure) * 100;
    return Math.round(Math.abs(percentChange));
}