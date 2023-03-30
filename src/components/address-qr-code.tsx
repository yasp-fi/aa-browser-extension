import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

type EthereumQRCodeProps = {
  address: string;

  iconSrc?: string;
};

const QRCodeWrapper = styled.div`
  width: 132px;
  height: 132px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressQRCode: React.FC<EthereumQRCodeProps> = ({ address, iconSrc }) => {
  return (
    <QRCodeWrapper>
      <QRCode
        value={address}
        size={132}
        bgColor={'transparent'}
        fgColor={'white'}
        imageSettings={
          iconSrc
            ? {
                src: iconSrc,
                height: 32,
                width: 32,
                excavate: true,
              }
            : undefined
        }
      />
    </QRCodeWrapper>
  );
};
