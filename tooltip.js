class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('Tooltip::constructor');
        
    }
    
    connectedCallback() {
        console.log('Tooltip::connectedCallback');
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        this.appendChild(tooltipIcon);
    }
}

customElements.define('my-tooltip', Tooltip);
