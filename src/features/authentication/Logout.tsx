import { useAtom } from 'jotai'
import Button from '@mui/material/Button'

import { userAtom } from './atoms'

function Logout() {
  const [, setUser] = useAtom(userAtom)
  return (
    <div>
      <Button variant="contained" onClick={() => setUser('')} size="small">
        Logout
      </Button>
    </div>
  )
}

export default Logout
