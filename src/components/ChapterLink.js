import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ChapterLink = ({ chapNum, i = 1 }) => {


  return (
    <Link to={`/${chapNum}/`}>
      {i === 0 ? <p className='newP blink_me inline-block px-2 font-bold'>جديد</p> : ''}
      الفصل رقم : {chapNum}
    </Link>
  )
}

export default ChapterLink