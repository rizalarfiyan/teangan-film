import $ from 'jquery';
import './wrapfilm';
import LoadFilm from './loadfilm';
import toastr from 'toastr';

class SearchFilm extends HTMLElement {

    constructor() {
        super();
    }

    set films(data) {
        this._films = data.hasil;
        this._data = data.data;
        this._search = data.search;
        this.render();
    }
    
    renderError(message) {
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    
    render() {
        this.innerHTML = "" ;
        let page = $('prevnext').attr('data-page');
        if (page == null || page == '') {
            if ($('prevnext').attr('data-data') == 'search') {
                $('prevnext').attr('data-page', '2');
            } else {
                $('prevnext').attr('data-page', '1');
            }
        } else if (page >= '1') {
            let isPrev = $('prevnext').attr('data-prev');
            if (page >= 2) {
                $('load-prev').html('<button class="btn clickanim"><i class="fa fa-angle-left"></i>Load Prev</button>');
                if (page == 3 && isPrev == 'true') {
                    $('load-prev').html('');
                }
            }
            if (isPrev == 'false') {
                $('prevnext').attr('data-page', parseInt(page) + 1);
            } else if (isPrev == 'true') {
                $('prevnext').attr('data-page', parseInt(page) - 1);
            }
        }

        let loadnext = this._films.length == '20' ? true : false;
        if (loadnext) {
            $('prevnext').attr('data-data', this._data);
            if (this._search != null && this._search != '') {
                $('prevnext').attr('data-search', this._search);
            }

            $('load-next').html('<button class="btn clickanim">Load Next<i class="fa fa-angle-right"></i></button>');
        } else {
            $('load-next').html('');
        }
        
        const filmWrapElement = document.createElement("wrap-film");
        filmWrapElement.loadFilm = this._films;
        this.appendChild(filmWrapElement);

        $('load-prev button').on('click', function(e) {
            let dataPage = $('prevnext').attr('data-page');
            $('prevnext').attr('data-prev', true);
            if ($('prevnext').attr('data-prev') == 'true') {
                nextprevData(parseInt(dataPage) - 2);
            } else {
                $('prevnext').attr('data-prev', false);
                nextprevData(dataPage);
            }
            $('button, .topfilm').prop('disabled', true);
            $('.topfilm').addClass('disabled');
            e.preventDefault();
        });

        $('load-next button').on('click', function(e) {
            let dataPage = $('prevnext').attr('data-page');
            $('prevnext').attr('data-prev', false);
            nextprevData(dataPage);
            $('button, .topfilm').prop('disabled', true);
            $('.topfilm').addClass('disabled');
            e.preventDefault();
        });

        function nextprevData(dataPage) {
            let dataType = $('prevnext').attr('data-data');
            let dataSearch = $('prevnext').attr('data-search');
            LoadFilm.getData(dataType, dataSearch, dataPage).then(function(results) {
                let searchFilm = document.querySelector("search-film");
                searchFilm.films = {
                    'hasil': results,
                    'data': dataType,
                    'search': dataSearch
                };
                $('button, .topfilm').prop('disabled', false);
                $('.topfilm').removeClass('disabled');
            }).catch(function(message) {
                toastr.error(message);
                $('button, .topfilm').prop('disabled', false);
                $('.topfilm').removeClass('disabled');
            });
        }
    }
}

customElements.define("search-film", SearchFilm);