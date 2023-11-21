import { CaretLeft, DotsThreeVertical } from '@phosphor-icons/react'
import './styles.scss';

export function Header({ title, toggleMenu }) {
  return (
    <header>
      <div className='arrow'>
        <CaretLeft size={32} weight='bold' />
      </div>
      <h1>{title}</h1>
      <div className='menu'>
        <DotsThreeVertical size={32} weight='bold' onClick={toggleMenu} />
      </div>
    </header>
  )
}