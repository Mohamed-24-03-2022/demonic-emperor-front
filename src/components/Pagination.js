import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = ({ numberOfPages, paginate }) => {
  let pageNumbers = [];
  for (let i = 0; i < numberOfPages; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <>
      <ul className="pagination flex justify-end items-center ">
        {pageNumbers.reverse().map((number) => (
          <li onClick={() => paginate(number)} key={number} className=" flex justify-center items-center page-item border-2 ml-1 hover:scale-95 hover:border-black  hover:text-black">
            <Link to='/' className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
