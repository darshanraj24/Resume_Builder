import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const Skills = ({ onChange }) => {
  const [tags, setTags] = useState([]);

  const handleAddition = (tag) => {
    const updatedTags = [...tags, tag];
    setTags(updatedTags);
    onChange(updatedTags);
  };

  const handleDelete = (index) => {
    const updatedTags = tags.filter((tag, i) => i !== index);
    setTags(updatedTags);
    onChange(updatedTags);
  };

  const handleInputChange = (e) => {
  if (e && e.target && e.target.value) {
    const inputValue = e.target.value.trim();
    if (e.key === 'Enter' && inputValue !== '') {
      const newTag = { id: inputValue, text: inputValue };
      handleAddition(newTag);
      e.target.value = '';
    }
  }
};


  return (
    <div>
      <h2>Skills</h2>
      <ReactTags
        tags={tags}
        handleAddition={handleAddition}
        handleDelete={handleDelete}
        placeholder="Add a skill"
        delimiters={[13, 188]} // Enter and comma keys
        inputFieldPosition="top"
        handleInputChange={handleInputChange}
      />
      <p>Press <big>Enter</big> or <big>comma</big> after adding the skill</p>
    </div>
  );
};

export default Skills;
