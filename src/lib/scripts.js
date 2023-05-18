export const checkEnvironment = () => {
    let base_url =
      process.env.NEXT_PUBLIC_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_WEBSITE_URL; // https://v2ds.netlify.app
  
    return base_url;
  };