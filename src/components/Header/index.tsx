import { HeaderBar, Links, LinkItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Categorias</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Novidades</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Promoções</a>
        </LinkItem>
      </Links>
    </nav>
    <a href='#'>
      0 - produtos
      <img src={carrinho} alt="Carrinho" />
    </a>
  </HeaderBar>
)

export default Header
