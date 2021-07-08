import appendRepo from './appendRepo';
import dateFormatter from './dateFormatter';

function populateDOM(gitData) {
    //// QUERY SELECTORS
    const smallDp = document.querySelector('.nav-bar .small-dp');
    const repoCount = document.querySelector('.mini-nav .repo-count');
    const userAvatar = document.querySelector('.side-profile .user-avatar');
    const userName = document.querySelector('.side-profile .user-name');
    const userHandle = document.querySelector('.side-profile .user-handle');
    const userBio = document.querySelector('.side-profile .user-description');
    const followers = document.querySelector('.side-profile .followership .stats-num.followers');
    const following = document.querySelector('.side-profile .followership .stats-num.following');
    const starredRepos = document.querySelector('.side-profile .followership .stats-num.starred');
    const company = document.querySelector('.side-profile .more-info .more-stats-text.company');
    const location = document.querySelector('.side-profile .more-info .more-stats-text.location');
    const email = document.querySelector('.side-profile .more-info .more-stats-text.email');
    const webUrl = document.querySelector('.side-profile .more-info .more-stats-text.link');
    const twitterUrl = document.querySelector('.side-profile .more-info .more-stats-text.twitter');


    const repositories = document.querySelector('.repositories');


    ////DOM Population
    smallDp.setAttribute('src', `${gitData.avatarUrl}`);
    userAvatar.setAttribute('src', `${gitData.avatarUrl}`);
    repoCount.innerText = `${gitData.repositories.totalCount}`;
    userName.innerText = `${gitData.name}`;
    userHandle.innerText = `${gitData.login}`;
    userBio.innerText = `${gitData.bio}`;
    followers.innerText = `${gitData.followers.totalCount}`;
    following.innerText = `${gitData.following.totalCount}`;
    starredRepos.innerText = `${gitData.starredRepositories.totalCount}`;
    gitData.company != null ? company.innerText = `${gitData.company}`: company.parentElement.style.display = "none";
    gitData.location != null ? location.innerText = `${gitData.location}` : location.parentElement.style.display = "none";
    gitData.email.length != 0 && gitData.email != null ? email.innerText = `${gitData.email}` : email.parentElement.style.display = "none";
    gitData.websiteUrl != null ? webUrl.innerText = `${gitData.websiteUrl}` : webUrl.parentElement.style.display = "none";

    
    gitData.repositories.nodes.map( n => {
        let repoName = n.name;
        let repoDesc = n.description;
        let langColor = n.languages.edges.length >= 1 ? n.languages.edges[0].node.color : '';
        let langName = n.languages.edges.length >= 1 ? n.languages.edges[0].node.name : '';
        let gazers = n.stargazerCount;
        let forkCount = n.forkCount;
        let updatedLast = n.updatedAt;
        let parsedDate = dateFormatter(updatedLast);
        let wholeRepo = appendRepo(repoName, repoDesc, langColor, langName, gazers, forkCount, parsedDate);

        repositories.appendChild(wholeRepo);
    })

    console.log(gitData.repositories.nodes[4]);
}


export default populateDOM;