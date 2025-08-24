<?php
$pageConfig = ['title' => 'Tags'];
?>

<?php require_once './components/header.php'; ?>
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

$sql = "SELECT * FROM tag";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    echo "<input id='search' placeholder='search by name'></input>";
    while ($row = mysqli_fetch_assoc($result)) {
        $id = $row["TagID"];
        $name = $row["name"];

        echo "<div><h1><a href='folder.php?id=$id'>$name</a></h1></div>";

    }
}

$conn->close();
?>
<script src="./scripts/search.js"></script>
<?php require_once './components/footer.php'; ?>