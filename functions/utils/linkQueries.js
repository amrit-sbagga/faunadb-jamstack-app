const GET_LINKS = 
    `query {
        allLinks {
        data {
            name
            url
            description
            archived
            _id
        }
        }
    }`;

const CREATE_LINKS = `
    mutation($name: String!, $url: String!, $description: String!) {
        createLink(data: { name: $name, 
        url: $url,
        description: $description,
        archived: false }){
            name
            _id
            url
            description
            archived
        }
    }`

module.exports = {
    GET_LINKS,
    CREATE_LINKS
}