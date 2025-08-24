<?php
include '../db/db.php';
include '../controller/LinksBuilder.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);
switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $LinksBuilder = new LinksBuilder($conn);

            $link = $LinksBuilder->getLink($id);

            echo json_encode($link);
        } else {

            $LinksBuilder = new LinksBuilder($conn);

            $links = $LinksBuilder->getLinks();

            echo json_encode($links);
        }
        break;
}
