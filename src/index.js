import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact"

const functionMapper = {
    createHome: createHome,
    createMenu: createMenu,
    createContact: createContact
}

// Append Header and Main to body
document.body.appendChild( createHeader() )
const MAIN = document.createElement('main')
document.body.appendChild(MAIN)

// Change Main content on Tab click
const NAVS = document.querySelectorAll('li')
NAVS.forEach(nav => {
    nav.addEventListener('pointerdown', (e) => {
        let tgt = e.target
        let pos = [...tgt.parentElement.children].indexOf(tgt) + 1
        changeMainContent(tgt.innerText, pos)
    })
})

function changeMainContent(tabName, pos) {
    if (MAIN.firstChild) { MAIN.firstChild.remove() }
    MAIN.appendChild( functionMapper[`create${tabName}`]() )
    NAVS.forEach(nav => nav.classList.remove('active'))
    document.querySelector(`nav li:nth-child(${pos})`).classList.add('active')
}
changeMainContent('Home', 1)


if (MAIN.firstChild.classList.contains('home')) {
    console.log('OK')
    const btn = document.querySelector('button')
    btn.addEventListener('pointerdown', () => {
        changeMainContent('Menu', 2)
    })
}