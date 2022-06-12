

function createMenu() {
    // Menu Item 1
    var title = `Homer Simpson's Donut`
    var price = '$ 1.99'
    var src = 'images/simpsons.jpg'
    var description = `Any fan of The Simpsons knows that Homer goes absolutely nuts for donuts with a pretty pink glaze. Make some mouthwatering confections that Homer himself would be drooling over with this recipe from Let's Eat Fiction!`
    const item1 = createMenuItem(title, price, src, description)

    // Menu Item 2
    var title = `Bacon Pancakes`
    var price = '$ 0.99'
    var src = 'images/adventuretime.jpg'
    var description = `It's just as easy (and delicious!) as Jake the Dog says: you make some bacon and you put it in a pancake! This is simple and mouth-watering breakfast from The Geeky Chef is perfect for any venturing hero.`
    const item2 = createMenuItem(title, price, src, description)

    // Menu Item 3
    var title = `Sandwich of Death`
    var price = '$ 1.59'
    var src = 'images/regularshow.jpg'
    var description = `The Sandwich of Death, as featured on Regular Show, is no ordinary meatball sub. But you won't kick the bucket when you bite in, even though the taste is to die for. This recipe comes courtesy of Fiction-Food Cafe.`
    const item3 = createMenuItem(title, price, src, description)

    // Menu Item 4
    var title = `Krabby Patty`
    var price = '$ 2.99'
    var src = 'images/spongebob.jpg'
    var description = `The Krabby Patty is the food of choice in SpongeBob SquarePants. While its secret ingredient remains an elusive mystery in the show, this recipe from Instructables ensures you can make your own Krabby Patty at home.`
    const item4 = createMenuItem(title, price, src, description)

    const section = document.createElement('section')
    section.classList.add('menu')

    section.appendChild(item1)
    section.appendChild(item2)
    section.appendChild(item3)
    section.appendChild(item4)

    return section
}



function createMenuItem(title, price, src, description) {
    const div1 = document.createElement('div')
    div1.classList.add('menu-item')

    const img = document.createElement('img')
    img.src = src
    img.alt = title

    const div2 = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerText = title

    const p1 = document.createElement('p')
    p1.innerText = price

    div2.appendChild(h3)
    div2.appendChild(p1)

    const p2 = document.createElement('p')
    p2.innerText = description

    div1.appendChild(img)
    div1.appendChild(div2)
    div1.appendChild(p2)

    return div1
}

export default createMenu