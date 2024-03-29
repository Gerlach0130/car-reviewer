const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();
    if (name && email && password && username) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, username }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Signup failed, Please try again -- Be sure to fill out all fields and have a password at least 8 characters in length');
      }
    }
};
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);