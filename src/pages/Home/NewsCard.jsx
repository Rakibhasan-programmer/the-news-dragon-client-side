import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

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
        <Card.Title className="py-2">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="py-3 lh-lg fw-light">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link className="text-decoration-none" to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center">
            <Rating
              style={{ width: "5.6rem" }}
              value={rating?.number}
              readOnly
            />
            <span className="d-block ms-1"> {rating?.number}</span>
          </div>
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
