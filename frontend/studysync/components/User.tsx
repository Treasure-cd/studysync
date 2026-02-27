'use client'

import { useAuth } from "@/context/AuthProvider";

const User = () => {

  const { user } = useAuth();



  return (
    <div>{user? user?.user.username: "No User"}</div>
  )
}

export default User