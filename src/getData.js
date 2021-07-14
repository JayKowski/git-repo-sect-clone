import sendQuery from './queryStruct';
import populateDOM from './populateDom';

async function getData() {
    let searchTerm;
    const accessToken = "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"
    const form = document.querySelector('.search-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        searchTerm = e.target.elements[0].value;

        // GRAPHQL QUERY BLOCK

        const query = sendQuery(searchTerm)
        fetch('https://api.github.com/graphql', {
            method: "POST",
            body: JSON.stringify({query}),
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            populateDOM(res.data.user);
        })
        .catch(err => {
            alert(err)
        })
    });
}

export default getData;