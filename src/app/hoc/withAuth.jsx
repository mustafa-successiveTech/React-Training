'use client';
import { useAuth } from '../assignment5/question14/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/assignment5/question14/login'); 
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) return null; 

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
