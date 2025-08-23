<?php
    class Link{
        public $id;
        public $name;
        public $url;
        public $tags = [];
        public function __construct($id,$name, $url){
            $this->id = $id;
            $this->name = $name;
            $this->url = $url;
        }
    }
?>