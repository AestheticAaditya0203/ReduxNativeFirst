//import axios from 'axios';
import PostApi from '../api/PostApi';

export const incNumber = () => {
  return {
    type: 'INC',
  };
};
export const decNumber = () => {
  return {
    type: 'DEC',
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    const response = await PostApi.get('/posts')
      .then(res => {
        //console.log(res);
        const posts = res.data;
        dispatch({
          type: 'POST_LIST',
          payload: posts,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
