export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE token after finished developing - set to null
  // token:
  //   "BQAs9Uq9yU3DitIuEHfmUtb-b8AkCxpnFZOUKKG2qXadi2T_ivmc08Pl0NjE4AZEczfA-nLLbM2U9WVyX42WUkCKEd9yrE9uudPvBJolfhh-0jWDlWZtr_H5z3r0-a64ceJe1q0-t4fLIm0rnPDOku4SlclSz-41zqrp-pIKLvrB4KwtqLee",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
