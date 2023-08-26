// store/favoritos.ts
const initialState = {
  itens: []
}

const favoritosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITO':
      if (state.itens.find((p) => p.id === action.produto.id)) {
        return {
          ...state,
          itens: state.itens.filter((p) => p.id !== action.produto.id)
        }
      } else {
        return { ...state, itens: [...state.itens, action.produto] }
      }
    // Outros cases aqui, se necessário
    default:
      return state
  }
}

export default favoritosReducer
