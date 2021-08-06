//1st   Program For Calculate kilometer To Meter
function kilometerToMeter(kilometer)
{
    if (kilometer>= 1)
    {
        var meter = kilometer *1000;
        return meter;
    }
    else
    {
        return 'Invalid : Kilometer cannot be negative.'
    }
}
var result = kilometerToMeter(2)
console.log(result);





//2nd program for budgetCalculator


function budgetCalculator(watch,phone,laptop)

    {
        if (watch >= 1 && phone >=1 && laptop >=1)
        {
            var watchPrice =watch* 50;
            var phonePrice =phone* 100;
            var laptopPrice =laptop* 500;
            var totalBudget = watchPrice + phonePrice + laptopPrice;
            return totalBudget;
        }
        else
        {
            return 'Invalid: Number of Items  Cannot be Negative.';
        }
    }
 

var totalCost = budgetCalculator(4,3, -1);
console.log(totalCost);




//3rd Program for hotelCost

function hotelCost(days)
{
    var Bill = 0;
 if(days >=1 )
 {
    if(days <= 10)
    {
        Bill = days * 100;
        return Bill
    }
    else if(days <=20)
    {
        firstTenDays = 10* 100;
        remaining = days - 10;
        secondTenDays = remaining * 80
        Bill = firstTenDays + secondTenDays;
        return Bill;
    }
    else{
        firstTenDays = 10 * 100;
        secondTenDays = 10* 80;
        remaining = days - 20;
        lastDays = remaining * 50;
        Bill = firstTenDays + secondTenDays + lastDays;
    }
 }
 else
 {
     return 'Invalid : Days cannot be negative.Please Enter a Valid Number.';

 }
    return Bill;
}
var totalBill = hotelCost(11);
console.log(totalBill);





//last Program for megaFriend


function megaFriend(name)
{
    var max = name[0].length;
    var longest = name[0];
    for (i  =1; i<name.length; i++)
    {
        maximum = name[i].length
        if(maximum > max)
        {
        
            longest = name[i];
            max = maximum;

        }
    }
    return longest;
}
var output = (megaFriend(["happy", "lili", "manzia", "ZoyaAhsan", "Nilima"]))
console.log(output);