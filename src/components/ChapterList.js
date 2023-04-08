import React from 'react'
import { Link } from 'react-router-dom';

const ChapterList = ({ chapNum, i }) => {
  return (
    <Link to={`/${chapNum}/`}>
      {i === 0 ? <p className='newP inline-block px-2 font-bold'>جديد</p> : ''}
      الفصل رقم : {chapNum}
    </Link>
  )
}

export default ChapterList