export default class FooterBottom extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="thanksto">
                <div class="wrapper">
                    <h2>Special Thanks to:</h2>
                    <div class="support">
                        <div class="dicoding"></div>
                        <div class="bdd"></div>
                    </div>
                    <h2>Inspired in:</h2>
                    <div class="support">
                        <div class="github"></div>
                        <div class="codepen"></div>
                        <div class="stackoverflow"></div>
                    </div>
                </div>
                <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
            </div>
            <div class="shapeanimation">
                <section class="shapeku">
                    <svg class="waves" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28"
                        xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" id="gentle-wave">
                            </path>
                        </defs>
                        <g class="parallax">
                            <use fill="rgba(255,255,255,0.7" x="48" xlink:href="#gentle-wave" y="0"></use>
                            <use fill="rgba(255,255,255,0.5)" x="48" xlink:href="#gentle-wave" y="3"></use>
                            <use fill="rgba(255,255,255,0.3)" x="48" xlink:href="#gentle-wave" y="5"></use>
                            <use fill="#fff" x="48" xlink:href="#gentle-wave" y="7"></use>
                        </g>
                    </svg>
                </section>
            </div>
            <div class="copyright">
                <span>
                    Copyright &#169; 2020 Teangan Film - All Right Reversed
                </span>
                <span>
                    Design with <i class="fa fa-heart"></i> by <a href="https://github.com/rizalarfiyan" rel="noopener noreferrer">Rizal Arfiyan</a>
                </span>
            </div>
        <footer>
        `;
    }
}

customElements.define("footer-bottom", FooterBottom);