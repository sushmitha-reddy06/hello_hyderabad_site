document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert('Please enter all the required details!');
        return false;
    }

    var userDetails = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    
    // Display the login form
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var loginEmail = document.getElementById('loginEmail').value.trim();
    var loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === "" || loginPassword === "") {
        alert('Please enter both email and password!');
        return false;
    }

    var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (!userDetails) {
        alert('No user registered. Please sign up first.');
        return false;
    }

    if (loginEmail !== userDetails.email || loginPassword !== userDetails.password) {
        alert('Incorrect email or password. Please try again.');
        return false;
    }

    // Successful login
    alert('Login successful!');
 // You can redirect or perform any other action here
});