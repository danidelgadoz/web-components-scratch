class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('Tooltip::constructor');
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        this.appendChild(tooltipIcon);
        
    }
}

customElements.define('my-tooltip', Tooltip);