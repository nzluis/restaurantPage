import Food from './food.jpg'
import { content, text } from "./index";

const menuParagraph = () => {
    text.textContent = "Look how amazing this meal it is"
    content.appendChild(text)
    const myMeal = new Image()
    myMeal.src = Food
    
    text.appendChild(myMeal)
}

export {menuParagraph}