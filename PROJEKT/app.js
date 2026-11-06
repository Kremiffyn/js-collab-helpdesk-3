
const filters=['new','doing','done'];

document.getElementById("title").value="";
document.getElementById("priority").value="low";
document.getElementById("filterId").value="all";

let animes = [];
let idCount = 0;

function changeId(){
    const items=document.querySelectorAll('#listItem');
    for(let item of items){
        const selectItem=item.querySelector("select");
        const animeId = parseInt(item.className);
        const animeObj = animes.find(a => a.id === animeId);
        if (animeObj && selectItem) {
            animeObj.status = selectItem.value;
        }
    }
}

function addAnime(e){
    if(e) e.preventDefault();
    if(idCount>=1000) return;

    const titleInput=document.forms["Form"]["title"].value.trim();
    if(titleInput.length<3 || titleInput.length>80){
        alert("Źle wpisane dane.");
        return;
    }
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

    select.setAttribute("onchange",'changeId()');

    newAnimeItem.textContent=animes[idCount].id + " -  " + animes[idCount].title + " - ";
    const priorityObj=document.createElement("b");
    priorityObj.innerText=animes[idCount].priority + " - "

    newAnimeItem.appendChild(priorityObj);
    newAnimeItem.appendChild(select);

    newAnimeItem.setAttribute("class",animes[idCount].id);
    newAnimeItem.setAttribute("id","listItem");

    listOfAnimeDOM.appendChild(newAnimeItem);

    idCount++;
    
}
function filter(e) {
    if(e) e.preventDefault();
    const listOfAnimeDOM=document.getElementById("listOfItems");
    if(document.getElementById("Nothing")) listOfAnimeDOM.removeChild(document.getElementById("Nothing"));

    const status = document.getElementById("filterId").value;
    const filteredAnimes = animes.filter(anime => {
        return status === "all" || anime.status === status;
    });

    listOfAnimeDOM.innerHTML = "";

    filteredAnimes.forEach(anime => {
        const newAnimeItem = document.createElement("li");

        const select = document.createElement("select");
        select.setAttribute("name", anime.status);
        select.setAttribute("id", anime.status + anime.id);

        filters.forEach(filterStatus => {
            const option = document.createElement("option");
            option.value = filterStatus;
            option.innerText = filterStatus;

            if (anime.status === filterStatus) {
                option.selected = true;
            }

            select.appendChild(option);
        });

        select.setAttribute("onchange", "changeId()");

        newAnimeItem.textContent = anime.id + " - " + anime.title + " - ";

        const priorityObj = document.createElement("b");
        priorityObj.innerText = anime.priority + " - ";

        newAnimeItem.appendChild(priorityObj);
        newAnimeItem.appendChild(select);

        newAnimeItem.setAttribute("class", anime.id);
        newAnimeItem.setAttribute("id", "listItem");

        listOfAnimeDOM.appendChild(newAnimeItem);
    });

    const counterOfItems=document.getElementById("counter");
    let counterOfVisibleItems=document.querySelectorAll("#listOfItems li:not(.hidden)").length;
    counterOfItems.innerText = `Counter visible: ${counterOfVisibleItems}, all: ${animes.length}`;
    if(counterOfVisibleItems==0){
        const nothingItem=document.createElement("li");
        nothingItem.setAttribute("id","Nothing");
        nothingItem.innerText="Nothing to display";
        listOfAnimeDOM.appendChild(nothingItem);
    }
}

const isThereFox = document.getElementById("lis.");
if(!isThereFox || !isThereFox.hasAttribute("src") || isThereFox.getAttribute("src") != "lis.jpeg") document.querySelector("body").innerHTML="<p>Oddawaj lisa >:(</p>";
