<?php
include_once("../models/Link.php");
class LinksBuilder
{

    private $links = [];
    public function __construct($conn)
    {
        $sql = "SELECT * FROM link";
        $result = $conn->query($sql);


        while ($row = $result->fetch_assoc()) {
            $link = new Link($row["LinkID"], $row["name"], $row["url"]);

            $sql1 = "SELECT tag.name 
                    FROM tag 
                    JOIN linktag ON tag.TagID = linktag.TagID
                    WHERE linktag.LinkID = $link->id;
                    ";

            $result1 = $conn->query($sql1);

            foreach ($result1 as $row1) {
                $link->tags[] = $row1["name"];
            }

            $this->links[] = $link;
        }
    }
    public function getLinks(){
        return $this->links;
    }
}
?>