import React, {useEffect, useState} from "react";
import service from './service'; // import the movie service

const Movies = () => {  // in the Movies component
    const [movie, setMovie] = useState({title: ''}); // add state variable to hold movie from server
    const findMovieById = (movie) => // add event handler for new Edit button
        service.findMovieById(movie._id) // use service to fetch movie from server
            .then(movie => setMovie(movie));  // update local movie state variable

    const updateMovie = (event) =>
        setMovie({...movie, title: event.target.value});

    const saveMovie = () =>
        service.updateMovie(movie)
            .then(() => setMovies(
                movies.map(m => m._id === movie._id ? movie : m)
            ));

    const [movies, setMovies] = useState([]); // create a local movies state variable
    useEffect(() => // on load
        service.findAllMovies()        // retrieve all movies from database
            .then(movies => setMovies(movies)), []);// save movies from server to local movies state variable

    const deleteMovie = (movie) =>
        service.deleteMovie(movie._id) // notify server
            .then(() => setMovies(  // after response, filter out the movie from local copy
                movies.filter(m => m !== movie)));

    const createMovie = () =>  // handle create movie button click
        service.createMovie({title: 'New Movie'}) // send POST message to server with new movie in body
            .then(actualMovie =>  // server responds with movie inserted into database
                setMovies([  // append movie at beginning of movies
                    actualMovie, ...movies
                ]));

    return(
        <div>
            <button  // new button movie to create new movie
                onClick={createMovie} // notify createMovie when button is clicked
                className="btn btn-success float-end">
                Create
            </button>
            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary float-end">
                        Save
                    </button>

                    <input
                        onChange={updateMovie}
                        defaultValue={movie.title}
                        className="form-control"/>
                </li>

                {
                    movies.map(movie =>      // in the map that renders each movie ...
                        <li key={movie._id}
                            className="list-group-item">
                            <button    // … add a new Edit button to
                                onClick={() => findMovieById (movie)}  // retrieve the movie from the server
                                className="btn btn-warning float-end ms-2">
                                Edit
                            </button>

                            <button // delete movie button
                                className="btn btn-danger float-end"
                                onClick={() => deleteMovie(movie)}>
                                Delete
                            </button>
                            {movie.title}
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default Movies;
