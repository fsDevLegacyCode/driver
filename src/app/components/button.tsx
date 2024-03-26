import React from "react";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  className?: string; // Optional className prop
}

interface ButtonLink {
  btnText: string;
  className?: string; // Optional className prop
}

const Button: React.FC<ButtonProps> = ({ btnText, onClick, className }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
        {btnText}
      </button>
    </div>
  );
};

const ButtonLink: React.FC<ButtonLink> = ({ btnText, className }) => {
  return (
    <div>
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
        {btnText}
      </button>
    </div>
  );
};

export { Button, ButtonLink };
