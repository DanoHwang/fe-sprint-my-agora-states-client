import React from 'react';
import Discussion from '../components/Discussion';

const DiscussionList = ({ data }) => {
  return (
    <div className="discussion">
      <div className="discussion__list">
        <section className="discussion__wrapper">
          <ul className="discussions__ul">
            {data.map((discussion) => (
              <Discussion data={discussion} key={discussion.id} />
            ))}
          </ul>
          <div className="page-bar"></div>
        </section>
      </div>
    </div>
  );
};

export default DiscussionList;
