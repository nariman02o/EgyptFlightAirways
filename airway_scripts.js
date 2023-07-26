let cart = [];

function showAvailableTrips() {
    document.getElementById("trips").style.display = "block";
    const tripList = document.getElementById("tripList");
    tripList.innerHTML = "tripList";

    const selectedOption = document.querySelector('input[name="travelType"]:checked').value;

    // based on the selectedOption,fetch and display the available trips for the traveler


    if (selectedOption === "returnLessThan7") {
      tripList.innerHTML = `
        <li> ><input type="radio" name="option" value="cairo">Cairo </li>
        <li> ><input type="radio" name="option" value="giza">Giza </li>
        <li> ><input type="radio" name="option" value="Alexandria">Alexandria </li>   `;
    } else if (selectedOption === "return7to14") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="Aswan">Aswan </li>  
      <li> ><input type="radio" name="option" value="Luxor">Luxor </li>  
      <li> ><input type="radio" name="option" value="Hurghada">Hurghada </li>   `;
    } else if (selectedOption === "returnMoreThan14") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="Marsa Alam">Marsa Alam </li>  
      <li> ><input type="radio" name="option" value="El Arish">El Arish </li>  
      <li> ><input type="radio" name="option" value="El Gouna">El Gouna </li>  `;
    } else if (selectedOption === "returnAfter7") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="Siwa Oasis ">Siwa Oasis</li>
      <li> ><input type="radio" name="option" value="Ismailia">Ismailia </li>
      `;
    } else if (selectedOption === "transitFlight") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="El Alamain">El Alamain </li>
      <li> ><input type="radio" name="option" value="Port Said">Port Said </li>
      <li> ><input type="radio" name="option" value="El Gouna">El Gouna </li>
      `;
    } else if (selectedOption === "directFlight") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="Assiut">Assiut </li>
      `;
    } else if (selectedOption === "multipleDestinations") {
      tripList.innerHTML = `
      <li> ><input type="radio" name="option" value="El Alamain">El Alamain </li>
      <li> ><input type="radio" name="option" value="El Gouna">El Gouna </li>
      `;
    } else if (selectedOption === "customPlan") {
      tripList.innerHTML = `
        <li id="tripList"></li>`
}
    }

function addTrip() {

  const selectedTrips = [];
  const selectedOption = document.querySelector('input[name="travelType"]:checked').value;

  if (selectedOption === "returnLessThan7" || selectedOption === "return7to14" || selectedOption === "returnMoreThan14") {
    const selectedTrip = document.querySelector('input[name="selectedTrip"]:checked');
    if (selectedTrip) {
      selectedTrips.push(selectedTrip.value);
    }
  } else {
    const selectedTripCheckboxes = document.querySelectorAll('input[name="selectedTrip"]:checked');
    selectedTripCheckboxes.forEach((checkbox) => {
      selectedTrips.push(checkbox.value);
    });
  }

  // Add the selected trips to the cart or perform any other desired action
  cart = cart.concat(selectedTrips);

  console.log("Selected trips:", selectedTrips);
  console.log("Cart:", cart);
    //const tripList = document.getElementById("tripList");
    //const selectedTrip = tripList.querySelector('li:checked').textContent;
    //cart.push(selectedTrip);

    alert("Trip added to cart!");
}

function goToMainMenu() {
    document.getElementById("trips").style.display = "none";
    document.getElementById("cart").style.display = "none";
}

function viewCart() {
  document.getElementById("trips").style.display = "none";
  document.getElementById("cart").style.display = "block";
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = cart[i];
    cartList.appendChild(listItem);
    }
}

function removeItem() {
  selectedTrips = [];
  const selectedOption = document.querySelector('input[name="travelType"]:checked').value;

  if (selectedOption === "returnLessThan7" || selectedOption === "return7to14" || selectedOption === "returnMoreThan14") {
    const selectedTrip = document.querySelector('input[name="selectedTrip"]:checked');
    if (selectedTrip) {
      const removedElement = selectedTrip.parentNode.textContent.trim();
      selectedTrip.parentNode.remove();
      console.log(`Removed trip: ${removedElement}`);
    }
  } else {
    const selectedTripCheckboxes = document.querySelectorAll('input[name="selectedTrip"]:checked');
    if (selectedTripCheckboxes.length > 0) {
      selectedTripCheckboxes.forEach(function (selectedTripCheckbox) {
        const removedElement = selectedTripCheckbox.parentNode.textContent.trim();
        selectedTripCheckbox.parentNode.remove();
        selectedTrips.push(removedElement);
      });
      console.log(`Removed trips: ${selectedTrips.join(", ")}`);
    }
  }  selectedTrips = [];
  selectedOption = document.querySelector('input[name="travelType"]:checked').value;

  if (selectedOption === "returnLessThan7" || selectedOption === "return7to14" || selectedOption === "returnMoreThan14") {
    const selectedTrip = document.querySelector('input[name="selectedTrip"]:checked');
    if (selectedTrip) {
      const removedElement = selectedTrip.parentNode.textContent.trim();
      selectedTrip.parentNode.remove();
      console.log(`Removed trip: ${removedElement}`);
    }
  } else {
    const selectedTripCheckboxes = document.querySelectorAll('input[name="selectedTrip"]:checked');
    if (selectedTripCheckboxes.length > 0) {
      selectedTripCheckboxes.forEach(function (selectedTripCheckbox) {
        const removedElement = selectedTripCheckbox.parentNode.textContent.trim();
        selectedTripCheckbox.parentNode.remove();
        selectedTrips.push(removedElement);
      });
      console.log(`Removed trips: ${selectedTrips.join(", ")}`);
    }
  }
  //  const cartList = document.getElementById("cartList");
   // const selectedTrip = cartList.querySelector('li:checked').textContent;
}

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
      { email: 'cs@example.com', password: 'password', role: 'customer service' }
    ];
    const addItemBtn = document.getElementById("addItemBtn");
    const newItemInput = document.getElementById("newItemInput");
  
    addItemBtn.addEventListener("click", function() {
      const newItem = newItemInput.value;
      cart.push(newItem);
      const listItem = document.createElement("li");
      listItem.textContent = newItem;
      cartList.appendChild(listItem);
      newItemInput.value = "";
    });
          // a function to give access to the quality control department
      function checkAccess(role) {
        if (role === "quality control") {
          // Redirect to quality-control-only page
          window.location.href = "customer_service_page.html";
        } else {
          // Redirect to regular user page
          window.location.href = "orders_page.html";
        }
      }
      
      // Function to handle login form submission
      function handleLogin() {
        const username = document.getElementById("email").value;
        const password = document.getElementById("password").value;
      
        // Perform authentication logic here and set user role
        // For simplicity, we'll assume correct credentials for now
        if (email === "quality control" && password === "password") {
          traveler.role = "quality control";
        } else {
          traveler.role = "traveler";
        }
      
        // Call checkAccess function with user role
        checkAccess(traveler.role);
      }

      // Function to handle form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if login is successful
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    showSearch();
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

// Function to show the search section
function showSearch() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("search").style.display = "block";
}

// Function to handle search button click
document.getElementById("searchBtn").addEventListener("click", function() {
  var itemName = document.getElementById("itemName").value;
  var flight = document.getElementById("flight").value;

  // Perform search logic and display results
  // ...

  // Show the card section
  showCard();
});

// Function to show the card section
function showCard() {
  document.getElementById("search").style.display = "none";
  document.getElementById("card").style.display = "block";
}

// Function to handle order submission
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Display warning message before submitting the order
  var confirmation = confirm("Please review the order with the travelers before submitting. Are you sure you want to proceed?");

  if (confirmation) {
    alert("Order submitted successfully!");
    // Submit the order
    // ...
  } else {
    alert("Order submission cancelled.");
  }
});
