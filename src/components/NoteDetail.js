import React from 'react';
import { showFormattedDateEN } from '../utils/date-format';
function NoteDetail({title, createdAt, body}) {
  return (
    <div className='detail'>
      <h2 className='detail__title'>{title}</h2>
      <p className='detail__created-at'>{showFormattedDateEN(createdAt)}</p>
      <p className='detail__body'>{body}</p>
    </div>
  );
}

export default NoteDetail;