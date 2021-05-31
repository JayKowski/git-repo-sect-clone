import elFactory from './elementFactory';

// elFactory(el, cName, cont)
function appendRepo(repName, projDesc, mainLangColor, mainLang, sGazers, forks, lastUpdate) {
    let repoDiv = elFactory('div', 'repository', '');
    let repoInfo = elFactory('div', 'repo-info', '');
    let parOne = elFactory('p', 'repo-name', `${repName}`);
    let parTwo = elFactory('p', 'project-desc', `${projDesc}`);
    let moreInfDiv = elFactory('div', 'more-repo-info', '');
    //
    let spanOne = elFactory('span', 'main-lang', '');
    let langColorDiv = elFactory('div', 'lang', '');
    langColorDiv.style.backgroundColor = `${mainLangColor}`;
    let spanOneCont = elFactory('span', '', `${mainLang}`);
    //
    let spanTwo = elFactory('span', 'starred', '');
    let starTwo = elFactory('i', 'far fa-star', '')
    let spanTwoCont = elFactory('span', '', `${sGazers}`);
    //
    let spanThree = elFactory('span', 'forked', '');
    let fork = elFactory('i', 'fas fa-code-branch', '');
    let spanThreeCont = elFactory('span', '', `${forks}`);
    let spanFour = elFactory('span', 'last-updated', `updated ${lastUpdate}`);
    //
    let starNGraph = elFactory('div', 'star-and-graph', '');
    let star = elFactory('i', 'far fa-star', '');
    let starSpan = elFactory('span', 'star-btn', '');

    //APPEND ELEMENTS
    repoDiv.appendChild(repoInfo);

    repoInfo.appendChild(parOne);
    repoInfo.appendChild(parTwo);
    repoInfo.appendChild(moreInfDiv);

    moreInfDiv.appendChild(spanOne);
    spanOne.appendChild(langColorDiv);
    spanOne.appendChild(spanOneCont);

    moreInfDiv.appendChild(spanTwo);
    spanTwo.append(starTwo, ` ${sGazers}`);

    moreInfDiv.appendChild(spanThree);
    spanThree.append(fork, ` ${forks}`);

    moreInfDiv.appendChild(spanFour);
    
    repoDiv.appendChild(starNGraph);
    starNGraph.appendChild(starSpan);
    starSpan.append(star, ' Star');


    return repoDiv;
}

export default appendRepo;