const logoutFormHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Logout Failed, Please try again.');
    };
  };
  
document
.querySelector('#logout')
.addEventListener('click', logoutFormHandler);
  
let logoutTimer;
const TIMEOUT = 10 * 60 * 1000;
  
function resetTimer() {
clearTimeout(logoutTimer);
logoutTimer = setTimeout(() => {
     logoutFormHandler();
}, TIMEOUT);
}
  
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('scroll', resetTimer);
document.addEventListener('click', resetTimer);
  
resetTimer();