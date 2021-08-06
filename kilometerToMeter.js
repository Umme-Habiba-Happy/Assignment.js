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