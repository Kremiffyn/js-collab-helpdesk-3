
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