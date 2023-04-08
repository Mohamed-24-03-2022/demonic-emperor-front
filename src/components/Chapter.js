import React from 'react';
import { Navigate } from 'react-router-dom';
import demonicEmperorJson from '../assets/demonicEmperor.json';

const Chapter = ({ chapterNumber }) => {
  const demonicEmperor = JSON.parse(JSON.stringify(demonicEmperorJson))[0];

  if (
    Number(chapterNumber) > demonicEmperor.numberOfChapters.at(-1) ||
    Number(chapterNumber) < 0 ||
    isNaN(Number(chapterNumber))
  ) {
    return <Navigate to="/not-found-404" />;
  }

  const indexOfChapter = demonicEmperor.numberOfChapters.indexOf(
    Number(chapterNumber)
  );

  return (
    <>
      {demonicEmperor.chapters[indexOfChapter].imgs.map((img, i) => (
        <div className="img-container" key={i}>
          <img src={img} alt="ez" key={img} />
        </div>
      ))}
    </>
  );
};

export default Chapter;
