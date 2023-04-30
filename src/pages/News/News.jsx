import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const newsData = useLoaderData();
  const { title, details, image_url, category_id } = newsData;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link className="btn btn-danger" to={`/category/${category_id}`}>
          <FaArrowLeft className="me-2" />
            ALL News in this Category
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
