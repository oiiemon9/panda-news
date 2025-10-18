import React from 'react';
import RightSide from '../Home/RightSide/RightSide';
import NewsInfo from './NewsInfo/NewsInfo';
import { useLoaderData, useNavigation } from 'react-router';

const NewsInfoPage = () => {
  const news = useLoaderData();
  const newsObject = news.data[0];

  return (
    <div className="max-w-[1440px] px-2 mx-auto mt-20">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <h3 className="font-bold">Panda News </h3>
          <NewsInfo newsObject={newsObject}></NewsInfo>
        </div>
        <div className="col-span-3">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default NewsInfoPage;
