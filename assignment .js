// kilometer to meter
function KilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var myMeter =KilometerToMeter(5);
console.log(myMeter); 

//budget calculator

function budgetCalculator (clock, phone, laptop){
      var clockRate = 50;
      var phoneRate = 100 ;
      var laptopRate =500;
      var total = clock*clockRate + phone*phoneRate + laptop*laptopRate;
    return total;

}
var sum = budgetCalculator(4,3,1 );
console.log(sum); 

//Hotel Cost
function hotelCost (day){
    var totalCost = 0;
    if (day <= 10){
        totalCost = day *100;
    }
    else if (day <20){
        var first10days = 10*100;
        var remaining = day-10;
        var second20days = remaining *80;
        totalCost = first10days + second20days;
    }
    else {
        var first10days =10 *100;
        var second20days =10 * 80;
        var remaining = day -20;
        var third20daysOver = remaining *50;
        totalCost = first10days + second20days +third20daysOver;

    }
    return totalCost;
}
var count = hotelCost(19);
console.log (count);

//Mega Friend Count

var friendsName =["habu", "polas", "arfin", "suvo","pasa vai",]
function megaFriend  (name){
        biggerName = "";
        for ( var i =0; i< friendsName.length; i++){
            var name = friendsName[i];
            if(name.length > biggerName.length) {
biggerName = name;
}
        }
return biggerName;
       
    }

var biggerFriend = megaFriend(friendsName)

console.log(biggerFriend);





















