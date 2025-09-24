"use client";

import React, { useState } from "react";
import AuthLayout from "./layout";
import { LoginForm } from "../../components/forms/LoginForm";
import { RegisterForm } from "../../components/forms/RegisterForm";

type AuthView = "login" | "register";

export default function AuthPage() {
  const [currentView, setCurrentView] = useState<AuthView>("login");

  const handleLogin = async (formData: LoginFormData): Promise<void> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Login data:", formData);
    alert("Login successful! (Demo)");
  };

  const handleRegister = async (formData: RegisterFormData): Promise<void> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Register data:", formData);
    alert("Registration successful! (Demo)");
  };

  const handleGoogleLogin = (): void => {
    console.log("Google OAuth initiated");
    alert("Google OAuth login would be implemented here");
  };

  const switchToRegister = (): void => setCurrentView("register");
  const switchToLogin = (): void => setCurrentView("login");

  return (
    <AuthLayout>
      {currentView === "login" ? (
        <LoginForm
          onSwitchToRegister={switchToRegister}
          onGoogleLogin={handleGoogleLogin}
          onSubmit={handleLogin}
        />
      ) : (
        <RegisterForm
          onSwitchToLogin={switchToLogin}
          onGoogleLogin={handleGoogleLogin}
          onSubmit={handleRegister}
        />
      )}
    </AuthLayout>
  );
}
