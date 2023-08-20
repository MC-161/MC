import { TitleWithUnderlineProps } from "../types/types";

const TitleWithLongUnderline = ({ title, size, width }:TitleWithUnderlineProps) => {
  return (
    <div className="title-container flex flex-col items-center">
      <h2 className={size}>{title}</h2>
      <div className={`underline -mt-2 h-[1px] bg-white ${width}`}></div>
    </div>
  );
};

export default TitleWithLongUnderline;
