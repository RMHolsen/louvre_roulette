export function fetchGallery(action) {
    
    let url = `http://localhost:3000/galleries/${gallery.id}`

    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}