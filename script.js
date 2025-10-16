javascript
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Function to toggle the theme
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        // Save the user's preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Apply the saved theme when the page loads
    applySavedTheme();
});


---