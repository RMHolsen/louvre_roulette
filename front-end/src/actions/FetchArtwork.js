export function fetchArtwork(action) {
    const url = 'http://localhost:3000/'

    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))

}