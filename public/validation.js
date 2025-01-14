document.addEventListener('DOMContentLoaded', () => {
    const mobileInput = document.getElementById('mobile');
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const mobile = mobileInput.value;
        const mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(mobile)) {
            alert('Invalid mobile number format');
            event.preventDefault();
        }
    });
});
