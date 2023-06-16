export const login = async (req, res) => {
  const { username, password } = req.body;

  // Here you can check if the provided username and password are correct
  // For this example, we'll assume that the only valid username is "admin" and the only valid password is "password"
  if (username === "admin" && password === "password") {
    res.send({ success: true }).status(200);
  } else {
    res.send({ success: false });
  }
};
