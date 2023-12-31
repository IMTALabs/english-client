import { typoProps } from "./model";

function ErrorText({className, children}: typoProps) {
  return <p className={`text-center  text-error ${className}`}>{children}</p>;
}

export default ErrorText;
