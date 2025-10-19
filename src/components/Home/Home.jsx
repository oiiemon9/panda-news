import React, { Suspense, useEffect } from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { Outlet, useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-2 mt-20">
      <div className="grid grid-cols-12 gap-5">
        <aside className="md:order-1 lg:order-1 col-span-12 md:col-span-6 lg:col-span-3">
          <h3 className="font-bold">All Category</h3>
          <Suspense fallback={<p>loading....</p>}>
            <LeftSide></LeftSide>
          </Suspense>
        </aside>
        <div className="md:order-3 lg:order-2 col-span-12 md:col-span-12 lg:col-span-6">
          <h3 className="font-bold">Panda News </h3>
          <Outlet></Outlet>
        </div>
        <div className="md:order-2 lg:order-3 col-span-12 md:col-span-6 lg:col-span-3">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
