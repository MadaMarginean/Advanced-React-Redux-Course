// 1
// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {
//       ...
//     }
//   }
// }

// 1 quivalent to:

export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its 'payload' property
  // If it does, then wait for it to resolve
  // Otherwise, sent the action to the next middleware (1)
  
  // 1
  if (!action.payload || !action.payload.then /*is not a promise*/) {
    return next(action); // go to the next middleware
  }
  
  // We want to wait for the promise to resolve
  // (get its data!!) and then create a new action with that data and dispatch it
  
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    
    dispatch(newAction);
  });
};
