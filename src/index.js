import './style.css'
import { showHome } from './home'
import { menuParagraph } from './menu'
import { showContact } from './contact'

export const content = document.getElementById('content')
export const text = document.createElement('p')
const tab = document.getElementsByClassName('tab')

const createSkeleton = () => {
    
    const createTitle = () => {
    const headline =document.createElement('h1')
        headline.textContent = "Home Restaurant"
        content.insertAdjacentElement('afterbegin', headline)
    }
    
    const createTabs = () => {
        const tabs = document.createElement('ul')
        for (let i=0;i<3;i++){
            let titles = ['Home','Menu', 'Contact']
            const tab = document.createElement('li')
            tab.textContent = titles[i]
            tab.classList.add('tab')
            tabs.appendChild(tab)
        }
        content.appendChild(tabs)
    }
    
    const createParagraph = () => {
        text.textContent= 'WELCOME TO MY KITCHEN'
        content.appendChild(text)
    }

    const removeParagraph = () => {
        text.remove()
    }
    const removeClasses = () => {
        tab[0].classList.remove('selected')
        tab[1].classList.remove('selected')
        tab[2].classList.remove('selected')
    }
    
    return {content,text, createTitle, createTabs, createParagraph, removeParagraph, removeClasses}
}

const flowPage = () => {  
    create.removeParagraph()
    tab[0].addEventListener('click', () => {
        create.removeClasses()
        showHome()
        tab[0].classList.add('selected')
    })
    tab[1].addEventListener('click', () => {
        create.removeClasses()
        menuParagraph()
        tab[1].classList.add('selected')
    })
    tab[2].addEventListener('click', () => {
        create.removeClasses()
        showContact()
        tab[2].classList.add('selected')
    })
}

const create = createSkeleton();
create.createTitle()
create.createTabs()
flowPage();
create.createParagraph()



