import { useMutation } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { useAtom } from 'jotai'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

import { Account } from './types'
import { loginAsync } from './api'
import { Admin } from '../../types/Admin'
import { userAtom } from './atoms'
import { toggleAtom } from '../../atoms'
import { SearchOffOutlined } from '@mui/icons-material'

export const Login = () => {
  const [, setUser] = useAtom(userAtom)
  const [, setToggle] = useAtom(toggleAtom)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Account>()

  const mutation = useMutation<Admin, Error, Account, unknown>({
    mutationFn: ({ username, password }: Account) =>
      loginAsync({ username, password }),
    onSuccess: (data: Admin) => {
      const { phone, ...rest } = data
      setUser(JSON.stringify(rest))
    },
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
        border: '1px whitesmoke solid',
        borderRadius: '10px',
        padding: '0px 20px 20px 20px',
        margin: '15% auto 0px',
        fontFamily: 'Outfit',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <h1>Login</h1>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            size="small"
            style={{ marginBottom: '10px' }}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            style={{ marginBottom: '10px' }}
            {...field}
          />
        )}
      />
      <LoadingButton
        variant="contained"
        onClick={handleSubmit((data) => mutation.mutate(data))}
        loading={mutation.isLoading}
      >
        Login
      </LoadingButton>
      {mutation.isError && (
        <h5>
          {mutation.error.message.includes('(or no)')
            ? 'User Not Found'
            : 'Something went wrong!'}
        </h5>
      )}
    </div>
  )
}
