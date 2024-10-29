const useHome = () => {
  const year = new Date().getFullYear();

  return {
    year,
  };
};

export default useHome;
