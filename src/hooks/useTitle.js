import { useState, useEffect } from 'react';

const useTitle = () => {

  const [title, setTitle] = useState("Electric Vehicles");

  // Set title
  const updateTitle = (titleValue) => {
    setTitle(titleValue);
  };

  // Update document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return {
    current: title,
    update: updateTitle
  };
};

export default useTitle;
