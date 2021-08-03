let url;
const tmdb = {
    "api_key": "a0a7e40dc8162ed7e37aa2fc97db5654",
    "base_uri": "https://api.themoviedb.org/3"
}

class LoadFilm {
    static getData(type, keyword, page = '1') {

        if (type === 'search') {
            url = `/search/movie?query=${keyword}&api_key=${tmdb.api_key}&page=${page}`;
        } else if (type === 'detail') {
            url = `/movie/${keyword}?api_key=${tmdb.api_key}`;
        } else if (type === 'now_playing') {
            url = `/movie/now_playing?api_key=${tmdb.api_key}&page=${page}`;
        } else if (type === 'top_rated') {
            url = `/movie/top_rated?api_key=${tmdb.api_key}&page=${page}`;
        } else if (type === 'upcoming') {
            url = `/movie/upcoming?api_key=${tmdb.api_key}&page=${page}`;
        } else {
            url = `/movie/popular?api_key=${tmdb.api_key}&page=${page}`;
        }

        return fetch(`${tmdb.base_uri}${url}`)
        .then(response => response.json())
        .then(response => {
            if (response) {
                if (type === 'detail') {
                    return Promise.resolve(response);
                } else {
                    return Promise.resolve(response.results);
                }
            } else {
                return Promise.reject(`Error! Terjadi kesalahan basis data!`);
            }
        })
    }
}

export default LoadFilm;