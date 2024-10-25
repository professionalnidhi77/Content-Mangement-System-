const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageview = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageview.style.backgroundImage = `url(${imgLink})`;
    imageview.textContent = "";
    imageview.style.border = 0;


}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();

});
dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});