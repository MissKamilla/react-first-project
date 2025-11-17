import { useEffect } from "react";
const UnmountComponent = () => {
  useEffect(() => {
    return () => {
      console.log("ComponentWillUnmount useEffect");
    };
  }, []);

  return <div>Unmount Component</div>;
};

export default UnmountComponent;
