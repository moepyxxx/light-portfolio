import { useId } from "react";

import { tv } from "tailwind-variants";

const textBoxStyle = tv({
  base: "mt-1 p-3 border border-solid border-deep-gray rounded max-w-80 w-full px-3 py-2",
  variants: {
    disabled: {
      true: "text-deep-gray",
    },
  },
});

type Props = {
  onChange: (text: string) => void;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  inputType: "text" | "password";
};

// eslint-disable-next-line react/display-name
export const TextBox: React.FC<Props> = ({
  label,
  required,
  disabled,
  errorMessage,
  inputType,
  onChange,
  ...restArgs
}) => {
  const uniqueId = useId();
  return (
    <div className="my-4 relative">
      <input
        {...restArgs}
        id={uniqueId}
        type={inputType}
        aria-invalid={errorMessage ? true : false}
        aria-describedby={`${uniqueId}-error`}
        className={`${textBoxStyle({ disabled })}`}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
