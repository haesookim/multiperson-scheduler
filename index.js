
let editbtn = document.getElementById("edit-button");
var hsk = document.createTextNode("해수");

function toggle_edit(){
    editbtn.classList.toggle("inactive");   
}

function toggle_status(cell){
    if (editbtn.classList.contains("inactive")){
        return;
    } else {
        cell.classList.toggle("selected-hs");
    }
}