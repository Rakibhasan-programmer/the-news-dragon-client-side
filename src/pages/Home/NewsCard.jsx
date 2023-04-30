import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { title, details, _id, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "2rem" }} src={author?.img} roundedCircle />
        <div className="ps-3 flex-grow-1">
          <span className="d-block">{author?.name}</span>
          <span className="d-block">
            {moment(author?.published_date).format("dddd, MMMM Do YYYY")}
          </span>
        </div>
        <div>
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="d-flex">
        <div className="flex-grow-1">
          <Rating
            className="text-warning"
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
            placeholderSymbol={<FaStar />}
            readonly
          />
          <span> {rating?.number}</span>
        </div>
        <div>
          <FaEye />
          <span className="ps-1">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
