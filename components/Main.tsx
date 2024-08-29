"use client";
 import React, {useState } from "react";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
 
const placeholders = [
    "Delhi",
    "Bengaluru",
    "Jaipur",
    "Kolkata",
    "Hydrabad",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

const Main = () => {
   
  return (
    <div className="w-full grid justify-items-center">
      <h2 className="text-white">
        Plan Your Trip
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Main