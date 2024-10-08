let dataBase = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if (password.length < 8) {
        alert('Password is too short');
    } else {
        let user = {
            name: name,
            email: email,
            password: password,
            gender: gender
        };

        dataBase.push(user);

        console.log(dataBase);

        document.getElementById('registrationForm').reset();
    }
});
