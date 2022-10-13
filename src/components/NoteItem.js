import React from 'react';
import { useNavigate } from 'react-router-dom';
import {showFormattedDateEN, showFormattedDateID} from '../utils/date-format';
import parse from 'html-react-parser';

function NoteItem({id, title, createdAt, body}) {
  const navigate = useNavigate();
  return (
    <section className='note-item'>
      <h3 className='note-item__title' onClick={() => navigate(`/detail/${id}`)}>{title}</h3>
      <p className='note-item__created-at'>{showFormattedDateEN(createdAt)}</p>
      <div className='note-item__body'>{parse(body)}</div>
    </section>
  );
}

export default NoteItem;