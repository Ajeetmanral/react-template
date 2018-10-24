export const pingIt = () => ((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'PING',
      payload: true,
    });
  }, 500);
});

export const pongIt = () => ((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'PONG',
      payload: false,
    });
  }, 500);
});
