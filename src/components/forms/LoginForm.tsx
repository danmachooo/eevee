import React, { useState } from "react";
import { Mail, Lock, Chrome } from "lucide-react";
import { Button } from "../ui/auth/Button";
import { Card } from "../ui/auth/Card";
import { Input } from "../ui/auth/Input";
import { OAuthButton } from "../ui/auth/OAuthButton";
import { Divider } from "../ui/auth/Divider";

export const LoginForm: React.FC<LoginFormProps> = ({
  onSwitchToRegister,
  onGoogleLogin,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
      console.error("Login error:", error);
      // Handle error (could set form-level error state)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-600">Sign in to your account to continue</p>
      </div>

      <div className="space-y-6">
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
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={Lock}
          disabled={isLoading}
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-black hover:underline">
            Forgot password?
          </button>
        </div>

        <Button
          onClick={handleSubmit}
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
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
          Don't have an account?{" "}
          <button
            type="button"
            className="text-black hover:underline font-medium"
            onClick={onSwitchToRegister}
          >
            Sign up
          </button>
        </p>
      </div>
    </Card>
  );
};
