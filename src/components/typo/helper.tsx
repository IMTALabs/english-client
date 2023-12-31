import { typoProps } from "./model";

function HelperText({className, children}: typoProps) {
  return <div className={`text-slate-400 ${className}`}>{children}</div>;
}

export default HelperText;
