//Set Date Ranges
// Use Javascript
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
var yyyf = today.getFullYear()+1;
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

var maxDay = yyyf+'-'+mm+'-'+dd;
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("reserveDate").setAttribute("min", today);
document.getElementById("reserveDate").setAttribute("max", maxDay);

//contact-us validate user input.
function validateForm() {
  var name = document.getElementById("name").value;  
  var contactNumber = document.getElementById("contactNumber").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var letters = /^[A-Za-z]+$/;  
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phno_val = /^\d{11,12}$/;

  if(name==''||contactNumber==''||email==''||message==''){  
      alert("Enter each details correctly");
      return false;  
  }  
  else if(!letters.test(name)){  
      alert('Name is incorrect must contain alphabets only'); 
      return false;  
  } 
  else if (!phno_val.test(contactNumber)){  
      alert('Invalid phone number please enter valid phone number:+60123456789'); 
      return false;  
  }   
  else if (!email_val.test(email)){  
      alert('Invalid email format please enter valid email'); 
      return false;  
  }  
  else if (document.getElementById("privacyPolicy").checked==false){  
      alert('You must agree to the Privacy Policy first.'); 
      return false;  
  }
  else {
      alert('Submit successful');
      return true;
  }   
}
//booking validate user input.
function validateBookForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;   
  var contactNumber = document.getElementById("contactNumber").value;
  var email = document.getElementById("email").value;

  var letters = /^[A-Za-z]+$/;  
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phno_val = /^\d{11,12}$/;

  if(fname==''||lname==''||contactNumber==''||email==''){  
      alert("Enter each details correctly");
      return false;  
  }  
  else if(!letters.test(fname)){  
      alert('First Name is incorrect must contain alphabets only'); 
      return false;  
  }
  else if(!letters.test(lname)){  
    alert('Last Name is incorrect must contain alphabets only'); 
    return false;  
}  
  else if (!phno_val.test(contactNumber)){  
      alert('Invalid phone number please enter valid phone number:60123456789'); 
      return false;  
  }   
  else if (!email_val.test(email)){  
      alert('Invalid email format please enter valid email'); 
      return false;  
  }
  else if (document.getElementById("privacyPolicy").checked==false){  
      alert('You must agree to the Privacy Policy first.'); 
      return false;  
  }
  else {
      alert('Submit successful. We will contact you soon to confirm your booking with us!');
      return true;
  }   
}
