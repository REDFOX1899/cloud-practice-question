// Simple authentication logic
const user = localStorage.getItem('user');
if (!user) {
    window.location.href = 'index.html';
}

function login(username) {
    localStorage.setItem('user', username);
    window.location.href = 'exam-selection.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
