let search_bar = document.getElementById("search")


let titles = document.getElementsByTagName("h1")
let blocks = document.getElementsByTagName("div")


for (var i = 0; i < titles.length; i++) {
    console.log(titles[i].innerHTML);
}


function search() {
    let key = search_bar.value
    if (key.trim() == "" || key == null || key.length == 0) {
        for (var i = 0; i < titles.length; i++) {
            blocks[i].hidden = false;
        }
        return;
    }
    console.log(key.trim());

    for (var i = 0; i < titles.length; i++) {

        if (titles[i].innerHTML.includes(key)) {
            blocks[i].hidden = false;
        } else {
            blocks[i].hidden = true;
        }

    }
}

search_bar.addEventListener("input", search)