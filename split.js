const string = "Hello world"
console.log ("The given string = " + string)
var a
const arro1=string.split('')
//console.log (arro1)
a = string.length
let arro2=""
console.log("Length of the String "+ a)
for(i=a;i>=0;i--)    
    {
     arro2 += string.charAt(i)    
    }
    console.log("Reversed string= " + arro2)

function pallindrome (string)
{
    if(string===arro2)
    {
        console.log ("The given string is Pallindrome")
    }
    else
    console.log ("The given string is not Pallindrome")
}

pallindrome(arro2)