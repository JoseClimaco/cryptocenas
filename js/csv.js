
$(document).ready(function() {
    // AJAX in the data file
    $.ajax({
        type: "GET",
        url: "bittrex.txt",
        dataType: "text",
        success: function(data) {
            dataprocess(data);
        }
    });
});

function dataprocess(csv) {

    var dataprocessed = csvJSON(csv);

    var cointotal = 0;
    $(".total").html(dataprocessed);
    /*$.each(portfolio, function (key, val) {
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
    });*/
}

//var csv is the CSV file with headers
function csvJSON(csv){
    csv = csv.replace(/\0/g, '');
    
    var lines=csv.split("\n");

    var result = [];

    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }
    
    //return result; //JavaScript object
    console.log(result);
    console.log(JSON.stringify(result));
    return JSON.stringify(result); //JSON  
}
