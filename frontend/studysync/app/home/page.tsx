import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import User from '@/components/User';

const page = async() => {

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value
  if (!token) redirect('/login');

  console.log(token);



  return (
    <div>
        <h1>Homepage</h1>
        <p>Hello bitch</p>
        <User />
    </div>
  )
}

export default page