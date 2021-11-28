import React, { FC } from 'react';

// mui
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

interface InputFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputField: FC<InputFieldProps> = ({ onChange, value }) => {
  return (
    <div id='filter-field'>
      <h3>Filter by keywords</h3>
      <TextField
        id='input-with-icon-adornment'
        placeholder='Filter'
        className='input-field'
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default InputField;
