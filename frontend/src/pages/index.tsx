import type { NextPage } from "next"
import { signIn, useSession } from "next-auth/react"

const Home: NextPage = () => {
  const {data} = useSession();
  console.log("Here is data", data)

  return (
    <>
      <button onClick={() => signIn("google")}>Sign In</button>
      <p>{data?.user?.name}</p>
    </>
  )
}

export default Home;