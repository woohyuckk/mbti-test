import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../api/auth"
import UpdateProfile from "../components/profile/UpdateProfile"

const Profile = () => {
  const { data: profile } = useQuery({
    queryKey: ["myInfo"],
    queryFn:getUserProfile
  })

  return (
    <div className="bg-white max-w-md min-w-[300px] mx-auto p-8 shadow-lg rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">프로필 수정</h1>
      <p>닉네임 : {profile?.nickname}</p>
      <UpdateProfile/>
  </div>
  )
}

export default Profile