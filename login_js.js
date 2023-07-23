// Login button event listener
document.querySelector(".login button").addEventListener("click", function() {
    // Add your login logic here
    console.log("Login button clicked");
  });
  
  // Navigation links event listener
  document.querySelectorAll("nav ul li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var target = this.getAttribute("href");
      // Add your navigation logic here
      console.log("Navigation link clicked: " + target);
    });
  });
  function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var nationalID = document.getElementById("nationalID").value;
    var profilePicture = document.getElementById("profilePicture").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate required fields
    if (fullName === "" || nationalID === "" || profilePicture === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Validate password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
  
    
  
    // Proceed with form submission
    // You can send the form data to the server or perform any other desired actions
    alert("Registration successful!");
    return true;
  }
  function toggleFormVisibility() {
    var checkbox = document.getElementById("otherTravelers");
    var form = document.getElementById("registrationForm");
  
    if (checkbox.checked) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  function login(event) {
    event.preventDefault();

    // Retrieve the email and password from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform authentication and role-based redirection
    const userRole = authenticateUser(email, password);
    if (userRole) {
      redirectToLandingPage(userRole);
    } else {
      const errorDiv = document.getElementById('error');
      errorDiv.textContent = 'Email or password is incorrect';
    }
  }
  
  function authenticateUser(email, password) {

  }
    // Perform authentication logic here, such as checking against a database
    // Return the user's role if the authentication is successful, otherwise return null
  
    // Example implementation:
    const users = [
      { email: 'traveler@example.com', password: 'password', role: 'traveler' },
      { email: 'qc@example.com', password: 'password', role: 'quality control' },
      { email: 'cs@example.com', password: 'password}
    ];
