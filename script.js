var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display-screen-content');

var operand1=0;
var operand2=null;
var operator=null;
var flag=0;

function isOperator(value)
{
    return value=="+" || value=="-" || value=="*" || value=="/" ;
}

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){

        var value=this.getAttribute('data-value');
        var text=display.innerText.trim();

        if(isOperator(value))
        {
            operator = value;
            operand1 = parseFloat(text);
            display.innerText = value;
            flag=1;
        }
        else if(value == 'ac')
        {
            display.innerText="";
        }
        else if(value== ".")
        {
            if(text.length && !text.includes('.'))
            {
                display.innerText=text + '.';
            }
        }
        else if(value == "sign")
        {
            if(operator==null)
            {
                operand1=parseFloat(text);
                operand1=-1*operand1;
                display.innerText=operand1;
            }
            else
            {
                operand2=parseFloat(text);
                operand2=-1*operand2;
                display.innerText=operand2;
            }
        }
        else if(value== "%")//make sure percentage should be given at operand1
        {
            if(operator==null)
            {
                operand1 = parseFloat(text);
                operand1 = operand1 / 100;
                display.textContent = operand1;
            }
            else
            {
                operand2=parseFloat(text);
                operand2=operand2 / 100;
                display.innerText = operand2;
            }
        }
        else if(value == "=")
        {
            operand2=parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if(result)
            {
                display.innerText=result;
                operand1=result;
                operand2=null;
                operator=null;
            }
        }
        else
        {   
            if(flag==0)
            {
                display.innerText += value;
            }
            else
            {
                display.innerText="";
                display.innerText += value;
                flag=0;
            }
        }
    });
}