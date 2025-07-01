'use client';
import { useEffect, useRef } from 'react';

const withLogger = (WrappedComponent) => {
  return function LoggerWrapper(props) {
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

export default withLogger;
