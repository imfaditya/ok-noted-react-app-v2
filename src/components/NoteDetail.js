import React from 'react';
import parse from 'html-react-parser'
import { showFormattedDateEN, showFormattedDateID } from '../utils/date-format';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

function NoteDetail({title, createdAt, body}) {
  const {locale} = React.useContext(LocaleContext);

  return (
    <div className='detail'>
      <h2 className='detail__title'>{title}</h2>
      <p className='detail__created-at'>{locale === 'en' ? showFormattedDateEN(createdAt) : showFormattedDateID(createdAt)}</p>
      <div className='detail__body'>{parse(body)}</div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteDetail;