function Show(file) {
    var ShowPhoto = document.getElementById('photo');
    ShowPhoto.src = "assets/" + file;
    var fullName = file.replace("-", " ");
    console.log(fullName);
    var name = fullName.replace(".webp", "")
    console.log(name);
}
function Hide() {
    var ShowPhoto = document.getElementById('photo');
    ShowPhoto.src = "assets/atlanta.webp";
    console.log(photo);
}
