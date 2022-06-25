class Twitter{
    constructor(idTwett, title, pos, date, language) {
        this._idTwett = idTwett;
        this._title = title;
        this._pos = pos;
        this._date = date;
        this._language = language;
    }

    get idTwett(){
        return this._idTwett
    }

    get title(){
        return this._title
    }

    get pos(){
        return this._pos
    }

    get date(){
        return this._date
    }

    get language(){
        return this._language
    }
}