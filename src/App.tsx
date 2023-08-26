import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { useGetProdutosQuery } from './services/api' 

function App() {
  const { data: produtos = [], error, isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar os produtos.</div>
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={[]} favoritos={[]} />
        <Produtos
          produtos={[]}
          favoritos={[]}
          adicionarAoCarrinho={function (produto: ProdutoType): void {
            throw new Error('Function not implemented.')
          }}
          favoritar={function (produto: ProdutoType): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </Provider>
  )
}

export default App
