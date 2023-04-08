import React from 'react';
import { Link } from 'react-router-dom';
import mangaImg from '../assets/manga-img.jpg';

const MainPage = ({ mangaData }) => {

  return (
    <div className="w-full flex flex-col items-center py-10 px-10 space-x-8 text-right">
      <div className="card p-10 w-fit space-y-10 lg:w-3/4 xl:w-7/12 2xl:w-3/6 md:p-10">

        <div className="manga-description flex flex-row flex-wrap space-x-8 space-y-8 md:flex-nowrap md:space-y-0 md:items-center md:text-lg">

          <div className="manga-img-container mx-auto w-2/4">
            <img src={mangaImg} style={{ minWidth: '250px' }} alt="manga-img" />
          </div>
          <div style={{ minHeight: '465px' }} className="description w-fit hue-rotate-30 ">
            <h3 className='text-2xl font-bold pb-4'> : الامبراطور الشيطاني   </h3>
            <div style={{ minWidth: '300px' }}>
              <p> القصه : {mangaData.categories} </p>
              {mangaData.info.map((e, i) => i <= 1 && <p key={i}>{e}</p>)}
              <p>عدد الفصول: {mangaData.numberOfChapters.at(-1)}</p>
              <p>صنف : أكشن, إثارة, فنون, قتال, زمكاني </p>
            </div>
          </div>

        </div>

        <div className="chapters-section flex flex-col items-end ">
          <p className="font-bold text-4xl pb-2"> : الفصول</p>
          <div className="scrollable flex flex-col items-end space-y-2 font-bold">
            {[...mangaData.numberOfChapters].reverse().map((chapNum, i) => (
              <Link key={i} to={`/${chapNum}/`}>
                {i === 0 ? <p className='newP blink_me inline-block px-2 font-bold'>جديد</p> : ''}
                الفصل رقم : {chapNum}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainPage;