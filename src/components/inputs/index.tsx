//todo Import packages
import { ChangeEvent, useState } from "react";

//todo Import mui
import { IconButton, InputAdornment, TextField } from "@mui/material";

//todo Import icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//todo Import components
import { Form, PasswordLabel } from "../../components";

interface CustomSearchProps {
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

interface CustomPasswordProps {
  id?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

//! ----------------------------------------------------------------------

export const Search = (props: CustomSearchProps) => {
  const { onChange, handleSubmit, value, placeholder, className } = props;

  return (
    <Form onSubmit={handleSubmit} className="w-auto h-auto">
      <TextField
        type="search"
        size="small"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BsSearch className="box-content pl-4" />
            </InputAdornment>
          ),
        }}
        className={
          "min-w-[400px] h-full text-inherit bg-inherit p-inherit " + className
        }
      />
    </Form>
  );
};

//! ----------------------------------------------------------------------

export const Password = (props: CustomPasswordProps) => {
  const { id, name, value, onChange, placeholder } = props;

  const [show, setShow] = useState<boolean>(false);

  return (
    <PasswordLabel htmlFor={id}>
      <input
        id={id}
        required
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={show ? "text" : "password"}
      />
      <IconButton
        onClick={() => {
          setShow((prev: boolean) => !prev);
        }}
        className="w-[3rem] h-[3rem] mr-3"
      >
        {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </IconButton>
    </PasswordLabel>
  );
};
