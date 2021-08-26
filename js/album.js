function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data));

}
loadAlbum()

function displayAlbum(albums) {
    console.log(albums)
    const albumContainer = document.getElementById('albums');
    for (const album of albums) {
        const paragraph = document.createElement('p');
        paragraph.style.textAlign = 'center';
        paragraph.innerText = album.title;
        albumContainer.appendChild(paragraph);
    }
}