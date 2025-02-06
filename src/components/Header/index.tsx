import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link title="Clique aqui para acessar a página de Categorias" to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <HashLink title="Clique aqui para acessar a página de Novidades" to="/#coming-soon">Novidades</HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink title="Clique aqui para acessar a página de Promoções" to="/#on-sale">Promoções</HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span>- produtos</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link title="Clique aqui para acessar a página de Categorias" to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <HashLink title="Clique aqui para acessar a página de Novidades" to="/#coming-soon">Novidades</HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink title="Clique aqui para acessar a página de Promoções" to="/#on-sale">Promoções</HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
