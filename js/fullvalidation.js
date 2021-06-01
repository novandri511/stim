function validateForm() {

    var x = document.forms["form_pembayaran"]["fullname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }

    // CHECK EMAIL
    var z = document.forms["form_pembayaran"]["email"].value;
    var mailformat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{3,}$/;
    if (z == null || z == "") {
        alert("Name must be filled out");
        return false;
    } else if (z.match(mailformat)) {
        return validatePassword();
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }




}

function validatePassword() {
    // CHECK PASSWORD
    var y = document.forms["form_pembayaran"]["password"].value;
    var passw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (y == null || y == "") {
        alert("Name must be filled out");
        return false;
    } else if (y.match(passw)) {
        return validateCredit();
    } else {
        alert('Coba Password lain...');
        return false;
    }
}

function validateCredit() {
    // CHECK CREDIT CARD
    var cred = document.forms["form_pembayaran"]["cardnumber"].value;
    if (cred.length < 16 || cred.length >= 17) {
        alert('Please input 16 number');
        return false;
    } else {
        return validateDate();
    }
}

function validateDate() {
    // CHECK DATE
    var d = document.forms["form_pembayaran"]["date"].value;
    var dated = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (d.match(dated)) {
        setTimeout(function() { window.location = "./thankyou.html" });
        return true;
    } else {
        alert('date salah')
        return false;
    }
}