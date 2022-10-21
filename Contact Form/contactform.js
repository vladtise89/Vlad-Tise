const firstBox = document.getElementById('firstname');
const secondBox = document.getElementById('lastname');
const thirdBox = document.getElementById('subject');
const submitBtn = document.getElementById('onsubmit');

//document.getElementById("myDiv").style.border = "thick solid #0000FF";

var form = document.getElementById('myForm')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(firstBox.value);
    console.log(secondBox.value);
    console.log(thirdBox.value);
    let validForm = true;

    if(firstBox.value === "") {
        firstBox.style.borderColor = 'red';
        validForm = false;
    } else {
        firstBox.style.borderColor = '#ccc';
    }
    if(secondBox.value === "") {
        secondBox.style.borderColor = 'red';
        validForm = false;

    } else {
        secondBox.style.borderColor = '#ccc';
    }
    if(thirdBox.value === "") {
        thirdBox.style.borderColor = 'red';
        validForm = false;

    } else {
        thirdBox.style.borderColor = '#ccc';
    }

    if(validForm) {
        document.getElementById('error_firstname_label').innerHTML = firstBox.value;
        document.getElementById('error_message').style.visibility = "visible"
        document.getElementById('error_message').style.opacity = 1

    }

});

firstBox.addEventListener('input', function(event){
    if(firstBox.value) {
        firstBox.style.borderColor = '#ccc';
    }
})

secondBox.addEventListener('input', function(event){
    console.log('something changed in first name input')
    if(secondBox.value) {
        secondBox.style.borderColor = '#ccc';
    }
})

thirdBox.addEventListener('input', function(event){
    console.log('something changed in first name input')
    if(thirdBox.value) {
        thirdBox.style.borderColor = '#ccc';
    }
})

    