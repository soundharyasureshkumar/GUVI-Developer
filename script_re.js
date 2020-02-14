function myvalidate() {


if( document.form.dob.value == "" ) {
   swal ( "Oops" ,  "Enter your Date of Birth!" ,  "error" ).then(function(){
      document.form.dob.focus();
   });    
   return false;
}
else if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(form.dob.value)){

}
else{
   swal ( "Oops" ,  "Invalid Date of Birth! Enter Date of Birth again" ,  "error" ).then(function(){
      document.form.dob.focus() ;
   });     
   document.form.dob.value="" ;
   return false;   
}
if( document.form.age.value == "" ) {
   swal ( "Oops" ,  "Enter your age!" ,  "error" ).then(function(){
      document.form.age.focus() ;
   }) ;   
   return false;
}
else if(/^[1-9][0-9]?$/.test(form.age.value)){

}
else{
   swal ( "Oops" ,  "Invalid age! Enter age again" ,  "error" ).then(function(){
      document.form.age.focus() ;
   });     
   document.form.age.value="" ;
   return false;   
}
if( document.form.phno.value == "" ) {
   swal ( "Oops" ,  "Enter your Phone Number!" ,  "error" ).then(function(){
      document.form.phno.focus() ;
   }) ;   
   return false;
}
else if(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(form.phno.value)){

}
else{
   swal ( "Oops" ,  "Invalid phone number! Enter phone number again" ,  "error" ).then(function(){
      document.form.phno.focus() ;
   });     
   document.form.phno.value="" ;
   return false;   
}



return true;
}


