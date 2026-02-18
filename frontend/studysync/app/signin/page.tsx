import AuthForm from "@/components/AuthForm";

const page = async ({ searchParams }: {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) => {

  const fetchedSearchParams = await searchParams;
  const mode: string | string[] | undefined  = fetchedSearchParams.mode || 'login';

    

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <AuthForm mode={mode} />

    </main>
  )
}

export default page