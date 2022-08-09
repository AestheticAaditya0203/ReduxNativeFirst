const initialState = {
  postList: [],
};

const PostReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LIST':
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducers;
