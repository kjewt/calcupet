interface InputProps {
  width?: string,
  placeholder?: string,
  inputLabel?: string,
  inputLabelPosition?: string,
  warning?: string,
  type?: string,
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  name?: string,
}


export const Input = (props: InputProps) => {
  const {
    onInputChange,
    value,
    width = "w-full",
    placeholder = "",
    inputLabel = " ",
    inputLabelPosition = "",
    warning = "",
    type = "text",
    name = ""
  } = props;

  return (
    <>
      <div className="flex flex-col px-4">
        <label className={`text-base pl-2 mt-4 ${inputLabelPosition}`}>{inputLabel}</label>
        <input
          type={type}
          onChange={onInputChange}
          placeholder={placeholder}
          className={`input input-bordered input-primary max-w-sm m-2 placeholder:text-base ${width}`}
          name={name}
          value={value} />
        <p className='text-sm pl-2 mt-0 text-error'>{warning}</p>
      </div>
    </>
  );
}
