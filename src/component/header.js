export default class Header extends HTMLElement {

    constructor() {
        super();
        this._sitename = 'Teangan Film';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navtop">
            <div class="wrapper">
                <div class="wraplogo">
                    <div class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.54 548.53">
                            <g>
                                <path d="M540.65,482.87l-91-60a14,14,0,0,0-21.71,11.69v120a14,14,0,0,0,21.71,11.69l91-60a14,14,0,0,0,0-23.38Zm-84.74,45.7v-68l51.6,34Z" transform="translate(-256.23 -225.74)"/>
                                <path d="M594.08,226.08a14,14,0,0,0-10.1,9L546.45,341.92l-41.1-41.1a37,37,0,0,0-52.33,0l-186,186a37,37,0,0,0,0,52.32L430.39,702.45a37,37,0,0,0,52.33,0l56.56-56.56L652.59,759.21a51.51,51.51,0,0,0,72.84-72.84L612.11,573.06l56.58-56.58a37,37,0,0,0,0-52.32l-41.1-41.1,106.82-37.53a14,14,0,0,0,5.26-23.11L607.09,229.84A14,14,0,0,0,594.08,226.08ZM705.63,739.41h0a23.54,23.54,0,0,1-33.24,0l-78.13-78.14L627.49,628l78.14,78.13A23.54,23.54,0,0,1,705.63,739.41ZM613.35,613.89l-33.23,33.24-21-21,33.23-33.23Zm35.54-117.2-64.64,64.63a15,15,0,0,0-2,1.66l-53,53a13.67,13.67,0,0,0-1.65,2l-64.63,64.62a9,9,0,0,1-12.73,0L286.85,519.31a9,9,0,0,1,0-12.72l186-186a9,9,0,0,1,12.73,0L541,376.06a16.24,16.24,0,0,0,1.33,1.55l49.58,49.57a12.88,12.88,0,0,0,1.54,1.33L648.89,484A9,9,0,0,1,648.89,496.69Zm55.25-130.21L605.63,401.1l-37.22-37.22L603,265.37Z" transform="translate(-256.23 -225.74)"/>
                            </g>
                        </svg>
                    </div>
                    <div class="sitename">${this._sitename}</div>
                </div>
                <div class="right">
                <a href="mailto:rizal.arfiyan.23@gmail.com"><i class="fa fa-envelope"></i></a>
                <a href="https://instagram.com/rizalarfiyan"><i class="fa fa-instagram"></i></a>
                <a href="https://github.com/rizalarfiyan"><i class="fa fa-github"></i></a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define("header-top", Header);