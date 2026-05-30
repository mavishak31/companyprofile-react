import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-35 lg:px-35'>{children}</div>
  );
};

export default Container;
