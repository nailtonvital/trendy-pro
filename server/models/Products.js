class Products {
    constructor(idProduct, title, img, pos, departament, overview){
        this._idProduct = idProduct; 
        this._title = title; 
        this._img = img; 
        this._pos = pos; 
        this._departament = departament; 
        this._overview = overview;
    }

    get idProduct(){
        return this._idProduct
    }

    get title(){
        return this._title
    }

    get img(){
        return this._img
    }

    get pos(){
        return this._pos
    }

    get departament(){
        return this._departament
    }

    get overview(){
        return this._overview
    }
}