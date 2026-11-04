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