import  { useState } from 'react'
import InputField from '../common/Inputfiled'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '../../api/auth'

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    avartar: "",
  })
  
  const queryClient = useQueryClient();

  const {mutate : updateProfileNickname} = useMutation({
    mutationFn: () => updateProfile(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["myInfo"]);
    }
  })

  const onChangeHandler = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
    
  }
  



  

  const onSubmitHandler = (e) => {
    e.preventDefault();

    updateProfileNickname(formData)
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
      <InputField
        id="nickname"
        name="nickname"
        placeholder="닉네임을 입력해 주세요."
        value={formData.nickname}
        onChange={onChangeHandler}
      />
      <button type="submit"> 변경</button>
    </form>
  )
}

export default UpdateProfile