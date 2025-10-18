import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const NewsInfo = ({ newsObject }) => {
  const { image_url, title, details } = newsObject;
  const navigate = useNavigate();
  return (
    <div className="p-5 border rounded border-gray-200">
      <div className="w-full h-auto">
        <img className="w-full" src={image_url} alt="" />
      </div>
      <div className="mt-5 space-y-4">
        <h1 className="text-2xl font-bold text-base-300">{title}</h1>
        <p className="text-base-200">{details}</p>

        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          <FaArrowLeft /> All news in this category
        </button>
      </div>
    </div>
  );
};

export default NewsInfo;

// {
//     "_id": "f69a695f037cd9484cecaea37ca71012",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "02",
//     "rating": {
//         "number": 4.3,
//         "badge": "Excellent"
//     },
//     "total_view": 400,
//     "title": "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine",
//     "author": {
//         "name": "Jennifer Wood",
//         "published_date": "2022-08-30 16:38:45",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
//     "image_url": "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png",
//     "details": "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."
// }
