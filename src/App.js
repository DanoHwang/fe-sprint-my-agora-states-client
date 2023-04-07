import { useEffect, useState } from 'react';
import { getDiscussions } from './api/DiscussionDataApi';

import Header from './Pages/Header';
import Side from './Pages/Side';
import DiscussionList from './Pages/DiscussionList';
import Modal from "./components/Modal";
import NewDiscussionForm from './components/NewDiscussionForm';
import './App.css';

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ discussionList, setDiscussionList ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newFlightList = await getDiscussions();
      setDiscussionList(newFlightList);
    }

    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <>
        <button onClick={openModal}>모달팝업</button>
        <Modal open={modalOpen} close={closeModal} header="Create New Discussion!">
          <NewDiscussionForm onUpdate={setDiscussionList} />
        </Modal>
      </>
      <Header openModal={openModal} closeModal={closeModal} />
      <div className="main">
        <Side />
        <DiscussionList data={discussionList} />
      </div>
    </div>
  );
}

export default App;
