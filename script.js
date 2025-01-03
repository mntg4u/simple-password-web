
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username);
  console.log('Password:', password);

  if (username === 'admin' && password === '19999') {
    document.body.innerHTML = '<h1>Login successful!</h1><p><a href="https://t.me/mnbots" target="_blank">Click here to access your link</a></p>';
    document.body.style.textAlign = 'center';
    document.body.style.color = '#ffffff';
  } else {
    alert('Invalid username or password!');
    loginForm.style.animation = "shake 0.5s"; // Add shake animation
    setTimeout(() => loginForm.style.animation = "", 500); // Reset animation
  }
});

// Add Shake Animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
`, styleSheet.cssRules.length);
