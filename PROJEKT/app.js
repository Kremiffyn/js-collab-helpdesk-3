
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

    const listOfAnimeDOM=document.getElementById("listOfItems");

    if(document.getElementById("Nothing")) listOfAnimeDOM.removeChild(document.getElementById("Nothing"));

    const newAnimeItem=document.createElement("li");

    const select=document.createElement("select");
    select.setAttribute("type", "text");
    select.setAttribute("name", animes[idCount].status);
    select.setAttribute("id", animes[idCount].status+animes[idCount].id);

    let option1 = document.createElement("option");
    option1.setAttribute("value", filters[0]);
    option1.innerHTML = filters[0];
    select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", filters[1]);
    option2.innerHTML = filters[1];
    select.appendChild(option2);

    let option3 = document.createElement("option");
    option3.setAttribute("value", filters[2]);
    option3.innerHTML = filters[2];
    select.appendChild(option3);

    newAnimeItem.textContent=animes[idCount].id + " -  " + animes[idCount].title + " - " + animes[idCount].priority + " - ";
    newAnimeItem.appendChild(select);

    listOfAnimeDOM.appendChild(newAnimeItem);

    idCount++;
    
}

function filter() {
    const filterSelect = document.getElementById("filterId");
    const listItems = document.querySelectorAll("#listOfItems li");
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