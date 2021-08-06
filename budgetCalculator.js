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