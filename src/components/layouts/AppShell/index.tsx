import { useRouter } from 'next/router';
import NavBar from '../NavBar'

type AppShellProps = {
  children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]

const AppShell = (props: AppShellProps) => {
  const { children } = props
  const { pathname } = useRouter();
  return (
    <div>
      {!disableNavbar.includes(pathname) && <NavBar />}
      {children}
    </div>
  )
}

export default AppShell