function elFactory(el, cName, cont) {
    let elem = document.createElement(`${el}`);
    elem.className += `${cName}`;
    elem.innerText = `${cont}`

    return elem;
}

export default elFactory;