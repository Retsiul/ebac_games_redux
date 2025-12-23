import Produto from '../components/Produto'
import { useGetCarrinhoQuery } from '../service/api'
import * as S from './styles'
const Produtos = () => {
  const { data: jogos } = useGetCarrinhoQuery()

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
