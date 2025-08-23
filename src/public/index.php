<?php
    // This has to be placed BEFORE including the other files
    $pageConfig = ['title' => 'Home' ];
?>

<?php require_once './components/header.php'; ?>
<?php

    include_once("../models/Link.php");
    include_once("../controllers/LinksBuilder.php");

    $servername = "db";
    $username = "root";
    $password = "example";
    $dbname = "LinkManager";
    $port = 3306;

    $conn = mysqli_connect($servername, $username, $password, $dbname, $port);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "<input id='search' placeholder='search by name'></input>";

    $LinksBuilder = new LinksBuilder($conn);

    $links = $LinksBuilder->getLinks();

    foreach ($links as $link) {
        echo "<div>";
        echo "<h1>".$link->name . " </h1><a href='https://$link->url'>" . $link->url ."</a>";

        if ($link->tags) {

            foreach ($link->tags as $tag) {
                echo "<p>".$tag . "</p>";
            }

        }
        echo "</div>";
    }

    $conn->close();
    ?>
<script src="./scripts/search.js"></script>
<?php require_once './components/footer.php'; ?>