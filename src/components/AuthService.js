export const login = (email, password) => {
  // Perform authentication logic here
  return new Promise((resolve, reject) => {
    // Simulate API call or async task
    setTimeout(() => {
      const dummyUser = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      };

      // Simulate successful login
      if (email === dummyUser.email && password === "password") {
        resolve(dummyUser);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000); // Simulate delay
  });
};
