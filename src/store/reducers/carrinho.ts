// store/carrinho.ts
const initialState = {
  itens: []
}

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      if (state.itens.find((p) => p.id === action.produto.id)) {
        return state
      } else {
        return { ...state, itens: [...state.itens, action.produto] }
      }
    default:
      return state
  }
}

export default carrinhoReducer
