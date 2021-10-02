//Takes in post ID
//Find Posts
//REturns Info
//Afterwards Blogs sets active blog in Home as blog with info
//Home displays info
//When pressed back it resets

async function getPost(id){
    const post = await fetch(`https://api1232.herokuapp.com/${id}/posts`)
    const data = await post.json()

    return data
}

export default getPost