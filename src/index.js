import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact"

document.body.appendChild( createHeader() )
const MAIN = document.createElement('main')
document.body.appendChild(MAIN)

MAIN.appendChild( createHome() )
document.querySelector('nav li:nth-child(1)').classList.add('active')


const NAVS = document.querySelectorAll('li')
NAVS.forEach(nav => {
    nav.addEventListener('pointerdown', (e) => {
        MAIN.firstChild.remove()

        if (e.target.innerText === 'Home') {
            MAIN.appendChild( createHome() )
            NAVS.forEach(nav => nav.classList.remove('active'))
            document.querySelector('nav li:nth-child(1)').classList.add('active')
        }

        else if (e.target.innerText === 'Menu') {
            MAIN.appendChild( createMenu() )
            NAVS.forEach(nav => nav.classList.remove('active'))
            document.querySelector('nav li:nth-child(2)').classList.add('active')
        }
        if (e.target.innerText === 'Contact') {
            MAIN.appendChild( createContact() )
            NAVS.forEach(nav => nav.classList.remove('active'))
            document.querySelector('nav li:nth-child(3)').classList.add('active')
        }
    })
})
