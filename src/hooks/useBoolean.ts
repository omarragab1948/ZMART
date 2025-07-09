import { useState } from "react";

const useBoolean = () => {
  const [status, setStatus] = useState(false);
  const onTrue = () => {
    setStatus(true);
  };
  const onFalse = () => {
    setStatus(false);
  };
  return {
    value: status,
    onTrue,
    onFalse,
  };
};

export default useBoolean;
