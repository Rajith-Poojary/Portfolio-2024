// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
    '.header__main-ham-menu-close'
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
    // ... (rest of your mobile menu code)

    // Add code to handle contact button click
    const contactButton = document.querySelector('.contact__btn');
    contactButton.addEventListener('click', () => {
        // Extract form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send form data to server-side script (replace 'your-server-script.php' with your actual script)
        fetch('your-server-script.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${name}&email=${email}&message=${message}`
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from server
            if (data.success) {
                // Show success message or perform other actions
                alert('Message sent successfully!');
            } else {
                // Show error message or handle other errors
                alert('Error sending message: ' + data.error);
            }
        })
        .catch(error => {
            // Handle network errors
            alert('Network error: ' + error);
        });
    });
});

// ... (rest of your code)