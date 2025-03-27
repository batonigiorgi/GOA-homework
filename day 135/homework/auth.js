class Auth {
    static register(username, password) {
        if (localStorage.getItem(username)) {
            alert('მომხმარებელი უკვე არსებობს');
            return false;
        }
        localStorage.setItem(username, JSON.stringify({ password }));
        return true;
    }

    static login(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            localStorage.setItem('loggedInUser', username);
            return true;
        }
        return false;
    }

    static logout() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    }

    static isAuthenticated() {
        return localStorage.getItem('loggedInUser') !== null;
    }
}