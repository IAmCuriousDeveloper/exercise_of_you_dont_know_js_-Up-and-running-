//Motivation -> Code is not for the computers its for us actually,for our team-mates or ourself after a 6 month or year. we have to understand it just by the glance thats the main moto....lets start


//S T A T E M E N T

a = b * 2; //statement it should end with semi-colon there are some cases where we dont want to end statement with semi colon.we will see that later

//what is here a ,b and 2 

// her a and b are a variable or placeholder for the actual value(it can be anything) and 2 is a literal(numeric value).

//evaluation here * is a multiplication symbol and = is an assignmnet operator javascript evaluate the right hand side first and assign it to left hand side ,here whatever value b contains it takes that value do the operation(multiplication) and assign it to variable a.



///=========================================================================
//E X P R E S S I O N

(a = ((b) * (2)));

//Anything between a brackets are called expression above is a liitle wierd but there is no difference in evalutaion. but we can control it with brackets.

a = b * 2 + foo(c * 3);//make a expression with the brackets

//My answer yours can be different its okay

(a = ((b) * (2)) + (foo((c) * (3))));

//operators have their precendence for example a = b * 2 + 4,here what will happen first multiple or + the answer is multiply coz it has a highest priority but we can control by brackets a = b * (2 + 4) like this..

//a = (b * 2) + 4 these brackets are not necessary. computer evaluates the mul first anyway.so now its come to user readability that awful brackets on the above cause trouble in readability.

a = b * 2 + foo(c * 3);//what will evaluate first
//b+2 first and then function foo.

a = b + 2 * foo(c * 3);//notice i have change the operators here foo will do his part first and the multiply with 2 and further add to b.


//Do javascript is an interpreter language?
//well its not fully correct javascript do execution line by line by it takes a whole program in compliled manner.


//see this example
a = 2;
2();
//is it correct ? answer is NO...it throws an error since we cannot name a function with numerical value
//so if the language is interpreter one that would not be error.
//javascript is more a compiled language.


//valuable tips about comments
/*• Code without comments is suboptimal.
• Too many comments (one per line, for example) is probably a
sign of poorly written code.
• Comments should explain why, not what. They can optionally
explain how if what’s written is particularly confusing.*/


//==========================================================================
//B L O C K S

// group a series of statements together, which we often call a block

{
    amount = amount * 2;
    console.log( amount ); // 199.98
}
//the above is a block
//block is usually attached to the conditionals or functions


//============================================================
//O B J E C T
/*Objects
The object type refers to a compound value where you can set
properties (named locations) that each hold their own values of any
type. This is perhaps one of the most useful value types in all of Java‐
Script:
var obj = {
a: "hello world",
b: 42,
c: true
};
obj.a; // "hello world"
obj.b; // 42
obj.c; // true*/

// NOW CAREFULLY LOOK AT THE EXAMPLE
obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

//Properties can either be accessed with dot notation (i.e., obj.a) or
//bracket notation (i.e., obj["a"]).

/*Bracket notation is useful if you have a property name that has special
characters in it, like obj["hello world!"]—such properties are
often referred to as keys when accessed via bracket notation. The [ ]
notation requires either a variable (explained next) or a string literal
(which needs to be wrapped in " .. " or ' .. ').*/

var obj = {
    a: "hello world",
    b: 42
    };
    var b = "a";
    obj[b]; // "hello world"


    //truthy and falsy 
    //lets see the fasly 
   
/*The specific list of “falsy” values in JavaScript is as follows:
• "" (empty string)
• 0, -0, NaN (invalid number)
• null, undefined
• false*/ //these six are the only falsy values in javascript and the rest are truthy

//coercion example
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false

var a = 41;
var b = "42";
var c = "43";
a < b; // true
b < c; // true
// What happens here? In section 11.8.5 of the ES5 specification, it says
// that if both values in the < comparison are strings, as it is with b <
// c, the comparison is made lexicographically (aka alphabetically like
// a dictionary). But if one or both is not a string, as it is with a < b,
// then both values are coerced to be numbers, and a typical numeric
// comparison occurs.
// Values


var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false
// Wait, how can all three of those comparisons be false? Because the
// b value is being coerced to the “invalid number value” NaN in the <
// and > comparisons, and the specification says that NaN is neither
// greater than nor less than any other value.
// The == comparison fails for a different reason. a == b could fail if
// it’s interpreted either as 42 == NaN or "42" == "foo"—as we
// explained earlier, the former is the case.


// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

var taxRate = 0.05;//in percent
var phonePrice = 10000;
var accessoryPrice = 500;
var spendingThreshold = 140000;
var bankAccountBalance = 500000;

var phoneCount = 0;
var accessoryCount = 0;
var Totalamount = 0;

while(Totalamount<bankAccountBalance){
    Totalamount = Totalamount+phonePrice;
    phoneCount++;
    if(Totalamount<spendingThreshold){
        
       Totalamount = Totalamount+accessoryPrice;
       accessoryCount++;
    }
}

function calTax(Totalamount){
    return   Totalamount + (Totalamount * taxRate); 
}

function format(Totalamount){
    return `you have purchased ${phoneCount} phones and ${accessoryCount} accessories worth Rs ${Totalamount} including Taxes`;
}

console.log('total purchase is :' + calTax(Totalamount) + 'including taxes at 5%');

console.log(format(Totalamount));

//are we afford it ?

if(Totalamount>bankAccountBalance){
    console.log('you are unable to buy these phones');

}else{
    console.log('woo hoo you met the requirements to buy these phones');
}














