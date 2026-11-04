
const filters=['new','doing','done'];

let animes = [];

function addAnime(){
    const titleInput=document.getElementById('title').value;
    const priorityInput=document.getElementById('priority').value;


    const anime={
        title:titleInput,
        priority:priorityInput,
        status:filters[0]
    };

    animes.push(anime);

    console.log(animes[0].title);
    console.log(animes[0].priority);
    console.log(animes[0].status);
    
}