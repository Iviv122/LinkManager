async function getData() {
    const url = "link.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        result.forEach(element => {
            const tagsHTML = element.tags.map(t => `<p>${t}</p>`).join("");
            const div = document.createElement("div");

            const h1 = document.createElement("h1");
            h1.textContent = element.name;

            const a = document.createElement("a");
            a.href = element.url;
            a.textContent = element.url;

            div.appendChild(h1);
            div.appendChild(a);

            element.tags.forEach(tag => {
                const p = document.createElement("p");
                p.textContent = tag;
                div.appendChild(p);
            });

            document.body.appendChild(div);


        });
    } catch (error) {
        console.error(error.message);
    }
}

getData();