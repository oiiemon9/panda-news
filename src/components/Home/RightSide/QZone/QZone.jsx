import React from 'react';
import swimmingImg from '../../../../assets/swimming.png';
import classImg from '../../../../assets/class.png';
import PlaygroundImg from '../../../../assets/playground.png';

const QZone = () => {
  return (
    <div className="bg-base-200/20 py-8 rounded">
      <h3 className="font-bold mx-4">Q-Zone</h3>
      <div className="px-2 mt-5 space-y-5">
        <div className="w-full h-auto">
          <img className="w-full" src={swimmingImg} alt="" />
        </div>
        <div className="w-full h-auto">
          <img className="w-full" src={classImg} alt="" />
        </div>
        <div className="w-full h-auto">
          <img className="w-full" src={PlaygroundImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QZone;
