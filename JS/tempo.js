function myTimeoutFunction()
{
    doStuff();
}

myTimeoutFunction();
setInterval(myTimeoutFunction, 1000);