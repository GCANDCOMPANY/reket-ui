'use client';

import React from 'react';

interface Props {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const TextInput = ({ text, onClick }: Props): JSX.Element => {
  return <div onClick={onClick}>{text}</div>;
};

export default TextInput;
