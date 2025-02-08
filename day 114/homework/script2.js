class Secret {
    constructor() {
        this._password = "";
    }

    set password(value) {
        this._password = value.split("").reverse().join(""); 
    }

    get password() {
        return "*****";
    }

    get decryptedPassword() {
        return this._password.split("").reverse().join(""); 
    }
}

const secret = new Secret();
secret.password = "mypass123";
console.log(secret.password); 
console.log(secret.decryptedPassword); 
