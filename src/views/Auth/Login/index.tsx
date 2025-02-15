import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./Login.module.scss"

const LoginViews = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product")
  };
  return (
    <div className={styles.login}>
      <h1 className='text-3xl'>Login</h1>
      <button onClick={() => handleLogin()}>Login </button>
      <p style={{ color: "red" }}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div >
  )
}

export default LoginViews