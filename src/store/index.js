// import { createStore } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import counterReducer from './counter-slice';
// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       // here we're allowed to mutate the state but behind the scene redux toolkit uses imgur package which will detect code like this and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const counterReducer = (state = { counter: 0, initialState }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case 'INCREASE':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//       };
//     case 'DECREMENT':
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case 'TOGGLE':
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const initialAuthState = {
//   isAuthenticated: false
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     }
//   }
// });

// const store = createStore(counterSlice.reducer);
// const store = configureStore({
//   //   reducer: counterSlice.reducer
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
// });
const store = configureStore({
  //   reducer: counterSlice.reducer
  reducer: { counter: counterReducer, auth: authReducer }
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
