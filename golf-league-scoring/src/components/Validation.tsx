// export const validateEmail = (email: string): boolean => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };
  
//   export const validatePassword = (password: string): boolean => {
//     // At least one number, one lowercase and one uppercase letter
//     // At least six characters
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
//   };
  
//   export const validatePhoneNumber = (phoneNumber: string): boolean => {
//     // Validates most international phone numbers
//     return /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{1,3})[-. ]?([0-9]{4,})$/.test(phoneNumber);
//   };
  
//   export const validateURL = (url: string): boolean => {
//     try {
//       new URL(url);
//       return true;
//     } catch (_) {
//       return false;
//     }
//   };
  
//   export const validateName = (name: string): boolean => {
//     // Basic validation for names (allow letters, hyphens, and spaces)
//     return /^[A-Za-z\s-]+$/.test(name);
//   };
  
//   export const validateDateOfBirth = (dateOfBirth: string): boolean => {
//     const dob = new Date(dateOfBirth);
//     const today = new Date();
//     return dob <= today;
//   };
  