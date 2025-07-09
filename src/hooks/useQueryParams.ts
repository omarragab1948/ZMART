import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleMultipleParams = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  const handleParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    const currentValues = searchParams.getAll(key);
    if (currentValues.includes(value)) {
      const filterd = currentValues.filter((v) => v !== value);
      newParams.delete(key);
      filterd.forEach((e) => {
        newParams.append(key, e);
      });
    } else {
      newParams.append(key, value);
    }
    setSearchParams(newParams);
  };
  const getParamValue = (key: string) => {
    return searchParams.get(key);
  };

  return {
    handleParams,
    handleMultipleParams,
    queryParams: Object.fromEntries(searchParams.entries()),
    getParamValue,
    raw: searchParams,
  };
};

export default useQueryParams;
