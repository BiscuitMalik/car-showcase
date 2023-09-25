import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handlerClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
}

export interface SearchManufactureProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  year: number;
  fuel: string;
  limit: number;
  model: string;
  manufacturer: string;
}

export interface CustomFilterProps{
title :string ,
option : OptionProps[]
}

export interface OptionProps{
title : string,
value : string
}