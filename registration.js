document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const dob = document.getElementById('dob');
    const phoneNumber = document.getElementById('phone-number');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Validate first name
      if (!firstName.value.match(/^[a-zA-Z]+$/)) {
        alert('First name should only contain letters');
        return;
      }
  
      // Validate last name
      if (!lastName.value.match(/^[a-zA-Z]+$/)) {
        alert('Last name should only contain letters');
        return;
      }
  
      // Validate email
      if (!email.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        alert('Please enter a valid email address');
        return;
      }
  
      // Validate password
      if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
        alert('Password should be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return;
      }
  
      // Validate confirm password
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
      }
  
      // Validate date of birth
      if (!dob.value.match(/^\d{2}-\d{2}-\d{4}$/)) {
        alert('Please enter a valid date of birth in the format YYYY-MM-DD');
        return;
      }
  
      // Validate phone number
      if (!phoneNumber.value.match(/^\d{10}$/)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
  
      // If all validations pass, submit the form
      form.register();
    });
  });