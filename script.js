function validate() {    
            var fname = document.reg_form.fname;    
            var lname = document.reg_form.lname;    
            var address = document.reg_form.address;    
            var gender = document.reg_form.gender;    
            var email = document.reg_form.email;    
            var mobile = document.reg_form.mobile;
            var adhaar = document.reg_form.adhaar;
        
            if (fname.value.length <= 0) {    
                alert("Name is required");    
                fname.focus();    
                return false;    
            }    
            if (lname.value.length <= 0) {    
                alert("Last Name is required");    
                lname.focus();    
                return false;    
            }    
            if (address.value.length <= 0) {    
                alert("Address is required");    
                address.focus();    
                return false;    
            }    
            if (gender.value.length <= 0) {    
                alert("Gender is required");    
                gender.focus();    
                return false;    
            }    
            if (email.value.length <= 0) {    
                alert("Email Id is required");    
                email.focus();    
                return false;    
            }    
            if (mobile.value.length <= 0) {    
                alert("Mobile number is required");    
                mobile.focus();    
                return false;    
            }
            if (adhaar.value.length <= 0) {    
                alert("Adhaar number is required");    
                adhaar.focus();    
                return false;
            }
        
{
    var dob = document.reg_form.dob["ProcessInfo"]["txtDOB"].value;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (dob == null || dob == "" || !pattern.test(dob)) {
        errMessage += "Invalid date of birth\n";
        return false;
    }
    else {
        return true
    }
}    
            }    
            return false;    
        }    
   
