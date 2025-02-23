import React, { useState } from 'react'
import InputField from '../common/Inputfiled'
import { useQuery } from '@tanstack/react-query'

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    avartar: "",
  })

  useQuery({
    queryKey : ""
  })

  return (
    <form onSubmit={ }>
      <InputField
        id="avatar"
        name="avatar"
        value={formData.avatar}
      />
    </form>
  )
}

export default UpdateProfile