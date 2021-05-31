function sendQuery(username){
    return (
        `query { 
            user(login: "${username}"){
                avatarUrl
                status{
                    emoji
                    message
                }
                name
                login
                bio
                followers{
                    totalCount
                }
                following{
                    totalCount
                }
                starredRepositories{
                    totalCount
                }
                company
                location
                email
                websiteUrl
                location
                repositories(last: 20){
                    totalCount
                    nodes{
                        name
                        description
                        isFork
                        stargazerCount
                        forkCount
                        updatedAt
                        languages(first: 1 orderBy: {field: SIZE, direction: DESC}){
                            totalSize
                            edges{
                                size
                                node{
                                    name
                                    color
                                }
                            }
                        }
                    }
                }
            }
        }`
    )
}

export default sendQuery;