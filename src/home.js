

function createHome() {
    const section = document.createElement('section')
    section.classList.add('home')

    const div = document.createElement('div')
    div.classList.add('hero')

    const p = document.createElement('p')
    p.innerText = 'Grab delicious foods from your favourite cartoon shows'

    const img = document.createElement('img')
    img.src = 'images/food.png'
    img.alt = 'Food'

    div.appendChild(p)
    div.appendChild(img)

    const btn = document.createElement('button')
    btn.innerText = 'Explore Menu'

    section.appendChild(div)
    section.appendChild(btn)

    return section
}

export default createHome