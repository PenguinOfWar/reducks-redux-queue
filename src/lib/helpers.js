export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handle = fnMap[type];
    return handle ? handle(state, payload) : state;
  };
};

export const guid = () => {
  const r = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r()
  );
};
