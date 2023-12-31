import { typoProps } from "./model";

function Subtitle({className, children}: typoProps) {
  return (
    <div className={`text-xl font-semibold ${className}`}>{children}</div>
  );
}

export default Subtitle;
