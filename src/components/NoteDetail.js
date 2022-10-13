import React from 'react';
import parse from 'html-react-parser'

import { showFormattedDateEN } from '../utils/date-format';
function NoteDetail({title, createdAt, body}) {
  return (
    <div className='detail'>
      <h2 className='detail__title'>{title}</h2>
      <p className='detail__created-at'>{showFormattedDateEN(createdAt)}</p>
      <div className='detail__body'>{parse(body)}</div>
    </div>
  );
}

export default NoteDetail;