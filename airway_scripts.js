let cart = [];

function showAvailableTrips() {
    document.getElementById("trips").style.display = "block";
    const tripList = document.getElementById("tripList");
    tripList.innerHTML = "";

    const selectedOption = document.querySelector('input[name="travelType"]:checked').value;

    // based on the selectedOption, you can fetch and display the available trips for the traveler


    if (selectedOption === "returnLessThan7") {
        tripList.innerHTML = "<li>Trip A</li><li>Trip B</li>";
    } else if (selectedOption === "returnAfter7") {
        tripList.innerHTML = "<li>Trip C</li><li>Trip D</li>";
    } else if (selectedOption === "transitFlight") {
        tripList.innerHTML = "<li>Trip E</li><li>Trip F</li>";
    } else if (selectedOption === "directFlight") {
        tripList.innerHTML = "<li>Trip G</li><li>Trip H</li>";
    } else if (selectedOption === "multipleDestinations") {
        tripList.innerHTML = "<li>Trip I</li><li>Trip J</li>";
    } else if (selectedOption === "customPlan") {
        tripList.innerHTML = "<li>id = governoratesList</li>"
    }
}

function addTrip() {
    const tripList = document.getElementById("tripList");
    const selectedTrip = tripList.querySelector('li:checked').textContent;
    cart.push(selectedTrip);

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
    const cartList = document.getElementById("cartList");
    const selectedTrip = cartList.querySelector('li:checked').textContent;
}
const governorates = [
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Cairo",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Matrouh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez"
];

const governoratesList = document.getElementById("governoratesList");
governorates.forEach(function (governorate) {
    const listItem = document.createElement("li");
    listItem.textContent = governorate;
    governoratesList.appendChild(listItem);
});
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
    function redirectToHome(page) {
      window.location.href = page;}

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
