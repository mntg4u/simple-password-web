
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username);
  console.log('Password:', password);
  
  if (username === 'admin' && password === '19999') {
    document.write('Login successful! . https://t.me/mnbots this is your link');
  } else {
    alert('Invalid username or password!');
  }
});
