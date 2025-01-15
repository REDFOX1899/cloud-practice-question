// auth.js ss
const user = localStorage.getItem('user');
if (!user && window.location.pathname !== '/index.html') {
    window.location.href = 'index.html';
}

function loginUser(username) {  // Renamed to avoid conflict
    localStorage.setItem('user', username);
    window.location.href = 'exam-selection.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
