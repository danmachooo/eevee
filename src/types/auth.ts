interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  required?: boolean;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DividerProps {
  text: string;
}

interface OAuthButtonProps {
  provider: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  onClick: () => void;
  disabled?: boolean;
}

interface AuthLayoutProps {
  children: React.ReactNode;
}

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onGoogleLogin: () => void;
  onSubmit: (data: LoginFormData) => Promise<void>;
}

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onGoogleLogin: () => void;
  onSubmit: (data: RegisterFormData) => Promise<void>;
}
