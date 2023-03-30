import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Column, Row } from 'components/layout/flex';
import { Bold14x21, Medium14x21 } from 'components/typography';

type DestinationInputProps = {
  destinationAddressValue: string;
  setDestinationAddressValue: (value: string) => void;
};
export const DestinationInput: React.FC<DestinationInputProps> = ({
  destinationAddressValue,
  setDestinationAddressValue,
}) => {
  const theme = useTheme();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setDestinationAddressValue(text);
    } catch (err) {
      console.error('Failed to paste content: ', err);
    }
  };

  return (
    <DestinationInputLayout gap={'8px'}>
      <Row alignItems={'center'} justifyContent={'space-between'}>
        <Medium14x21 fontColor={theme.palette.gray}>TO</Medium14x21>

        <PasteButton fontColor={theme.palette.gray} onClick={handlePaste}>
          PASTE
        </PasteButton>
      </Row>

      <Input
        value={destinationAddressValue}
        placeholder={'Wallet address'}
        onChange={(e: any) => setDestinationAddressValue(e.target.value)}
      />
    </DestinationInputLayout>
  );
};

const PasteButton = styled(Bold14x21)`
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.palette.white};
  }
`;

const DestinationInputLayout = styled(Column)`
  height: 169px;
  background-color: ${({ theme }) => theme.palette.secondaryBackground};
  border-radius: 16px;
  padding: 16px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.palette.white};
  outline: none;
  text-align: left;
  font-family: inherit;
  background-color: transparent;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.palette.gray};
    opacity: 1; /* Firefox */

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;
