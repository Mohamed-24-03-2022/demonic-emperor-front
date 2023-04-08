import React from 'react';
import demonicEmperorJson from '../assets/demonicEmperor.json';

import ChapterList from './ChapterList';
import mangaImg from '../assets/manga-img.jpg';

const LandingPage = () => {
  const demonicEmperor = JSON.parse(JSON.stringify(demonicEmperorJson))[0];

  return (
    <>
      <div className="manga-description flex flex-row flex-wrap space-x-8 space-y-8 md:flex-nowrap md:space-y-0 md:items-center md:text-lg">
        <div className="img-container mx-auto w-2/4">
          <img src={mangaImg} style={{ minWidth: '250px' }} alt="manga-img" />
        </div>
        <div className="description w-fit h-fit ">
          <div style={{ minWidth: '300px' }}>
            <p> القصه : {demonicEmperor.categories} </p>
            {demonicEmperor.info.map((e, i) => i <= 1 && <p key={i}>{e}</p>)}
            <p>عدد الفصول: {demonicEmperor.numberOfChapters.at(-1)}</p>
            <p>صنف : أكشن, إثارة, فنون, قتال, زمكاني </p>
          </div>
        </div>
      </div>
      <div className="chapters-section flex flex-col items-end ">
        <p className="font-bold text-4xl pb-2"> : الفصول</p>
        <div className="scrollable flex flex-col items-end space-y-2">
          {demonicEmperor.numberOfChapters.reverse().map((chapNum, i) => (
            <ChapterList chapNum={chapNum} i={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
