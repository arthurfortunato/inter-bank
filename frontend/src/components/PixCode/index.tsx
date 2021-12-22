import { ButtonPix } from './styles';

import { GrCopy } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';

interface IPixCode {
  code: string;
}


export function PixCode(props: IPixCode) {
  function copyPixCode() {
    navigator.clipboard.writeText(props.code);
    toast.success('Código Copiado!')
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
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </div>
  )
}