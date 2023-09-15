import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handlerClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufactureProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
