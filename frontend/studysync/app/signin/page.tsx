import AuthForm from "@/components/AuthForm";

const page = ({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const mode: string | string[] | undefined  = searchParams.mode || 'login';

    

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <AuthForm mode={mode} />

    </main>
  )
}

export default page