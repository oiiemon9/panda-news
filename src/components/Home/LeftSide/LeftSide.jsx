import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';

const categoryPromises = fetch(
  'https://openapi.programming-hero.com/api/news/categories'
).then((res) => res.json());
const LeftSide = () => {
  const data = use(categoryPromises);
  const allCategory = data.data.news_category;

  return (
    <div className="flex flex-col gap-2">
      {allCategory.map((btn) => (
        <NavLink
          to={`/category/${btn.category_id}`}
          key={btn.category_id}
          className={({ isActive }) =>
            ` p-4 rounded ${isActive && 'bg-base-200/20'}`
          }
        >
          {btn.category_name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSide;
