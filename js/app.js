const dateOfBirth = document.querySelector('#dateOfBirth');
const luckyNumber = document.querySelector('#luckyNumber');
const checkBtn = document.querySelector('.btn')
const outputBox =document.querySelector('#outputBox')
checkBtn.addEventListener('click',()=>{
   
console.log(dateOfBirth.value =="" && luckyNumber.value =="")
if(dateOfBirth.value =="" || luckyNumber.value =="" ){
    
    outputBox.value = "Please select both values"
}
else{
    const dob = dateOfBirth.value.replaceAll('-','')
    const sum = calculateSumOfDigits(dob)
    console.log(sum)
    calculateLuckyBirthday(sum,luckyNumber.value)
}

})


const calculateSumOfDigits = (dob)=>{
    let sumOfDigits=0
    for( let i=0;i<dob.length;i++){
        sumOfDigits = sumOfDigits+ Number(dob.charAt(i))
    }
    return sumOfDigits
}
const calculateLuckyBirthday = (sum,luckyNumber)=>{
    if(sum % luckyNumber === 0){
        console.log('Your Birthday is Lucky')
        outputBox.value = "Your Birthday is Lucky"
    }
    else{
        console.log("Oops! Your Birthday is not lucky ")
        outputBox.value = "Oops! Your Birthday is not lucky "

    }
}