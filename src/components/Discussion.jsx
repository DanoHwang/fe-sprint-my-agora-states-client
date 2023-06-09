import React from 'react';
import { changeUtcToLocal } from '../api/ChangeUtcToLocal';

const Discussion = ({ data }) => {
  const { createdAt, title, author, avatarUrl, url } = data;

  return (
    <div className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img src={avatarUrl} alt="thumbnail" className="discussion__avatar--image" />
      </div>
      <div className="discussion__content">
        <div className="discussion__title">
          <a href={url}>{title}</a>
        </div>
        <div className="discussion__information">
          {`${author} / ${changeUtcToLocal(createdAt)}`}
        </div>
      </div>
      <div className="discussion__answered"></div>
    </div>
  );
};

export default Discussion;
