document.getElementById("myButton").addEventListener('click', (e) =>{

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value); 

    const resultDiv = document.getElementById("result")


    if (calculateResult(firstNumber, secondNumber) === true)
    {
        resultDiv.innerHTML = "Condition is met";
    } else {
        resultDiv.innerHTML = "Condition is not met";
    }
});

//create function calculateResult(fn, sn)

calculateResult = (fn, sn) => {
    if (fn == 50 || sn == 50 || (fn + sn == 50)) 
    {
        return true;
    } else {
        return false;
    }
};

