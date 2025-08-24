const tagInput = document.getElementById('tagInput');
const tagList = document.getElementById('tagList');
let tags = [];

tagInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const tag = tagInput.value.trim();
        if (tag && !tags.includes(tag)) {
            tags.push(tag);
            updateTags();
            tagInput.value = '';
        }
    }
});

function updateTags() {
    tagList.innerHTML = tags.map(t => t).join(" ");

    let list = tagList.getElementsByTagName("span");

    let finalList = []
    for (let index = 0; index < list.length; index++) {
        finalList.push(list[index].innerHTML)
    }
    console.log(finalList);
}