import $ from 'jquery';
import toastr from 'toastr';
import LoadFilm from './loadfilm';
import imagesLoaded from 'imagesloaded';
var linkImages = 'https://image.tmdb.org/t/p/w500/';

import './popup';

class WrapFilm extends HTMLElement {

    constructor() {
        super();
    }

    set loadFilm(data) {
        this._films = data;
        this.render();
    }

    connectedCallback() {
        loadImage();
        $('card-film .filmlist').on('click', function (e) {
            let id = $(this).attr('data-id');
            let target = $(this).data('modal-target');
            e.preventDefault();
            LoadFilm.getData('detail', id).then(function (results) {
                if ($('body').find(target) != null) {
                    $(target).addClass('active');
                    $('#overlay').addClass('active');
                }
                modalData(results);
            }).catch(function (message) {
                toastr.error(message);
            });
        });

        function modalData(data) {
            let modal = $('.modal');
            let img = modal.find('.images');
            let backdrop = modal.find('.backdrop .images');
            let content = modal.find('.content .images');
            let label = modal.find('.label');
            $('body').css('overflow-y', 'hidden');
            
            img.append(`<div class="loader"><svg class="spinner" width="50px" height="50px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle> </svg></div>`).addClass('is-loading');

            backdrop.prepend(`<img src="${linkImages}${data.backdrop_path}" alt="${data.title}" />`);
            content.prepend(`<img src="${linkImages}${data.poster_path}" alt="${data.title}" />`);
            modal.find('.wrapdetail').html(`
                <div class="detail star-rating">
                    <span style="width: ${rating(data.vote_average)}%"></span>
                </div>
                <div class="detail">
                    <span>
                        <i class="fa fa-eye"></i> ${data.popularity} views
                    </span>
                </div>
                <div class="detail">
                    <span>
                        <i class="fa fa-pencil-square-o"></i> ${data.vote_count} votes
                    </span>
                </div>
            `);
            modal.find('.kanan').html(`
                <h1>${data.title}</h1>
                <div class="release">
                    <p>${data.status} at ${formatDate(data.release_date)}</p>
                    <span>${data.original_language}</span>
                </div>
                <p class="desc">${data.overview}</p>
                ${moreInfo(data.homepage)}
            `)

            data.genres.forEach(genre => {
                label.append(`<span>${genre.name}</span>`);
            });

            loadImage();
        }

        function moreInfo(data) {
            if (data == null || data == '') {
                return '';
            } else {
                return `<a href="${data}" class="btn clickanim" target="_blank" rel="noopener noreferrer">Detail Film<i class="fa fa-angle-right"></i></a>`;
            }
        }

        function rating(dataRating) {
            return Math.round(dataRating * 10);
        }

        function formatDate(date) {
            let event = new Date(date);
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            return event.toLocaleString('en', options);
        }

        function loadImage() {
            imagesLoaded.makeJQueryPlugin($);
            $('.filmlist img, .modal.active img').imagesLoaded().progress(function (data, image) {
                let element = $(image.img).parent();
                element.removeClass('is-loading').find('.loader').remove();
                if (!image.isLoaded) {
                    element.addClass('is-broken').html(`<div class="broken"></div>`).find('img').remove();
                }
            });
        }
    }

    getDetail(data) {
        const genres = {
            Action: 28,
            Adventure: 12,
            Animation: 16,
            Comedy: 35,
            Crime: 80,
            Document: 99,
            Drama: 18,
            Family: 10751,
            Fantasy: 14,
            History: 36,
            Horror: 27,
            Music: 10402,
            Mystery: 9648,
            Romance: 10749,
            SciFi: 878,
            TVMovie: 10770,
            Thriller: 53,
            War: 10752,
            Western: 37
        }

        let newArr = [];
        data.forEach(ulang => {
            for (const [key, value] of Object.entries(genres)) {
                if (value == ulang) {
                    newArr.push(key);
                }
            }
        })
        let hasil = newArr.slice(0, 3);
        return hasil.join(', ');
    }

    getRating(score) {
        if (score == 0) {
            return 'none';
        } else if (score <= 5) {
            return 'bad';
        } else if (score <= 7.5) {
            return 'medium';
        } else if (score <= 10) {
            return 'good';
        } else {
            return 'bad';
        }
    }

    render() {
        this._films.forEach(film => {
            const cardElement = document.createElement("card-film");
            cardElement.innerHTML = `
            <div class="filmlist" data-id="${film.id}" data-modal-target="#detailfilm">
                <div class="is-loading images">
                    <img src="${linkImages}${film.poster_path}" alt="${film.title}">
                    <div class="loader">
                        <svg class="spinner" width="50px" height="50px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                            <circle class="circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                        </svg>
                    </div>
                </div>
                <div class="rating ${this.getRating(film.vote_average)}">${film.vote_average}</div>
                <div class="desc">
                    <h3>${film.title}</h3>
                    <span>${this.getDetail(film.genre_ids)}</span>
                </div>
            </div>`;
            this.appendChild(cardElement);
        });
    }
}

customElements.define("wrap-film", WrapFilm);