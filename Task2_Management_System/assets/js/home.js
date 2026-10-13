// Show the success popup once after entering from login/register.
if (sessionStorage.getItem('demoLoginNotice') === '1') {
  sessionStorage.removeItem('demoLoginNotice');
  window.addEventListener('load', () => window.alert('Login successful!'));
}
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('demoLoginNotice');
    window.location.href = 'login.html';
  });
}

// Populate the Bootstrap Course Details modal with the chosen course.
const courseDetails = {"HTML": "HTML stands for HyperText Markup Language. It is used to structure web pages with headings, paragraphs, images, links, and other content.", "CSS": "CSS stands for Cascading Style Sheets. It controls the appearance of web pages, including colors, fonts, spacing, and layouts.", "Bootstrap": "Bootstrap is a popular CSS framework for building responsive, mobile-friendly websites with ready-made components and a grid system.", "JavaScript": "JavaScript is a programming language that makes web pages interactive, including click events, form validation, and dynamic content."};
document.getElementById('courseModal')?.addEventListener('show.bs.modal', (event) => {
  const course = event.relatedTarget?.dataset.course;
  document.getElementById('courseName').textContent = course || '';
  document.getElementById('courseDescription').textContent = courseDetails[course] || '';
});
