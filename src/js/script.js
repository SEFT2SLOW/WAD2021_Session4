let userName = "Anrew";
let userAge = 21;
let userPets = ['Cat', 'Dog','Hamster'];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 6;
let daysSurvived = 0;


//console.log("Text message", variable) allows you to write to the console
console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User Pets", userPets)
console.log("USer Balance", userBalance)
console.log("Every day spending", EVERY_DAY_SPENDING)
console.log("Every day spending per pet", everyDaySpendingPerPet)
console.log("Days survived", daysSurvived)

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
    };
console.log("User have sufficient money for " + daysSurvived + " days");

for (let index = 0; index < 1001; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz")
    }    
    else if (index % 5 == 0){
        console.log("Buzz")
    }
    else if (index % 3 == 0 ){
        console.log("Fizz")
    }
    else{
        console.log(index)
    }
}

console.log("Fibonacci Sequence")
let n1 = 0
let n2 = 1
let next_term

for (let index = 1; index < 101; index++) {
    console.log(n1)
    next_term = n1 + n2
    n1 = n2
    n2 = next_term
}

console.log("Primary numbers")

function isPrime(num){
    if (num === 2){
        return true
    }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0){
                return true
            }
            else if (num === i * i){
                return false
            }else{
                return false
            }
            
        }
    }
    else{
        return false
    }

}
for (let index = 1; index < 201; index++) {
    if(isPrime(index)){
        console.log(index)
    }
    
}