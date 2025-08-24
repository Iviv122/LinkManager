<?php

$servername = "db";
$username = "root";
$password = "example";
$dbname = "LinkManager";
$port = 3306;

$conn = mysqli_connect($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>
