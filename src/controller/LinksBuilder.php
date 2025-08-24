<?php
include_once("../models/Link.php");
class LinksBuilder
{
    private $conn;
    public function __construct($conn)
    {
       $this->conn = $conn; 
    }
    public function getLinks(){
        $sql = "SELECT * FROM link";
        $result = $this->conn->query($sql);

        $links = [];
        while ($row = $result->fetch_assoc()) {
            $link = new Link($row["LinkID"], $row["name"], $row["url"]);

            $sql1 = "SELECT tag.name 
                    FROM tag 
                    JOIN linktag ON tag.TagID = linktag.TagID
                    WHERE linktag.LinkID = $link->id;
                    ";

            $result1 = $this->conn->query($sql1);

            foreach ($result1 as $row1) {
                $link->tags[] = $row1["name"];
            }

            $links[] = $link;
        }

        return $links;
    }
    public function getLink(int $id){
        $sql = "SELECT * FROM link WHERE link.LinkID = $id";

        $result = $this->conn->query($sql);
        $result1 = $this->conn->query($sql);

        $links = [];
        while ($row = $result->fetch_assoc()) {
            $link = new Link($row["LinkID"], $row["name"], $row["url"]);

            $sql1 = "SELECT tag.name 
                    FROM tag 
                    JOIN linktag ON tag.TagID = linktag.TagID
                    WHERE linktag.LinkID = $link->id;
                    ";

            $result1 = $this->conn->query($sql1);

            foreach ($result1 as $row1) {
                $link->tags[] = $row1["name"];
            }

            return $link;
        }
    }
}
?>