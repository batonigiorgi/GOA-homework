function convertgel(dollar) {
    let difference = 2.7;
    let gelarr = [];

    for (let i = 0; i < dollar.length; i++) {
        let gel = dollar[i] * difference;
        gelarr.push(gel)
    }

    return gelarr
}
console.log(convertgel([10]));
