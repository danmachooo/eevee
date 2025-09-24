import React from "react";
import { Button } from "./Button";

export const OAuthButton: React.FC<OAuthButtonProps> = ({
  provider,
  icon: Icon,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      variant="outline"
      size="md"
      className="w-full"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={16} className="mr-2" />
      Continue with {provider}
    </Button>
  );
};
