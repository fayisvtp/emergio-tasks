import React, { useState } from 'react';

const DynamicContentComponent = () => {

  const [content, setContent] = useState('Hello, Dynamic Content!');

  const updateContent = () => {
    setContent('New Dynamic Content!');
  };

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={updateContent}>Update Content</button>
    </div>
  );
};

export default DynamicContentComponent;
