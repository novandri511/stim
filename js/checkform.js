function allLetter(inputtxt) {
    var letters = /^[a-z][a-z\s]*$/;
    if (inputtxt.value.match(letters)) {
        alert('Your name have accepted : you can try another');
        setTimeout(function() { window.location = "./thankyou.html" });
        return true;
    } else {
        alert('Please input alphabet characters only');
        setTimeout(function() { window.location = "./payment.html" });
        return false;
    }
}