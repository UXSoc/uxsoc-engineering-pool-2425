document.querySelectorAll('.truthlie-container button').forEach(button => {
    button.addEventListener('click', () => {
        // parent container
        const container = button.closest('.truthlie-container');
        const buttons = container.querySelectorAll('button');

        buttons.forEach(btn => {
            if (btn.classList.contains('active')) {
                // revert to normal state
                btn.style.borderColor = "";
                btn.style.backgroundColor = "";
                btn.style.textShadow = "";
                btn.classList.remove('active');
            } else {
                if (btn.classList.contains('truth')) {
                    btn.style.borderColor = "#fff";
                    btn.style.backgroundColor = "#4CAF50";
                    btn.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
                } 
                else if (btn.classList.contains('lie')) {
                    btn.style.borderColor = "#fff";
                    btn.style.backgroundColor = "#E53935";
                    btn.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
                }
                btn.classList.add('active');
            }
        });
    });
});