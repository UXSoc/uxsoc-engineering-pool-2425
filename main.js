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

    // if lie or if 2 truths are active, reveal all buttons
    if (button.classList.contains('lie') || (truths == 1 && !button.classList.contains('active'))) {
      buttons.forEach(btn => {
        toggleButton(btn, true);
      });
    }
    // else, activate selected button
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
      btn.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.7)";
    }
    else if (btn.classList.contains('lie')) {
      btn.style.borderColor = "#fff";
      btn.style.backgroundColor = "#E53935";
      btn.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.7)";
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