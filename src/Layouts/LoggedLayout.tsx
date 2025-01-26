import { useEffect, useState, ReactNode } from "react"
import { Outlet } from 'react-router'

interface ILoggedLayout {
    children?: ReactNode,
    currentUser?: any | undefined
};
const LoggedLayout = ({ children, currentUser } : ILoggedLayout) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
        setTimeout(() => {
            setIsLoading(true);
        }, 500)
    }
  }, []);

  return (
    <div className="flex h-screen">{children ? children : <Outlet />}</div>
  );
};

export default LoggedLayout;
