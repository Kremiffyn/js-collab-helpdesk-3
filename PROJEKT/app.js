
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