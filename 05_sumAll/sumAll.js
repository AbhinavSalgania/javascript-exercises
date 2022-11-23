const sumAll = function() 
{
    let first = arguments[0];
    let second = arguments[1];
    let sum = 0;

    if (first < 0 || second < 0)
    {
        return 'ERROR';
    }
    else if (typeof first !== 'number' || typeof second !== 'number')
    {
        return 'ERROR';
    }
    else if (first < second)
    {
        for (let i = first; i <= second; i++)
        {
            sum += i;
        }
    }
    else if (first > second)
    {
        for (let i = second; i <= first; i++)
        {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*

METHOD 2

const sumAll = function(min, max)
{
    if(min < 0 || max < 0)
    {
        return 'ERROR';
    }
    else if(typeof min !== 'number' || typeof max !== 'number')
    {
        return 'ERROR';
    }
    else if(min > max)
    {
        let temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for(let i = min; i <= max; i++)
    {
        sum += i;
    }
    return sum

    

}*/
