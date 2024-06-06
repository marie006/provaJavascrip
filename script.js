
//Exercício 1
let nome = document.getElementById("user")
let mensagem = document.getElementById("ola")

function msg()
{
    mensagem.innerHTML = "Olá," + nome.value + " tudo bem?" 
}

//Exercício 2
let c = document.getElementById("cm");
let m = document.getElementById("metros");
let p = document.getElementById("metro")

function conversor()
{
    if (c.value < 100)
        {
            p.innerHTML = c.value /100 + " em metros"
        }
}

//Exercício 3
let n = document.getElementById("numero");
let f = document.getElementById("find");
let i = document.getElementById("informe");


function descubra()
{
    i.innerHTML = n.value - 1;
}

//Exercício 4
let numero1 = document.getElementById("n1");
let numero2 =  document.getElementById("n2");
let pp = document.getElementById("maiorn")

function maior ()
{
    if (numero1.value > numero2.value)
        {
          pp.innerHTML = numero1.value + " é o maior número"
        }

        else
        {
            pp.innerHTML = numero2.value + " é o maior número"
        }
}   
// Exercício 5
let s = document.getElementById("salario");
let rise = document.getElementById("aumento");
let ppp = document.getElementById("rico")

function aumente()
{
    if (s.value > 1250)
        {
            ppp.innerHTML = (s.value * ( 10 / 100)) + parseInt(s.value);
            
        }
        else
        {
            ppp.innerHTML = (s.value * ( 15 / 100)) + parseInt(s.value);
        }
 }
//Exercício 6
var d = 0

while ( d <= 100)
    {
        console.log (d)
        d = d + 1;
    }

//Exercício 7
let g = 0

while (g <= 50)
    {
        console.log(g)
        g = g + 5;
    }

//Exercício 8 
let h = 100

while (h >= 0)
    {
        console.log (h)
        h = h - 10;
    }