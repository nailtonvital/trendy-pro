class Movie{
    constructor(idMovie, title, originalTitle, img, originalLanguage, releaseDate, overview){
        this._idMovie = idMovie;
        this._title = title;
        this._originalTitle = originalTitle;
        this._originalLanguage = originalLanguage;
        this._img = img;
        this._releaseDate = releaseDate;
        this._overview = overview;
    }

    get idMovie(){
        return this._idMovie
    }

    get title(){
        return this._title
    }

    get img(){
        return this._img
    }

    get originalTitle(){
        return this._originalTitle
    }

    get originalLanguage(){
        return this._originalLanguage
    }

    get releaseDate(){
        return this._releaseDate
    }

    get overview(){
        return this._overview
    }
}