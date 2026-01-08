class Media{
    constructor(info){
        this.publisDAte = info.publisDAte;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publisDAte: 1975,
});

console.log(mySong)
       