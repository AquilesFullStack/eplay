import Button from '../Button'

import starWars from '../../assets/images/starwars.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { remove } from '../../store/reducers/cart'
import { formatPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closedCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closedCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity> {items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {formatPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          title="clique aqui para continuar com a compra"
          type="button"
          variant={'primary'}
        >
          Continue com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
