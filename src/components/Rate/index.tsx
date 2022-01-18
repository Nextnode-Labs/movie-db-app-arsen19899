import { useState } from 'react'
import Button from 'react-bootstrap/Button'

type Props = {
  callback: (value: string) => void
}

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setvalue] = useState('5')
  return (
    <>
        <div>
            <input
                type='range'
                min='1'
                max='10'
                value={value}
                onChange={e => setvalue(e.currentTarget.value)}
            />
            {value}
            <p>
                <Button variant="danger" onClick={() => callback(value)}>Rate</Button>
            </p>
        </div>
    </>
  )
}

export default Rate
