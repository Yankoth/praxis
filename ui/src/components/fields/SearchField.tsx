import React from "react";
import { Search, X } from "lucide-react";
import { useFormContext } from "react-hook-form";
import FieldError from "../typographies/FieldError";

interface SearchFieldProps {
  name: string;
  required?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  name,
  required,
  maxLength,
  autoFocus,
}) => {
  const {
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useFormContext();

  const handleClear = async () => {
    await reset({ [name]: "" }, { keepIsSubmitted: true });
    setFocus(name);
  };

  return (
    <div className="py-3">
      <div className="relative w-full text-gray-600 mb-1">
        <input
          type="text"
          className="w-full h-10 px-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          autoFocus={autoFocus}
          {...register(name, { required, maxLength })}
        />
        <div className="absolute top-0 left-0 mt-3 ml-3">
          <Search size={18} />
        </div>
        <div className="absolute top-0 right-0 mt-3 mr-3">
          <X className="cursor-pointer" onClick={handleClear} size={18} />
        </div>
      </div>
      {errors[name]?.type === "required" && (
        <FieldError text="Type something to search." />
      )}
      {errors[name]?.type === "maxLength" && (
        <FieldError text="You typed too much, try less." />
      )}
    </div>
  );
};

export default SearchField;
