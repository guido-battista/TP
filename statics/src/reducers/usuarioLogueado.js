const usuarioLogueado = (state = false, action) => {
    switch (action.type) {
      case 'LOGIN_USUARIO':
      {
          return true;
      }
      case 'LOGOUT_USUARIO':
      {
          return false;
      }
      default:
        return state
    }
  }
  
  export default usuarioLogueado;
  