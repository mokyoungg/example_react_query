import React, { useEffect } from 'react';
import Axios from 'api';

const key = process.env.REACT_APP_ACCESS_KEY;

const ImageList: React.FC = () => {
  const getImage = () => {
    Axios.get(`/photos/random?client_id=${key}`);
  };

  useEffect(() => {
    getImage();
  }, []);

  return <div>image</div>;
};

export default ImageList;
