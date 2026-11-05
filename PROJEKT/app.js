
const filters=['new','doing','done'];

let animes = [];
let idCount = 0;

function addAnime(e){
    if(e) e.preventDefault();
    if(idCount>100) return;

    const titleInput=document.forms["Form"]["title"].value.trim();
    const priorityInput=document.forms["Form"]["priority"].value;


    const anime={
        id:idCount,
        title:titleInput,
        priority:priorityInput,
        status:filters[0]
    };

    animes.push(anime);

    console.log(animes);
    /*
    SELECT + OPTIONS
        let select = document.createElement("select");
        select.setAttribute("type", "text");
        select.setAttribute("name", "typ");
        select.setAttribute("id", "typ"+aktualneId);
        let option1 = document.createElement("option");
        option1.setAttribute("value", "rec");
        option1.innerHTML = "Allel recesywny";
        select.appendChild(option1);
        let option2 = document.createElement("option");
        option2.setAttribute("value", "dom");
        option2.innerHTML = "Allel dominujący";
        select.appendChild(option2);
        let p5 = document.createElement("p");
        p5.setAttribute("id", "t"+aktualneId);
        p5.setAttribute("class", "hidden");

    PRZYPISANIE DO ELEMENTU
        cell5.appendChild(select);
    */

    console.log(animes[idCount].id);
    console.log(animes[idCount].title);
    console.log(animes[idCount].priority);
    console.log(animes[idCount].status);

    idCount++;
    
}

function filter() {
    const filterSelect = document.getElementById("filterId");
    const listItems = document.querySelectorAll("#listId li");
    listItems.forEach(item => {
        const itemSelect = item.querySelector("select");
        switch (filterSelect.value) {
            case "all":
                item.classList.remove("hidden");
                break;

            case "new":
                if(itemSelect.value != "new") {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
                break;

            case "doing":
                if(itemSelect.value != "doing") {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
                break;

            case "done":
                if(itemSelect.value != "done") {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
                break;
        
            default:
                break;
        }
    });
}