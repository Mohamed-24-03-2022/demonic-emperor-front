/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Chapter from './Chapter';

const ChapterPage = ({ mangaData }) => {
  const { chapterNumber } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [nextBtn, setNextBtn] = useState(true);
  const [prevBtn, setPrevBtn] = useState(true);


  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };
  const handleClick = (e, factor) => {
    navigate(`/${Number(chapterNumber) + factor}`);
  };

  const isNextChap = () => {
    if (Number(chapterNumber) >= mangaData.numberOfChapters.at(-1)) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  };

  const isPrevChap = () => {
    if (Number(chapterNumber) <= 0) {
      setPrevBtn(false);
    } else {
      setPrevBtn(true);
    }
  };

  useEffect(() => {
    document.getElementById('chapters').value = Number(chapterNumber);
    isNextChap();
    isPrevChap();
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 space-x-8 text-center">
      <div className="card p-6 w-fit space-y-12 lg:w-3/4 xl:w-7/12 2xl:w-3/6 md:p-10">
        <h1 className="font-bold text-2xl">Chapter {chapterNumber}</h1>
        <div className="select-container ">
          <select
            name="chapters"
            id="chapters"
            className="py-2 w-full text-right"
            defaultValue={chapterNumber}
            onChange={handleChange}
          >
            {[...mangaData.numberOfChapters].reverse().map((num, i) => (
              <option key={i} value={num}>
                الفصل رقم : {num}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-container flex flex-row justify-between ">
          <button
            onClick={(e) => handleClick(e, -1)}
            className={prevBtn ? '' : 'invisible'}
          >
            {' '}
            <AiOutlineArrowLeft className="mr-2" /> السابق{' '}
          </button>
          <button
            onClick={(e) => handleClick(e, +1)}
            className={nextBtn ? '' : 'invisible'}
          >
            التالي <AiOutlineArrowRight className="ml-2" />{' '}
          </button>
        </div>
        <div className="chapter-container w-full flex flex-col items-center min-h-screen">
          <Chapter mangaData={mangaData} chapterNumber={chapterNumber} />
        </div>
        <div className="btn-container flex flex-row justify-between">
          <button
            onClick={(e) => handleClick(e, -1)}
            className={prevBtn ? '' : 'invisible'}
          >
            {' '}
            <AiOutlineArrowLeft className="mr-2" /> السابق{' '}
          </button>
          <button
            onClick={(e) => handleClick(e, +1)}
            className={nextBtn ? '' : 'invisible'}
          >
            التالي <AiOutlineArrowRight className="ml-2" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
