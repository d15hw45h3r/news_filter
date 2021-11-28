import React, { FC } from 'react';

// mui
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputField: FC<InputFieldProps> = ({ onChange, value }) => {
  return (
    <div>
      <h3>Filter by keywords</h3>
      <Input
        id='input-with-icon-adornment'
        placeholder='Filter'
        className='input-field'
        value={value}
        onChange={onChange}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default InputField;
