import { ReactNode } from "react"
import HomePage from "../Pages/HomePage"
import { Outlet } from 'react-router'

interface ILogged {
    children: ReactNode,
};

const Layout = ({ children }: ILogged) => {
  return <div>{children ? children : <Outlet />}</div>;
};

export default Layout