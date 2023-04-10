import React from 'react';
import loading from './assets/loading.svg'

const Loading = () => {
  return (

    <div className="w-full flex flex-col items-center py-10 px-10 space-x-8 text-right">
      <div className="card flex justify-center items-center p-6 w-fit sm:p-10 lg:w-3/4 xl:w-7/12 2xl:w-3/6 md:p-10">
        <img src={loading} alt="loading-img" className='w-3/4 lg:w-2/4 ' />
      </div>
    </div>
  );
};

export default Loading;
