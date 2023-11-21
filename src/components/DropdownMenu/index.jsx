import { MinusCircle, UploadSimple, AlignCenterHorizontalSimple, Clipboard } from '@phosphor-icons/react';
import './styles.scss';

export function DropdownMenu() {
  return (
    <div className="dropdown-container">
      <ul>
        <li>
          Edit
          <AlignCenterHorizontalSimple size={32} />
        </li>
        <li>
          Courier Info
          <Clipboard size={32} />
        </li>
        <li>
          Share
          <UploadSimple size={32} />
        </li>
        <li>
          Remove
          <MinusCircle size={32} />
        </li>
      </ul>
    </div>
  )
}