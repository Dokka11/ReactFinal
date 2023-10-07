export function toCapital(str) {
    if (typeof str === "string" && str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        // Maneja el caso en el que str no es una cadena válida.
        return str; // o lanza un error o devuelve un valor predeterminado según tu caso de uso.
    }
}
