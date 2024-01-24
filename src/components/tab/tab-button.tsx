import React from 'react';

export interface TabButtonProps {
  tabTitle: string;
  onClick: () => void;
  containerStyle?: string;
  isActive?: boolean;
}

const TabButton = ({
  tabTitle,
  onClick,
  containerStyle,
  isActive,
}: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` btn text-center rounded-md ${containerStyle} ${
        isActive
          ? 'bg-secondary hover:bg-secondary text-white'
          : 'text-gray-500 border'
      }`}>
      <span className="font-medium">{tabTitle}</span>
    </button>
  );
};

export default TabButton;
