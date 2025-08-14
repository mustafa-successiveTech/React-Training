'use client';
import { Component, useEffect, useRef } from 'react';

export default function withLogger<P>(WrappedComponent : React.ComponentType<P>) {
  return function LoggerWrapper(props : P) {
    const hasMounted = useRef(false);

    useEffect(() => {
      console.log(`[Logger] ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`[Logger] ${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      if (hasMounted.current) {
        console.log(`[Logger] ${WrappedComponent.name} updated`);
      } else {
        hasMounted.current = true;
      }
    });

    return <WrappedComponent {...props} />;
  };
};

