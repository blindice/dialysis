import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import { addPatientAsync } from './api'
import { Patient } from './types'

function AddPatient() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const mutation = useMutation({ mutationFn: addPatientAsync })

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => mutation.mutate(data as Patient))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <Controller
          name="first_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.first_name ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="middle_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Middlename"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.middle_name ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.last_name ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              label="Phone"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.phone ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              label="Age"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.age ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-select-currency"
              select
              label="Gender"
              defaultValue="male"
              error={errors.gender ? true : false}
              size="small"
              style={{ marginBottom: '10px' }}
              {...field}
            >
              <MenuItem key="male" value="male">
                Male
              </MenuItem>
              <MenuItem key="female" value="female">
                Female
              </MenuItem>
            </TextField>
          )}
        />
        <Controller
          name="blood_type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Blood Type"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.blood_type ? true : false}
              {...field}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              size="small"
              style={{ marginBottom: '10px' }}
              error={errors.address ? true : false}
              {...field}
            />
          )}
        />
        <Button variant="contained" type="submit" size="small">
          Add
        </Button>
      </form>
    </div>
  )
}

export default AddPatient
