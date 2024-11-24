

export default function validatePasswordStrength(password: string) {
    const errors: string[] = [];
  
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push("Password must contain at least one digit.");
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      errors.push("Password must contain at least one special character (@$!%*?&).");
    }
  
    if (errors.length > 0) {
      return { valid: false, messages: errors };
    } else {
      return { valid: true, messages: ["Password is valid."] };
    }
  }