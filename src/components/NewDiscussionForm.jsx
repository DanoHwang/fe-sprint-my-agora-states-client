import React, { useState } from 'react';
import { createDiscussion } from '../api/DiscussionDataApi';

const NewDiscussionForm = ({ onUpdate, closeModal }) => {
  const [ content, setContent ] = useState({
    author: "",
    title: "",
    story: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { author, title, story } = content;
    const date = new Date().toISOString();
    const newQuestion = {
      createdAt: date,
      title,
      author,
      bodyHTML: `<p>${story}</p>`,
      avatarUrl : "https://avatars.githubusercontent.com/u/87750478?s=64&v=4"
    };

    const updatedDiscussionList = await createDiscussion(newQuestion);

    onUpdate(updatedDiscussionList);
    setContent({
      author: "",
      title: "",
      story: ""
    });
    closeModal();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const updated = {
      ...content,
      [name]: value
    };

    setContent(updated);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__input--wrapper">
        <div className="form__input--author">
          <label htmlFor="author">이름: </label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={handleFormChange}
            value={content.author}
            required
          />
        </div>
        <div className="form__input--title">
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleFormChange}
            value={content.title}
            required
          />
        </div>
        <div className="form__textbox">
          <label htmlFor="story">질문 내용: </label>
          <textarea
            id="story"
            name="story"
            placeholder="질문을 작성하세요"
            onChange={handleFormChange}
            value={content.story}
            required
          ></textarea>
        </div>
      </div>
      <div className="form__submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default NewDiscussionForm;
