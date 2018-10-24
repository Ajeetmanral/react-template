const INITIAL_STATE = {
  isPinging: false,
};


export default (state = INITIAL_STATE, { type, _payload }) => {
  switch (type) {
    case 'PING':
      return { ...state, isPinging: true };

    case 'PONG':
      return { ...state, isPinging: false };

    default:
      return state;
  }
};
