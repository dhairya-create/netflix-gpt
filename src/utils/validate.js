export const checkValidData = (email, password, name, isSignInForm) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isSignInForm && (!name || name.trim() === "")) return "Name is required"; // Validate name if it's not a sign-in form and name is missing or empty

    return null;
};
