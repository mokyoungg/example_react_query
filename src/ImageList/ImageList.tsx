import React, { useEffect } from 'react';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import Axios from 'api';

const key = process.env.REACT_APP_ACCESS_KEY;

const ImageList: React.FC = () => {
  const getRandomImage = async () => {
    console.log('api call');
    const res = await Axios.get(`/photos/random?client_id=${key}`);
    return res;
  };

  // Access the client

  // Queries
  const { isLoading, isError, data, error } = useQuery(['randomImg'], getRandomImage, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('success :', data);
    },
    onError: (error) => {
      console.log('error :', error);
    },
  });

  // // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries(['todos']);
  //   },
  // });

  console.log('data :', data);

  return <div>child</div>;
};

export default ImageList;
