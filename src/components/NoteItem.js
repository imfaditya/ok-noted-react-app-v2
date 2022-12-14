import React from 'react';
import { useNavigate } from 'react-router-dom';
import {showFormattedDateEN, showFormattedDateID} from '../utils/date-format';
import parse from 'html-react-parser';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

function NoteItem({id, title, createdAt, body}) {
  const {locale} = React.useContext(LocaleContext);

  const navigate = useNavigate();
  return (
    <article className='note-item'>
      <h3 className='note-item__title' onClick={() => navigate(`/detail/${id}`)}>{title}</h3>
      <p className='note-item__created-at'>{locale === 'en' ? showFormattedDateEN(createdAt) : showFormattedDateID(createdAt)}</p>
      <div className='note-item__body'>{parse(body)}</div>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteItem;