import React from "react";
import { getMovie } from "./fakeMovieService";

const MovieForm = ({ match, history }) => {
  const movie = getMovie(match.params.id);
  console.log(movie);

  return (
    <div>
      <h1 className="m-4">Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary m-4"
        onClick={() => history.push("/Movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
