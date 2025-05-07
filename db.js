const authors = [
    {id: 1, name: 'Caleb'},
    {id: 2, name: 'Steve'},
    {id: 3, name: 'Jackie'}
]

async function getAuthorById(id){
    return authors.find(author => author.id === id);
}

module.exports = { getAuthorById };