import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice'
import countersReducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: countersReducer
  },
});
