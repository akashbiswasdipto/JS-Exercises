/* console.log("External JS")

//task2

function sumArray(arr){
    var sum=0;
    arr.forEach(function(value, index)
    {
        sum +=value;
    });
    return sum;
}

console.log(sumArray([1,2,3,4,5]));

//task3

function checkEmail(emailString){
    var emailFormat=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var match= emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith.com"));

//task4
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   
function getReadingStatus(index)
{
    return library[index].readingStatus;
    
}
console.log(getReadingStatus(1));
*/ 

//task5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

function addItem(newItem){
    cart.push(newItem);
    console.log(cart);
}
var newItem={name: 'watch', price:64,quantity:1};
addItem(newItem);

//task5b

function sortCart(keyname){
    
    cart.sort(function (a, b) {
  return a.value - b.value;
    });
}
var name='price';
sortCart(name);




//task5c

function findbyName(name)
{
    var a= cart.indexOf(name);
    console.log(a);
}
var searchname="watch";
findbyName(searchname);

//task5d

function totalprice(){
    
}