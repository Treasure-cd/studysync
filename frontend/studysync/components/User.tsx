'use client'

import { getMe } from "@/app/actions/user";
import { useEffect, useState } from "react";
const User = () => {

    const [user, setUser] = useState();
useEffect(() => {
    const fetchUser = async () => {
        const userObject = await getMe();
        setUser(userObject);
    };

    fetchUser();
}, []);


  return (
    <div>{user? user.user.email: "No user"}</div>
  )
}

export default User