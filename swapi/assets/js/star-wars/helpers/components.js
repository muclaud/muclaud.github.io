export class Component {
    constructor({elementType = "div", className}) {
        this.element = document.createElement(elementType);
        this.element.className = className;
    }

    updateContent(htmlContent) {
        this.element.innerHTML = htmlContent;        
    }

    updateText(text) {
        this.element.innerText = text;
    }

}

