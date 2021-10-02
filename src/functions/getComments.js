//Take in blog id
//Find all comments with that post id
//Return it

async function getComments(obj){
    try{
        const posts = await fetch(`https://api1232.herokuapp.com/${obj}/comments`, {mode: 'cors'})
        const data = await posts.json()
        return data
    } catch(err){
        console.log(err)
    }
}

export default getComments