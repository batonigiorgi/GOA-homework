document.addEventListener('DOMContentLoaded', () => {
    if (!Auth.isAuthenticated() && window.location.pathname !== '/login.html' && window.location.pathname !== '/register.html') {
        window.location.href = 'login.html';
    }
});
