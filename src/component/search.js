import $ from 'jquery';
import toastr from 'toastr';
import LoadFilm from './loadfilm.js';

export default class Search extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        $('#searchfilm').on('submit', function (e) {
            $('button, .topfilm').prop('disabled', true);
            $('.topfilm').addClass('disabled');
            const data = $(this).find('input#query').val();
            if (data === null || data === '') {
                toastr.error('Kosong, harap masukkan kata kunci untuk di cari!');
                $('button, .topfilm').prop('disabled', false);
                $('.topfilm').removeClass('disabled');
            } else {
                const regex = /^[a-zA-Z0-9- -\/!?]*$/gm;
                if ((regex.exec(data)) !== null) {
                    $('prevnext').attr('data-page', '1');
                    $('prevnext').attr('data-prev', 'false');
                    $('load-prev').html('');
                    LoadFilm.getData('search', data).then(function (results) {
                        $('button, .topfilm').prop('disabled', false);
                        $('.topfilm').removeClass('disabled');
                        const searchFilm = document.querySelector("search-film");
                        if (results && results.length) {
                            searchFilm.films = {
                                'hasil': results,
                                'data': 'search',
                                'search': data
                            };
                            const position = $("main").offset().top - 100;
                            $("html, body").animate({
                                scrollTop: position
                            }, 1000);
                            $('.topfilm').removeClass('active');
                            $('search-film').attr('data-position', 'search');
                        } else {
                            $('.topfilm').removeClass('disabled');
                            toastr.error('Tidak ada hasil terkait!');    
                        }
                    }).catch(function (message) {
                        toastr.error(message);
                        $('button, .topfilm').prop('disabled', false);
                        $('.topfilm').removeClass('disabled');
                    });
                } else {
                    toastr.error('Pastikan kata kunci diisi dengan benar!');
                    $('button, .topfilm').prop('disabled', false);
                    $('.topfilm').removeClass('disabled');
                }
            }
            e.preventDefault();
        });
    }

    render() {
        this.innerHTML = `
        <form action="" id="searchfilm" class="search">
            <input class="clickanim" id="query" type="text" name="search" placeholder="Search here...">
            <button class="clickanim" type="submit" value="submit">Search</button>
        </form>
        `;
    }
}

customElements.define("cari-film", Search);