const fname = document.getElementById("fname");    
const lname = document.getElementById("lname");    
const address = document.getElementById("address");    
const gender = document.registration;   
const email = document.getElementById("email)";    
const mobile = document.getElementById("mobile");
const adhaar = document.getElementById("adhaar");

function formValidation() {
        
 if (fname.value.length < 2 || fname.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    fname.focus();
    return false;
  }    

 if (lname.value.length < 2 || lname.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    lname.focus();
    return false;
            } 
   
            if (address.value.length 2 || lname.value.length > 100) {
    alert("address length should be more than 2 and less than 101 charaters");
    address.focus();
    return false;
            }   
 
            if (gender.gender.value === "") {
           alert("Please select your gender!");
           return false;
          }   
               
            if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;   
            }    
            if (!mobile.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
                 mobile.focus();    
                return false;    
            }
            if (adhaar.value.length <= 0) {    
                alert("Adhaar number is required");    
                adhaar.focus();    
                return false;
            }
        return true;
}
