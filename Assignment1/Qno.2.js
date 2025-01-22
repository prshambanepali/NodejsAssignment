let a,b,c;
function calc(a,b,c)
{
switch(c)
{
    case '+':
        return a+b
    case '-':
        return a-b
    case '*':
        return a*b
    case '/':
        return a/b;

}
}
x=calc(3,4,'*')
console.log(x)