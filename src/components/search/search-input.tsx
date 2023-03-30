import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../libs/hooks/use-debounce';

const Input = styled.input`
  background-color: transparent;

  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  color: #ffffff;

  margin-left: 12px;
  width: 100%;

  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #7d7d7d;
    opacity: 1; /* Firefox */

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;

type SearchProps = {
  handleSearch: (v: string) => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  placeholder?: string;
};

export const Search: React.FC<SearchProps> = ({
  handleSearch,
  handleFocus,
  handleBlur,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>(``);
  const debounced = useDebounce(value, 300);

  const handleChange = (e: any) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    const input = inputRef.current;
    if (input && handleFocus && handleBlur) {
      input.addEventListener(`focus`, handleFocus);
      input.addEventListener(`blur`, handleBlur);
    }

    return () => {
      if (input && handleFocus && handleBlur) {
        input.removeEventListener(`focus`, handleFocus);
        input.removeEventListener(`blur`, handleBlur);
      }
    };
  }, [inputRef, handleFocus, handleBlur]);

  useEffect(() => {
    handleSearch(debounced);
  }, [debounced]);

  return <Input onChange={handleChange} value={value} placeholder={placeholder} ref={inputRef} />;
};
