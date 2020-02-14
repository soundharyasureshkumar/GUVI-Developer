function myvalidate() {


if( document.form.username.value == "" ) {
   swal ( "Oops" ,  "Enter your username!" ,  "error" ).then(function(){
      document.form.username.focus();
   });    
   return false;
}
else if(/^[a-zA-Z]+$/.test(form.username.value)){

}
else{
   swal ( "Oops" ,  "Invalid username! Enter username again" ,  "error" ).then(function(){
      document.form.username.focus() ;
   });     
   document.form.username.value="" ;
   return false;   
}
if( document.form.email.value == "" ) {
   swal ( "Oops" ,  "Enter your email-id!" ,  "error" ).then(function(){
      document.form.email.focus() ;
   }) ;   
   return false;
}
else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){

}
else{
   swal ( "Oops" ,  "Invalid email-id! Enter email-id again" ,  "error" ).then(function(){
      document.form.email.focus() ;
   });     
   document.form.email.value="" ;
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
if( document.form.psw.value == "" ) {
   swal ( "Oops" ,  "Enter your Password!" ,  "error" ).then(function(){
      document.form.psw.focus() ;
   })  ;  
   return false;
}
else if(/^[A-Za-z]\w{7,14}$/.test(form.psw.value)){

}
else{
   swal ( "Oops" ,  "Please enter a password which contain atleast 7 or atmost 16 characters which should include only characters, numeric digits, underscore and first character must be a letter" ,  "error" ).then(function(){
      document.form.psw.focus() ;
   });     
   document.form.psw.value="" ;
   return false;   
}      
if( document.form.cpsw.value == "" ) {
   swal ( "Oops" ,  "Confirm your Password!" ,  "error" ).then(function(){
      document.form.cpsw.focus() ;
   })  ;  
   return false;
}
else if(document.form.psw.value != document.form.cpsw.value){
   swal ("Oops","Passwords didn't match :( Try again ","error").then(function(){
      document.form.cpsw.focus();
   });
   document.form.cpsw.value="";
   return false;
}


return true;
}


