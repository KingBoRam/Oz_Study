export function handleClick() {
  return function handleClickThunk(dispatch, getState) {
    dispatch({ type: 'INCREMENT' });
  };
}

export function handleTimeoutClick() {
  return function handleTimeoutClickThunk(dispatch, getState) {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };
}
