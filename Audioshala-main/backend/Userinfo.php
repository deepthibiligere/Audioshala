<?php

$con = mysqli_connect('localhost:2020','root');
if($con){
	echo "Connection Succesful";
}
else{
	echo "No Connection";
}
mysqli_select_db($con,'userinfo');
$user=$_POST['user'];
$email=$_POST['Email'];
$mobile=$_POST['mobile'];
$comments=$_POST['comments'];
$query = "INSERT INTO 'userinfodata'(User, Email, mobile, Reviews) VALUES ('$user','$email','$mobile','$comments')";
mysqli_query($con,$query);
?>
