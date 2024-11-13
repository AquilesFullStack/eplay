import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product category="Ação" description="teste" image="//placeholder.co/222x250" infos={['-10%', 'R$150']} system='windows' title='Nome do jogo'/>
        <Product category="Ação" description="teste" image="//placeholder.co/222x250" infos={['-10%', 'R$150']} system='windows' title='Nome do jogo'/>
        <Product category="Ação" description="teste" image="//placeholder.co/222x250" infos={['-10%', 'R$150']} system='windows' title='Nome do jogo'/>
        <Product category="Ação" description="teste" image="//placeholder.co/222x250" infos={['-10%', 'R$150']} system='windows' title='Nome do jogo'/>
      </List>
    </div>
  </Container>
)

export default ProductsList