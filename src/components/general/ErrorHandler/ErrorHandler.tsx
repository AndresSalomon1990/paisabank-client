import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  errorMessage: string;
}

// This component is used to display errors in a more user-friendly way
// And to control the state of the error in the component, preventing to crash the app
// TODO: style this error handler
const ErrorHandler = ({ children, errorMessage }: Readonly<Props>) => {
  return errorMessage ? <p className="text-red-500">{errorMessage}</p> : children;
};

export default ErrorHandler;
