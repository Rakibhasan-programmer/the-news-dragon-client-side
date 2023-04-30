import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <>
      { id && <h4>This is a category: {categoryNews.length}</h4>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </>
  );
};

export default Category;
