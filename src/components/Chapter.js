import React from 'react';
import { Navigate } from 'react-router-dom';

const Chapter = ({ mangaData, chapterNumber }) => {

  if (
    Number(chapterNumber) > mangaData.numberOfChapters.at(-1) ||
    Number(chapterNumber) < 0 ||
    isNaN(Number(chapterNumber))
  ) {
    return <Navigate to="/not-found-404" />;
  }

  const indexOfChapter = mangaData.numberOfChapters.indexOf(
    Number(chapterNumber)
  );

  return (
    <>
      {mangaData.chapters[indexOfChapter].imgs.map((img, i) => (
        <div className="img-container" key={i}>
          <img src={img} alt="chapter-img" key={img} />
        </div>
      ))}
    </>
  );
};

export default Chapter;
