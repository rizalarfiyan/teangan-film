import $ from 'jquery';

export default class BackToTop extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        $('#backtotop').on('click', function (e) {
            $('html, body').animate({scrollTop: 0}, 500);
            e.preventDefault();
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('#backtotop').removeClass('is-active');
            } else {
                $('#backtotop').addClass('is-active');
            }
        }); 
    }

    render() {
        this.innerHTML = `
        <div class="backtotop hide waves-effect" id="backtotop"><span></span></div>
        `;
    }
}

customElements.define("backto-top", BackToTop);