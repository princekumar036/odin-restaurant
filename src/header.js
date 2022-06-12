

function createHeader() {
    const header = document.createElement('header')

    const div = document.createElement('div')
    div.classList.add('logo')
    div.innerText = 'Cart👀n Food'

    const nav = document.createElement('nav')

    const li1 = document.createElement('li')
    li1.innerText = 'Home'
    const li2 = document.createElement('li')
    li2.innerText = 'Menu'
    const li3 = document.createElement('li')
    li3.innerText = 'Contact'

    nav.appendChild(li1)
    nav.appendChild(li2)
    nav.appendChild(li3)

    header.appendChild(div)
    header.appendChild(nav)

    return header
}

export default createHeader