javascript:(function(){
    const emailInputs = document.querySelectorAll('input[type="email"], input[name*="email"], input[id*="email"], input[placeholder*="email"], input[placeholder*="Email"], input[placeholder*="E-mail"], input[class*="email"]');
    const email = 'your.email@example.com'; // Replace with your email
    
    if(emailInputs.length > 0) {
        emailInputs[0].value = email;
        emailInputs[0].focus();
        emailInputs[0].dispatchEvent(new Event('input', {bubbles: true}));
        emailInputs[0].dispatchEvent(new Event('change', {bubbles: true}));
        alert('Email filled successfully: ' + email);
    } else {
        alert('No email field found on this page');
    }
})();
