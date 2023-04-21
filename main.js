document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const fruitName = document.querySelector('input').value
    try{
        const response = await fetch(`https://fruit-of-the-spirit-api.onrender.com/api/${fruitName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.verseOne,
        document.querySelector('#verseTwo').innerText = data.verseTwo,  
        document.querySelector('#verseThree').innerText = data.verseThree
    }catch(error){
        console.log(error)
    }
}