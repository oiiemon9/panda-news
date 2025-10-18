import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router';
import SingleNews from './SingleNews/SingleNews';

const NewsPost = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isLoader = Boolean(navigation.location);

  if (isLoader) {
    return <p>loading....</p>;
  }

  return (
    <div className="space-y-10">
      {data.data.map((news, i) => (
        <SingleNews key={i} news={news}></SingleNews>
      ))}
    </div>
  );
};

export default NewsPost;
