document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

function subscribeNewsletter() {
    const email = document.getElementById('subscribe-email').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
}

