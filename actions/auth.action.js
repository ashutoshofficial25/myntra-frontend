export const loginuser = (email, password) => {
  if (!email || !password) {
    return "";
  }

  if (email === "admin@example.com" && password === "123456") {
    return {
      isAdmin: false,
      role: "admin",
      username: "Admin Account",
    };
  }
  if (email === "vendor@example.com" && password === "123456") {
    return {
      isAdmin: false,
      role: "vendor",
      username: "Vendor Account",
    };
  }

  return {
    isAdmin: false,
    role: "user",
    username: "User Account",
  };
};
