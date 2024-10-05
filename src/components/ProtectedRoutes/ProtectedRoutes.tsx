import { useAuth } from '@/context/AuthContext';
import { axiosInstance } from '@/utils/libs/axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  const [cookies] = useCookies(['access_token']);

  useEffect(() => {
    if (isAuthenticated) {
      axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${cookies.access_token}`;
        return config;
      });
    }
  }, [isAuthenticated, cookies.access_token]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
