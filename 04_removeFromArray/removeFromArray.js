// function to remove an one or more elements from an array
var removeFromArray = function(...args) 
{
    const array = args[0];
    return array.filter((item) => !args.includes(item));

}

// Do not edit below this line
module.exports = removeFromArray;

/* 
METHOD 1

const removeFromArray = function() 
{
    // create a new array from the arguments
    let newArray = Array.from(arguments);
    // create an array from the first argument
    let array = newArray[0];
    // create a new array to store the result
    let result = [];
    // loop through the array
    for (let i = 0; i < array.length; i++)
    {
        // if the element is not in the newArray, add it to the result
        if (!newArray.includes(array[i]))
        {
            result.push(array[i]);
        }
    }
    // return the result
    return result;
}

METHOD 2
{
    // convert arguments to array
    let args = Array.from(arguments);
    // get the array
    let arr = args[0];
    // remove the first element
    args.shift();
    // loop through the array
    for (let i = 0; i < arr.length; i++)

    {
        // loop through the arguments
        for (let j = 0; j < args.length; j++)
        {
            // if the element is found
            if (arr[i] === args[j])
            {
                // remove the element
                arr.splice(i, 1);
            }
        }
    }
    // return the array
    return arr;

}

METHOD 3

const removeFromArray = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

METHOD 4

var removeFromArray = function(...args) 
{
    const array = args[0];
    return array.filter((item) => !args.includes(item));

}

METHOD 5

const removeFromArray = function()
{
    let array = arguments[0];
    let newArray = [];
    for (let i = 0; i < array.length; i++)
    {
        let found = false;
        for (let j = 1; j < arguments.length; j++)
        {
            if (array[i] === arguments[j])
            {
                found = true;
                break;
            }
        }
        if (!found)
        {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


*/