import './header.js';
import './search.js';
import $ from 'jquery';

export default class Hero extends HTMLElement {

    constructor() {
        super();
        this._sitename = 'Teangan Film';
    }

    connectedCallback() {
        this.render();
        $('.scrolldown').on('click', function(e) {
            let position = $("main").offset().top - 100;
            $("html, body").animate({
                scrollTop: position
            }, 1000);
            e.preventDefault();
        });
    }

    render() {
        this.innerHTML = `
        <div class="wrapper">
            <div class="hero">
                <div class="content">
                    <h1>${this._sitename}</h1>
                    <p>${this._sitename} is project for submission of learn the basic of Front End Web Developer in dicoding. This is simple Javascript script using API from TMDB (The Movie Database).</p>
                </div>
                <cari-film></cari-film>
            </div>
        </div>
        <div class="scrolldown">
            <span></span>
        </div>
        `;
    }
}

customElements.define("hero-section", Hero);