import { ReactNode } from "react"
import { Outlet } from 'react-router'

interface ILogged {
    children?: ReactNode,
};

const Layout = (props: ILogged) => {
  console.log('layout')
  return <div>{props.children ? props.children : <Outlet />}</div>;
};

export default Layout