import React from 'react';
import { Link } from 'react-router-dom';
import './Media.scss';

export function Media({ id, url, userId, userName }) {
  const alt = `Uploaded by ${userName}`;
  return (
    <div className='media'>
      <Link to={`/media/${id}`} className='media-link'>
        <img loading='lazy' alt={alt} src={url} />
      </Link>
    </div>
  );
}
