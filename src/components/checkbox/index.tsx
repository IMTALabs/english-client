interface CheckboxProps {
    id?: string;
    value?: string;
    name?: string;
    checked?: boolean;
    onChange?: () => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ id, value, checked, onChange }) => (
    <div
        id={id}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className={`custom-checkbox ${checked ? 'checked' : ''}`}
        onClick={onChange}
    >
        {checked ? '✔' : ''}
        <label htmlFor={id}>{value}.</label>
    </div>
);



export default CustomCheckbox;