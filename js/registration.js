function registAccount() {
    var userName = document.getElementById('Username').value;
    var fullName = document.getElementById('Full-Name').value;
    var email = document.getElementById('Email').value;
    var pass = document.getElementById('Password').value;
    var address = document.getElementById('Address').value;
    var min = 0;
   
  
    if(userName === "") {
      document.getElementById('username-null').innerHTML = "This must be filled!";
    } else if(userName.length <= 5) {
      document.getElementById('username-null').innerHTML = "Username must be more than 5 characters!";
    } else {
      min++;
      document.getElementById('username-null').innerHTML = "";
    }
  
    if(email === "") {
      document.getElementById('email-null').innerHTML = "This must be filled!";
    } 
    if(email.includes('@') || email.includes('.com')) {
      min++;
      document.getElementById('email-null').innerHTML = "";
    } else {
      document.getElementById('email-null').innerHTML = "Invalid email format!";
    } 
  
    if(pass === "") {
      document.getElementById('pass-null').innerHTML = "This must be filled!";
    } else {
      min++;
      document.getElementById('pass-null').innerHTML = "";
    }
  
    if(fullName === "NULL") {
      document.getElementById('name-null').innerHTML = "Please input your name!";
    } else {
      min++;
      document.getElementById('name-null').innerHTML = "";
    }
  
    if(Address === "") {
      document.getElementById('dob-null').innerHTML = "This must be filled!";
    } else {
      min++;
      document.getElementById("dob-null").innerHTML = "";
    }
    if(min === 5) {
      let ask = confirm("Create Account?");
      if(ask) {
        document.getElementById('regist-form').reset();
        alert("Thank you for signing up!");
      } else {
        alert("Account not created!");
      }
    }
  }