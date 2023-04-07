import React, { useEffect, useState } from 'react';
import { getDiscussions } from '../api/DiscussionDataApi';
import Discussion from '../components/Discussion';

const DiscussionList = () => {
  const [ discussionList, setDiscussionList ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newFlightList = await getDiscussions();
      setDiscussionList(newFlightList);
    }

    fetchData();
  }, []);

  return (
    <div className="discussion">
      <div className="discussion__list">
        <section className="discussion__wrapper">
          <ul className="discussions__ul">
            {discussionList.map((discussion) => (
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
