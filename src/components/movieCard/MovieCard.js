import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
const MovieCard = ({ movie, handelDelete }) => {
  return (
    <div>
      <Card className="movie" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} alt="viiiiiide" />
        <Card.Body className="movie-over">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <h5>Release date : {movie.date}</h5>
            <ReactStars
              count={movie.rate}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
          </Card.Text>

          <Button variant="primary">Details</Button>
          <Button
            variant="danger"
            className="delete-btn"
            onClick={() => handelDelete(movie.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
