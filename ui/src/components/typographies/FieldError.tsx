import React from "react";

interface FieldErrorProps {
  text: string;
}

const FieldError: React.FC<FieldErrorProps> = ({ text }) => {
  return <p className="ml-1 text-red-600">{text}</p>;
};

export default FieldError;
