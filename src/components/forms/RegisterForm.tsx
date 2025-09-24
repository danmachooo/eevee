import React, { useState } from "react";
import { Mail, Lock, User, Chrome } from "lucide-react";
import { Button } from "../ui/auth/Button";
import { Card } from "../ui/auth/Card";
import { Input } from "../ui/auth/Input";
import { OAuthButton } from "../ui/auth/OAuthButton";
import { Divider } from "../ui/auth/Divider";

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSwitchToLogin,
  onGoogleLogin,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (): Promise<void> => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (could set form-level error state)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Create account
        </h1>
        <p className="text-gray-600">
          Get started with your free account today
        </p>
      </div>

      <div className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          icon={User}
          disabled={isLoading}
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={Mail}
          disabled={isLoading}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={Lock}
          disabled={isLoading}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          icon={Lock}
          disabled={isLoading}
          required
        />

        <div className="flex items-start">
          <input
            type="checkbox"
            className="mt-1 rounded border-gray-300"
            required
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the{" "}
            <button type="button" className="text-black hover:underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button type="button" className="text-black hover:underline">
              Privacy Policy
            </button>
          </span>
        </div>

        <Button
          onClick={handleSubmit}
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </div>

      <div className="mt-6">
        <Divider text="or" />
      </div>

      <div className="mt-6">
        <OAuthButton
          provider="Google"
          icon={Chrome}
          onClick={onGoogleLogin}
          disabled={isLoading}
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            className="text-black hover:underline font-medium"
            onClick={onSwitchToLogin}
          >
            Sign in
          </button>
        </p>
      </div>
    </Card>
  );
};
