function myvalidate1(){
   if( document.form.email1.value == "" ) {
   swal ( "Oops" ,  "Enter your email-id!" ,  "error" ).then(function(){
      document.form.email1.focus() ;
   }) ;   
   return false;
}
   if( document.form.psw1.value == "" ) {
   swal ( "Oops" ,  "Enter your password!" ,  "error" ).then(function(){
      document.form.psw1.focus() ;
   }) ;   
   return false;
}
return true;

}