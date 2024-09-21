document.querySelectorAll('.truthlie-container button').forEach(button => {
    button.addEventListener('click', () => {
        // parent container
        const container = button.closest('.truthlie-container');
        const buttons = container.querySelectorAll('button');
        var activeButtons = 0;
        var truths = 0;

        // check if all buttons are in active state
        buttons.forEach(btn => {
            if (btn.classList.contains('active')) {
                activeButtons += 1;
                if (btn.classList.contains('truth')) {
                    truths += 1;
                }
            }
        });
        
        if (activeButtons == 3){
            buttons.forEach(btn => {
                toggleButton(btn, false);
            });
            return;
        }

        if (button.classList.contains('lie')) {
            buttons.forEach(btn => {
                toggleButton(btn, true);
            });
        }
        else if (truths == 1){
            buttons.forEach(btn => {
                toggleButton(btn, true);
            });
        }
        else {
            toggleButton(button, true);
        }
    });
});

function toggleButton(btn, makeActive) {
    if (makeActive) {
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
    else {
        btn.style.borderColor = "";
        btn.style.backgroundColor = "";
        btn.style.textShadow = "";
        btn.classList.remove('active');
    }
}