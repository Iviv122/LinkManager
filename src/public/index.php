<?php
$pageConfig = ['title' => 'Home'];
?>

<?php require_once './components/header.php'; ?>

<form>
    <input type='text' name='name'>
    <input type='text' name='url'>
    <input list="tags" type="text" id="tagInput" placeholder="Enter tags">
    <datalist id="tags">
        <option value="tag1">
        <option value="tag2">
        <option value="tag3">
    </datalist>

    <input type="submit" value="submit"></input>
    <p>tags:</p>
    <p id="tagList"></p>
</form>

<?php

echo "<input id='search' placeholder='search by name'></input>";

?>
<script src="./scripts/search.js"></script>
<script src="./scripts/tagslist.js"></script>
<script src="./scripts/getLinks.js"></script>
<?php require_once './components/footer.php'; ?>