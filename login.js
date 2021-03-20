function addUserName() {
    const userName = localStorage.fname;
    if (userName !== undefined) {
        document.getElementById("message").innerHTML =
            userName + ", see all our best selling popular products!";
    }
}

function addUserNameToLogin() {
    const userName = localStorage.fname;
    if (userName !== undefined) {
        document.getElementById("messageLogin").innerHTML =
            "Welcome " + userName + " - you are already logged in";
    }
}

function addUserNameToBasket() {
    const userName = localStorage.fname;
    if (userName !== undefined) {
        document.getElementById("messageLogin").innerHTML =
        userName + ", here you see the content of your basket. When you have found all the products you wish to purchase, then go to 'Checkout'.";
    }
}

function store() {
    let inputFname = document.getElementById("fname");
    localStorage.setItem("fname", inputFname.value);
    let inputLname = document.getElementById("lname");
    localStorage.setItem("lname", inputLname.value);
}

function deleteStore() {
    localStorage.setItem("fname", "");
    localStorage.setItem("lname", "");
}