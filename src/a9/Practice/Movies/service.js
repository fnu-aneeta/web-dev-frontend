const URL = 'http://localhost:4000/rest/movies';   // declare URL to service

export const findAllMovies = () => // declare function to retrieve data from database
    fetch(URL)   // send HTTP GET to URL
        .then(response => response.json()); // parse JSON in body from server response

export const deleteMovie = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const createMovie = (movie) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findMovieById = (id) =>   // implement function to retrieve movie by its ID
    fetch(`${URL}/${id}`)         // send HTTP GET to URL including movie's ID
        .then(response => response.json());  // parse movie from response's body

export const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findAllMovies, deleteMovie, createMovie,  // export findAllMovies function to use elsewhere
    findMovieById, updateMovie// export function to use elsewhere
};

