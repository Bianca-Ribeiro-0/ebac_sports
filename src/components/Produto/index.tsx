import React from 'react'
import { connect } from 'react-redux'
import { toggleFavorito } from '../store/favoritos'
import { adicionarAoCarrinho } from '../store/carrinho'
import * as S from './styles'

const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}) => {
  return (
    <S.Produto>
      {/* Renderização do produto aqui */}
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  favoritar: (produto: any) => dispatch(toggleFavorito(produto)),
  aoComprar: (produto: any) => dispatch(adicionarAoCarrinho(produto))
})

export default connect(null, mapDispatchToProps)(ProdutoComponent)
