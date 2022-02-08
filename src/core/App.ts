export default class App {

    constructor(public parent: Element) {}

    render(template: string) {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = template
        this.parent.append(templateElement.content);
    }
} 


