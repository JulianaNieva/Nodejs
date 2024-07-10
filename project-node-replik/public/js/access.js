document.addEventListener('DOMContentLoaded', function() {
    let loginEmail = document.getElementById('email-login');
    let loginPass = document.getElementById('password-login');
    let loginButton = document.getElementById('button-login');
    
    let registerName = document.getElementById('name-register')
    let registerEmail = document.getElementById('email-register')
    let registerPass = document.getElementById('password-register')
    let registerButton = document.getElementById('button-register')

    function checkLogin() {
      if (loginEmail.value.trim() !== "" && loginPass.value.trim() !== "") {
        loginButton.classList.remove('button-inactive');
        loginButton.classList.add('button');
      } else {
        loginButton.classList.remove('button');
        loginButton.classList.add('button-inactive');
      }
    }

    function checkRegister() {
      if (registerEmail.value.trim() !== "" && registerName.value.trim() !== "" && registerPass.value.trim() !== "") {
        registerButton.classList.remove('button-inactive');
        registerButton.classList.add('button');
      } else {
        registerButton.classList.remove('button');
        registerButton.classList.add('button-inactive');
      }
    }

      // Check inputs on page load
    checkLogin();
    checkRegister();    
    // Check Login inputs on input change
    loginEmail.addEventListener('input', checkLogin);
    loginPass.addEventListener('input', checkLogin);
    // Check Register inputs on input change
    registerName.addEventListener('input', checkRegister);
    registerEmail.addEventListener('input', checkRegister);
    registerPass.addEventListener('input', checkRegister);
});