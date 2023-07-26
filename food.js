var imagesArray=["0.jpg","1.jpeg","2.jpg","3.jpeg","4.webp","5.webp","6.jpeg","7.avif","8.webp","9.jpg",
               "10.jpg","11.jpg","12.webp","13.webp","14.jpeg","15.webp"]
var num=0;
function left()
{
    num--;
    if(num<0)
    {
        num=imagesArray.length-1;
            document.getElementById("header1").style.backgroundImage=`url(./${imagesArray[num]})`
        }
        else {
            document.getElementById("header1").style.backgroundImage=`url(./${imagesArray[num]})`
        }
    }
    function right()
    {
        num++;
        if(num>imagesArray.length-1)
        {
            num=0;
            document.getElementById("header1").style.backgroundImage=`url(./${imagesArray[num]})`
        }
        else {
            document.getElementById("header1").style.backgroundImage=`url(./${imagesArray[num]})`
        }
        var a=setTimeout(right,2000)
    }
right()

function user()
{
    var account = document.getElementById("user").value
    console.log(account)
    if(user=="Singup")
    document.getElementById("user").innerHTML="Signup"
}
user()

function welcome1()
{
    window.alert("Welcome to my Restaurant...!!!")
}

function wishlist()
{
    window.alert("Items added in the Wish List...!!!")
}

function cart()
{
    window.alert("Items added in the Cart...!!!")
}

function acc()
{
    window.alert("Jyotshna Yenumula Account")
}

function ordered()
{
    window.confirm("Your order has been placed...!!!")
}

function added()
{
    window.confirm("Item added to Cart...!!!")
}