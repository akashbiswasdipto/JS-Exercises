/* JavaScript code here */
console.log("External JS")

function sumArray(arr){
    var sum=0;
    arr.forEach(function(value, index))
    {
        sum +=value;
    });
    return sum;
}

console.log(sumArray([1,2,3,4,5]));