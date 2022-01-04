class Personaje {
    constructor (nombre, img, poder, raza) {
        this._nombre = nombre; 
        this._img = img;
        this._poder = poder;
        this._raza = raza;
    }

    get nombre () {
        return this._nombre;
    }

    get img () {
        return this._img;
    }

    get poder () {
        return this._poder;       
    }

    get raza () {
        return this._raza;
    }

    set poder (pod) {
        this._poder = pod;
    }
}


class Saiyajin () {

    transformacion() {
    }

}

class Humano () {

    coraje() {
    }

}
