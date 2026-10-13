// Static demonstration only. Do NOT use this code for real authentication.
// A production application needs a server, password hashing and secure sessions.
(function () {
  'use strict';
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const toggle = document.getElementById('togglePassword');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function message(id, text) {
    const el = document.getElementById(id);
    el.textContent = text;
    el.classList.remove('d-none');
  }
  if (toggle && passwordInput) {
    toggle.addEventListener('click', () => {
      const visible = passwordInput.type === 'text';
      passwordInput.type = visible ? 'password' : 'text';
      toggle.textContent = visible ? 'Show' : 'Hide';
    });
  }
  if (emailInput && sessionStorage.getItem('demoRememberedEmail')) {
    emailInput.value = sessionStorage.getItem('demoRememberedEmail');
  }
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      if (!emailPattern.test(email)) { message('loginMessage', 'Please enter a valid email address.'); return; }
      if (!password) { message('loginMessage', 'Please enter your password.'); return; }
      if (document.getElementById('remember').checked) sessionStorage.setItem('demoRememberedEmail', email);
      else sessionStorage.removeItem('demoRememberedEmail');
      // Accepts any nonempty password, matching a frontend-only classroom demo.
      sessionStorage.setItem('demoLoginNotice', '1');
      window.location.href = 'home.html';
    });
  }
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!document.getElementById('name').value.trim()) { message('registerMessage', 'Please enter your full name.'); return; }
      if (!emailPattern.test(emailInput.value.trim())) { message('registerMessage', 'Please enter a valid email address.'); return; }
      if (passwordInput.value.length < 6) { message('registerMessage', 'Password must be at least 6 characters.'); return; }
      // No credentials are stored in browser storage.
      sessionStorage.setItem('demoLoginNotice', '1');
      window.location.href = 'home.html';
    });
  }
})();
