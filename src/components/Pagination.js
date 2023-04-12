import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ numberOfPages, paginate }) => {
  let pageNumbers = [];
  for (let i = 0; i < numberOfPages; i++) {
    pageNumbers.push(i + 1);
  }

  const scrollUp = () => {
    document.querySelector('.scrollable').scrollBy({
      top: -2000,
      left: 0,
      behavior: 'instant',
    });
  };

  return (
    <>
      <ul className="pagination flex justify-end items-center ">
        {pageNumbers.reverse().map((number) => (
          <li
            onClick={() => {
              scrollUp();
              paginate(number);
            }}
            key={number}
            className=" flex justify-center items-center page-item border-2 ml-1 hover:scale-95 hover:border-black  hover:text-black"
          >
            <Link to="/" className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
