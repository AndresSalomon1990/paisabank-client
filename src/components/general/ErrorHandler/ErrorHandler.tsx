import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  errorMessage: string;
}

// TODO: style this error handler
const ErrorHandler = ({ children, errorMessage }: Readonly<Props>) => {
  return errorMessage ? <p className="text-red-500">{errorMessage}</p> : children;
};

export default ErrorHandler;
