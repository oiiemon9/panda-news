import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { Link } from 'react-router';

const SingleNews = ({ news }) => {
  const {
    author,
    title,
    thumbnail_url,
    image_url,
    details,
    rating,
    total_view,
    _id,
  } = news;
  const formatDate = author?.published_date?.split(' ')[0] || 'Unknown';

  return (
    <div className="border border-base-200/50 rounded">
      <div className="flex items-center justify-between bg-base-200/10 p-3">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-12 rounded-full" src={author?.img} alt="" />
          </div>
          <div>
            <h4 className="text-base-300">{author?.name}</h4>
            <p className="text-sm text-base-200">{formatDate}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegBookmark />
          <IoMdShare />
        </div>
      </div>
      <Link to={`/news/${_id}`}>
        <div className="p-4 space-y-2">
          <h4 className="text-lg font-semibold ">{title}</h4>
          <div className="h-96 w-full rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover object-top "
              src={image_url}
              alt=""
            />
          </div>
          <p className="mt-5 text-base-300">
            {details.length > 200 ? details.slice(0, 200) + '...' : details}
            {details.length > 200 && (
              <button className="text-blue-600 cursor-pointer">
                Learn More
              </button>
            )}
          </p>
          <div className="mt-5 border-t border-base-200/20  py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={rating.number}
                  readOnly
                />
              </div>
              <p className="text-sm text-base-200">({rating.number})</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye></FaEye>
              <p className="text-sm text-base-200">({total_view})</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleNews;

// {
//     "_id": "f06f8cc035b04bd1158e4198281915a4",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "05",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 127,
//     "title": "Up Late with Ben Harvey: Why Troy Mercanti needs to start an OnlyFans account",
//     "author": {
//         "name": "Ukrainska Pravda",
//         "published_date": "2022-08-25 18:53:49",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png",
//     "image_url": "https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png",
//     "details": "On Thursday night’s episode of Up Late, Ben Harvey has suggested Troy Mercanti start an OnlyFans account if he wishes to challenge anti-consorting laws. The notorious bikie will fight allegations that he broke WA’s stringent anti-consorting and insignia laws — but is also watching a High Court challenge to the regulations which the State Government have touted have the nation’s toughest against outlaw motorcycle gang members. The long-time one per center was not in court on Wednesday when the not guilty pleas were entered. WATCH UP LATE IN THE VIDEO PLAYER ABOVE But his lawyer Paul Holmes was, who revealed that Mercanti’s defence will be on two fronts — against elements of the alleged offence, and the legislation itself. Mercanti was charged with the two offences outside an Italian restaurant in front of shocked onlookers earlier this year. According to eyewitnesses, Mercanti — dressed in a T-shirt and shorts — was having lunch with long-time friend John Kizon at Mt Hawthorn’s Lupo Lab when more than a dozen officers from the gang crime squad descended and asked him to step outside. Soon afterwards, he was told he was being charged via summons with displaying gang insignia, which was prohibited under sweeping laws that came into effect a few months ago. Earlier the same week, Mercanti was hit with a dispersal notice by police while picking up a friend at the airport. Mercanti’s case was adjourned until October to be allocated a trial date. On Up Late, Harvey warned fighting in court may get expensive for Mercanti, and suggested a way he may be able to come up with the cash. Harvey may have gotten the idea after it was this week revealed that Dhakota Williams — the 21-year-old daughter of slain underworld king Carl Williams started an OnlyFans account. “If it’s good enough for the wife and daughter of slain gangland boss Carl Williams then it’s gotta be good enough for Troy Mercanti,” Harvey says. “See Troy’s OnlyFans page for exclusive tips for how a modern outlaw can best accessorise… find out why black and white are the only colours you need in your wardrobe… a showcase of latest leather trends… tips on keeping healthy. “And exclusively for OnlyFans subscribers... an inside look at the man who put the soft into soft serve, how he relaxes listing to 80s glam-rock and some cosplay as a Lego spaceman.”"
// }
