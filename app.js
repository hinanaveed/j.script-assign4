// Chapter 12 - 13:
//Question 1:

var char = prompt("Enter a character: ")
if(char >=0 || char <= 9)
{
    alert ("input is a number.")
}

else if(char >= 'A' && char <= 'Z')
{
    alert("input is uppercase letter.")
}

else if(char >= 'a' && char <= 'z')
{
    alert("input is lowercase letter.")
}

//Question 2:

var num1 = +prompt("enter 1st number: ")
var num2 = +prompt("enter 2nd number: ")

if(num1>num2)
{alert(num1+" is greater.")}

else if(num2>num1)
{alert(num2+" is greater.")}

else if(num2==num1)
{alert(num2+" and "+num1+" are equal.")}

//Question 3:

var num = +prompt("enter a number: ")
if(num > 0 )
{alert("number is positive. ")}
else if(num < 0)
{
    alert("number is negative.")
}
else if(num == 0)
{
    alert("number is 0.")
}

//Question 4:

var ch = prompt("enter a character: ")
if(ch.length > 1 || ch.length == 0 )
{
    alert("Enter a single character.")
}
else{

    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    {
        alert("TRUE")
    }
    else
    alert("FALSE")
}

//Question 5:

var pass2 = prompt("Enter password: ")
var pass1 = 'pass123'

if( pass2.length == 0 )
{
    alert("please enter password..")
}
else {
    if(pass1 === pass2)
    {
        alert("Correct! The password you entered matches the original password.")
    }
    else{
        alert("Incorrect password..")
    }
}

// Question 6:

var greeting; 
var hour = 13;
if (hour < 18) 
{greeting = "Good day";
alert(greeting)}
else 
{greeting = "Good evening"; 
 alert(greeting)}
 
// Question 7:


var time = +prompt("Enter time in 24 hours format: ")
 
if(time >= 0000 && time <= 1200)
{
    alert("good morning!!")
}
else if(time >= 1200 && time < 1700)
{
    alert("good afternoon!!")
}
else if( time>=1700 && time<=2100)
{
    alert("good evening!!")
}
else if( time > 2100 && time <=2359)
{
    alert("good night!!")
}

