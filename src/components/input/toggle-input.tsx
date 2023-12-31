import {useState} from 'react';

interface ToogleInputProps { 
    labelTitle?: string;
    labelStyle?: string;
    containerStyle?: string;
    defaultValue?:  boolean;
    updateFormValue?: (val: any) => void;
    updateType?: string;
}

function ToogleInput({
  labelTitle,
  labelStyle,
  containerStyle,
  defaultValue,
  updateFormValue,
  updateType,
}: ToogleInputProps) {
  const [value, setValue] = useState(defaultValue);

  const updateToogleValue = () => {
    setValue(!value);
    updateFormValue?.({updateType, value: !value});
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={'label-text text-base-content ' + labelStyle}>
          {labelTitle}
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={updateToogleValue}
        />
      </label>
    </div>
  );
}

export default ToogleInput;
