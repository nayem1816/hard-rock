const clickSearchBtn = clickBtn => {
    const searchSong = document.getElementById('search-song').value;

    fetch(`https://api.lyrics.ovh/suggest/${searchSong}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const allSong = data.data
            let html =''
            allSong.forEach(element => {
                const songList = document.getElementById('song-list');
                const songName = element.title;
                const songArtist = element.artist.name;
                const songPlay = element.preview;

                html += `
                <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${songName}</h3>
                        <p class="author lead">Album by <span>${songArtist}</span></p>
                        <audio controls src="${songPlay}" type="audio/mpeg"></audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyric('${songArtist}', '${songName}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
                `
                songList.innerHTML = html;
            });
            
        })
}
const getLyric = (artist , songName) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${songName}`;
    console.log(url);
    fetch(`https://api.lyrics.ovh/v1/${artist}/${songName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}