export const checkValidateData = (email, password, name) => {
  // Validate email format
  const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Validate password: at least 8 characters, 1 lowercase, 1 uppercase, and 1 digit
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Validate name: at least 2 characters, only alphabets and spaces
  const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name);

  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid)
    return "Password must be at least 8 characters, contain 1 lowercase letter, 1 uppercase letter, and 1 number";
  if (!isNameValid)
    return "Name must contain only alphabets and be at least 2 characters long";

  return null; // No validation errors
};
