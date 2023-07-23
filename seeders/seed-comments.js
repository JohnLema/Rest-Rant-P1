const db = require('../models')

async function seed() {

    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

     let comment2 = await db.comment.create({
        author: 'Hungry Harry',
        rant: false,
        stars: 4.0,
        content: 'It was great, I would recommend'
    })

    let comment3 = await db.comment.create({
        author: 'Sassy Sally',
        rant: false,
        stars: 3.0,
        content: 'Not bad, but it was a bit too spicy for my taste'
      })

    place.comments.push(comment.id)
    place.comments.push(comment2.id)
    place.comments.push(comment3.id)

    await place.save()
    
    process.exit()
}

seed()