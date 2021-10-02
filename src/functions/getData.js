//Get Data From api
//Send Data to App
//Send Data to Home
//Used for getting posts

async function getData(){
    try{
        const posts = await fetch('https://api1232.herokuapp.com/posts', {mode: 'cors'})
        let data = await posts.json()
        data = data.reverse()
        return data
    } catch(err){
        console.log(err)
        return({
            title: 'borken',
            date: 'Sun Sep 26 2021 10:48:20 GMT-0400 (Eastern Daylight Time)',
            public: 'True'
        })
    }
}
export default getData