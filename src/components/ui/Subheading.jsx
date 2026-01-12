import { cn } from "@/lib/utils";
import React from "react";

const Subheading = ({ children, className }) => {
  return (
    <>
      <p
        className={cn("text-md font-normal text-zinc-700 dark:text-neutral-300", className)}
      >
        {children}
      </p>
    </>
  );
};

export default Subheading;
