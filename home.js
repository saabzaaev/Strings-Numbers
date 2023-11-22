// Task-1
let hello = (names)=>
{
    console.log(`Hello ${names}`);
}
console.log(hello("Ehson"));

// Task-2
function space(str)
{
    let text = str.split(" ")
    let l = text.length
    if(l >= 2)
    {
        return true
    }
    else return false
}
console.log(space(" "));

// Task-3
// function multiplication(num)
// {
//     let text = num.split(",")
//     let l = text.length
//     if(l = 1)
//     {
//         return 1
//     }
    
// }
// console.log(multiplication("1,2,3"));

// Task-4
function hijo(num)
{
    let text = num.split("-")
    let l = text.length
    return l
}
console.log(hijo("bi-ut-i"));

// Task-5
function sum(num , text = 1)
{
    if(text == num)
    {
        return num
    }
    return `${text}-${sum(num , text + 1)}`
}
console.log(sum(15));