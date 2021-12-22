import { ButtonPix } from './styles';

import { GrCopy } from 'react-icons/gr';

interface IPixCode {
  code: string;
}


export function PixCode(props: IPixCode) {
  function copyPixCode() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <div>
      <ButtonPix onClick={copyPixCode}>
        {props.code && (
          <div>
            <p className='primary-color'>Pix Code</p>
            <p>{props.code}</p>
            <GrCopy style={{ fontSize: '30px' }} />
          </div>
        )}
      </ButtonPix>
    </div>
  )
}