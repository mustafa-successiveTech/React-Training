import React from "react";

export default function withDataFetching(WrappedComponent: any) {
  return function ServerWrappedComponent({ data }) {
    return <WrappedComponent data={data} />;
  };
}
