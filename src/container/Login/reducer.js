const initLoginState = {
  isLogin: false,
  statue: 'pending'
};

const loginReducer = (state = initLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLogin: false,
        isPending: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        isPending: false
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLogin: false,
        isPending: false
      }
    default:
      {
        return state;
      }
  }
};

export default loginReducer;
