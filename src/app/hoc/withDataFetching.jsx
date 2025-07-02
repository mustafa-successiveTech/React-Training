import React from 'react';

export default function withDataFetching(WrappedComponent) {
  return function ServerWrappedComponent({ data }) {
    return <WrappedComponent data={data} />;
  };
}
