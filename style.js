function submitForm() {
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var uploadFile = document.getElementById('uploadFile').value;

    if (username === '' || email === '' || state === '' || city === '' || education === '' || skills === '' || experience === '' || uploadFile ==='') {
        document.getElementById('errorMessage').textContent = 'Please fill in all required fields.';
    } else {
        // Code to submit the form data to the server
        alert('Congratulations Submitted successful!');
        document.getElementById('errorMessage').textContent = '';
        document.getElementById('registrationForm').reset();
    }
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}