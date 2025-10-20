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

  useEffect(() => {
    const savedPosition = parseInt(sessionStorage.getItem('NewsScrollSave'));
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
    }
    sessionStorage.setItem('NewsScrollSave', 0);
  }, []);

  const handelSaveScroll = () => {
    const position = window.scrollY;
    sessionStorage.setItem('NewsScrollSave', position);
  };

  return (
    <div className="space-y-10">
      {data.data.map((news, i) => (
        <SingleNews
          key={i}
          news={news}
          handelSaveScroll={handelSaveScroll}
        ></SingleNews>
      ))}
    </div>
  );
};

export default NewsPost;
