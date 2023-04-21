const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 116


app.use(cors())

const verses = {
    'love' : {
        'verseOne': "John 15:12: My command is this: Love each other as I have loved you. Luke 6:31: Do to others as you would have them do to you.",
        'verseTwo': "Corinthians 16:14: Do everything in love.",
        'verseThree': "Proverbs 10:12 Hatred stirs up strife, but love covers all offenses.",
    },
    'joy' : {
        'verseOne': "Psalm 32:11 Be glad in the Lord, and rejoice, O righteous, and shout for joy, all you upright in heart!",
        'verseTwo': "Psalm 4:7 You have put more joy in my heart than they have when their grain and wine abound.",
        'verseThree': "Romans 15:13 May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
},
    'peace' : {
        'verseOne': "John 14:27 Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
        'verseTwo': "John 16:33 I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
        'verseThree': "Romans 5:1 Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
},
    'patience' : {
        'verseOne': 29,
        'verseTwo': 'Chancellor Bennett',
        'verseThree': 'Chicago, Illnois',
},
    'kindness' : {
        'verseOne': 29,
        'verseTwo': 'Chancellor Bennett',
        'verseThree': 'Chicago, Illnois',
},
    'goodness' : {
        'verseOne': 29,
        'verseTwo': 'Chancellor Bennett',
        'verseThree': 'Chicago, Illnois',
},
    'faithfulness' : {
        'verseOne': 29,
        'verseTwo': 'Chancellor Bennett',
        'verseThree': 'Chicago, Illnois',
},
    'gentleness' : {
    'verseOne': 29,
    'verseTwo': 'Chancellor Bennett',
    'verseThree': 'Chicago, Illnois',
},
    'self-control' : {
    'verseOne': 29,
    'verseTwo': 'Chancellor Bennett',
    'verseThree': 'Chicago, Illnois',
},
    'unknown' : {
    'verseOne': 0,
    'verseTwo': 'unknown',
    'verseThree': 'unknown',
}
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const fruitName = request.params.name.toLowerCase()
    if (verses[fruitName]){
        response.json(verses[fruitName])
    }else{
        response.json(verses['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})