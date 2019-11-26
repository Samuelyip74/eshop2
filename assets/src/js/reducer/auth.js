const initialState = {
    key: localStorage.getItem("key"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    errors: {},
  };
  
  
export default function auth(state=initialState, action) {

  switch (action.type) {

    case 'USER_LOADING':
      return {...state, isLoading: true};

    case 'USER_LOADED':
      return {...state, isAuthenticated: true, isLoading: false, user: action.user};

    case 'LOGIN_SUCCESSFUL':
      localStorage.setItem("key", action.data.key);
      return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

    case 'REGISTRATION_SUCCESSFUL':
      localStorage.setItem("key", action.data.key);
      return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

    case 'AUTHENTICATION_ERROR':
      
    case 'LOGIN_FAILED':
    case 'REGISTRATION_FAILED':

    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem("key");
      return {...state, errors: action.data, key: null, user: null,
        isAuthenticated: false, isLoading: false};

    default:
      return state;
  }
}


  