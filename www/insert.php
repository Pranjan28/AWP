<?php
$con =mysqli_connect('localhost:3306','root','Pranjan79');

$name=$_POST('name');
$pass=$_POST('pass');

$sql ="INSERT INTO login (name,pass) VALUES ('$name','$pass')";
?>
