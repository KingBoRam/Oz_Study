import axios from 'axios';

function fetchPosts() {
  return async function fecthPostThunk(dispatch, getState) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'FETCH_POSTS', payload: res.data });
  };
}

export default fetchPosts;
