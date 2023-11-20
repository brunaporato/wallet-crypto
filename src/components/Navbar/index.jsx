import { CaretLeft, DotsThreeVertical } from '@phosphor-icons/react'
import './styles.scss';

export function Navbar() {
  return (
    <navbar>
      <div className='arrow'>
        <CaretLeft size={32} weight='bold' />
      </div>
      <h1>Bitcoin Wallet</h1>
      <div className='menu'>
        <DotsThreeVertical size={32} weight='bold' />
      </div>
    </navbar>
  )
}