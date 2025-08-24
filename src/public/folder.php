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

if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    echo "<p>Invalid tag ID.</p>";
    require_once './components/footer.php';
    exit;
}

$id = $_GET['id'];

$sql = "SELECT link.*
  FROM link
  JOIN linktag ON link.LinkID = linktag.LinkID
  JOIN tag ON linktag.TagID = tag.TagID
 WHERE tag.TagID = $id";


$result = mysqli_query($conn, $sql);



if (mysqli_num_rows($result) > 0) {
    echo "<input id='search' placeholder='search by name'></input>";
    while ($row = mysqli_fetch_assoc($result)) {

        $name = $row["name"];
        $url = $row["url"];
        echo "<div><h1>".$name." <a href='https://$url'>".$url."</a></h1></div>";

    }
}


$conn->close();
?>
<script src="./scripts/search.js"></script>
<?php require_once './components/footer.php'; ?>