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