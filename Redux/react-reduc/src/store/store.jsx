import {createStore} from 'redux'
import { todoSlice } from '../redux/Index'
export default createStore({
    reducer:{
        todos:todoSlice
    },
})

// practice->1
// import {createStore} from 'redux';
// const reducer = (state=0,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return state+action.payload;
//         case 'DECREMENT':
//             return state-action.payload;
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);
// store.subscribe(()=>{
//     console.log('current state',store.getState());
// })
// store.dispatch({
//     type:'INCREMENT',
//     payload:1,
// });
// store.dispatch({
//     type:'INCREMENT',
//     payload:1,
// });
// store.dispatch({
//     type:'INCREMENT',
//     payload:3,
// });
// store.dispatch({
//     type:'DECREMENT',
//     payload:1,
// });
// export default store;

// practice-2
// import {createStore} from 'redux';

// function reducerFn(state=[],action){
//     switch(action.type){
//         case 'ADD_TODO':
//             return state.concat([action.text])
//         default:
//             return state
//     }
// }

// const store = createStore(reducerFn,['use Redux']);


// store.dispatch({
//     type:'ADD_TODO',
//     text:'Read the Docs'
// })

// console.log(store.getState());

// export default store;
