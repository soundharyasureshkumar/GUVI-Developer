<?php
// Database connection establishment
$con=mysqli_connect("localhost","root","","guvi");

// Check connection
if (mysqli_connect_errno($con)) {
    echo "MySQL database connection failed: " . mysqli_connect_error();
}

//CHECKING SUBMIT BUTTON PRESS or NOT.

if(isset($_POST["submit"]) && $_POST["submit"]!=""){ 
    $name=$_POST["username"];
    $email=$_POST["email"];
   // $phno=$_POST["phno"];
    $password=$_POST["psw"];

//INSERT QUERY
    $sql = "INSERT INTO reg (name,email,password) VALUES ('$name',  '$email','$password')";
    if(mysqli_query($con, $sql)){
            echo "<script>alert('Login successfull');document.location='rediect2.html'</script>";   
        header('Location:redirect.html');
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
    }}


 if(isset($_POST["sub"]) && $_POST["sub"]!=""){ 
    $dob=$_POST["dob"];
    $age=$_POST["age"];
   // $phno=$_POST["phno"];
    $phno=$_POST["phno"];

//INSERT QUERY
    $sql = "INSERT INTO reg (dob,age,phn_no) VALUES ('$dob',  '$age','$phno')";
    if(mysqli_query($con, $sql)){
            echo "<script>alert('Updated Successully');document.location='index.html'</script>";   
       // header('Location:redirect.html');
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
    }}   
        

        


    if(isset($_POST["log"]) && $_POST["log"]!=""){ 
        $email=$_POST["email1"];
        $password=$_POST["psw1"];


        $sql ="SELECT * FROM reg WHERE email='$email' and password='$password'";
        $resu=$con->query($sql);

        if ($resu->num_rows > 0) {
            echo "<script>alert('Login successfull');document.location='rediect2.html'</script>";   
        } else {
            echo "<script>alert('Invalid Credentials !Login again');document.location='redirect.html'</script>";
        }



    }









      $query="select * from reg ";
        $result=$con->query($query);

//fetech all data from json table in associative array format and store in $result variable
        while ($rows=mysqli_fetch_assoc($result)) {
        $array[]=$rows;
        }

//Now encode PHP array in JSON string 
        $json=json_encode($array,true);

//test the json string
        var_dump($json);

//create file if not exists
        $fo=fopen("myjson.json","w");

//write the json string in file
        $fr=fwrite($fo,$json);
/*$query = "SELECT * FROM reg";
$res = mysqli_query($query,$con) or die("Query Not Executed " . mysql_error($con));
 //Step No. 3: Putting the fetched data in Arrays 
 $data_array = array(); 
 while($rows =mysqli_fetch_assoc($res)) 
 { 
 $data_array[] = $rows; 
 } //Step No. 4 and 5: Encoding Array into JSON + Writing data to JSON file 
 $fp = fopen('studRecords.json', 'w'); 
 fwrite($fp, json_encode($data_array)); 
 if(!fwrite($fp, json_encode($data_array))) 
    { 
        die('Error : File Not Opened. ' . mysql_error()); 
    }
     else
    { 
        echo "Data Retrieved Successully!!!"; 
    } fclose($fp);*/



        $con->close();
        ?> 