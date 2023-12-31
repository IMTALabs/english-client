import { typoProps } from "./model";

function Title({className, children}: typoProps) {
  return <p className={`text-2xl font-bold  ${className}`}>{children}</p>;
}

export default Title;
