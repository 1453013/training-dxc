const defaultNumArray = [ 9,4,2,1,6,7,3,8,5];

//them phan tu vao dau mang


var addToZero = [...defaultNumArray];
addToZero.unshift(6);
console.log (addToZero);


// lay phan tu dau mang ra

var zeroIndex = defaultNumArray.shift();
console.log(zeroIndex);


// lay thong tin tu prompt hien len man hinh

var person = prompt("Please enter your name", "");

console.log(person);

// confirm (cancel/ok)

var answer;
var result = confirm("Press a button!");
if (result == true) 
{
    answer = "bcd";
} else
{
    answer = "abc";
} 
console.log(answer)

// sap xep array object ( first name, last name , age)


const defaultObjArray = [
    {
        firstname:"Tanjirou",
        lastname:"Kamado",
        age:14
    },
    {
        firstname:"Zenitsu",
        lastname:"Agatsuma",
        age:15
    },
    {
        firstname:"Inosuke",
        lastname:"Hashibira",
        age:17
    },
    {
        firstname:"Giyuu",
        lastname:"Tomioka",
        age:18
    },

];

function sortBy(field){  
    return function(a,b){  
       if(a[field] > b[field])  
          return 1;  
       else if(a[field] < b[field])  
          return -1;  
   
       return 0;  
    }  
 }

 defaultObjArray.sort(sortBy("firstname"));
 console.log(defaultObjArray);
