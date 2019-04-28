const usuarioLogueado = (state = false, action) => {
    switch (action.type) {
      case 'LOGIN_USUARIO':
      {
          return { usuarioLogueado: true};
      }
      default:
        return state
    }
  }
  
  export default usuarioLogueado;
  