let screen=document.getElementById("screen");

function clc(value)
{
    screen.value += value;
}

function clrs()
{
    screen.value='';
}

function rslt()
{
    let result=eval(screen.value);
    screen.value=result;
}