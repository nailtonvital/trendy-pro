class TikTok{
    constructor(idSong, title, pos, artist, videosCount) {
        this._idSong = idSong;
        this._title = title;
        this._pos = pos;
        this._artist = artist;
        this._videosCount = videosCount;
    }

    get idSong(){
        return this._idSong
    }

    get title(){
        return this._title
    }

    get pos(){
        return this._pos
    }

    get artist(){
        return this._artist
    }

    get videosCount(){
        return this._videosCount
    }
}
