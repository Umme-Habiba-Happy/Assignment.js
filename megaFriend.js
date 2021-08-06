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