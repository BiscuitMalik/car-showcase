"use client"
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Transition, Listbox } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, option }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(option[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="w-fit relative z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="chevron-up-down.svg"
              alt="button"
              width={20}
              height={20}
              className="ml-4 object-container"
            />
            <Transition
              as={Fragment}
              leave="ease-in duration-100 transition"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="custom-filter__options">
                {option.map((opt) => (
                  <Listbox.Option
                    key={opt.title} value={opt}
                    className={({ active }) => `relative px-2 py-2 cursor-default select-none ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} >
                    {({ active, selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : 'font-normal'}`}>
                          {opt.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
