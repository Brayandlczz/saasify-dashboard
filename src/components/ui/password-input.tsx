"use client";

import { useState, InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function PasswordInput({ className = "", ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative mt-2">
      <input
        {...props}
        type={show ? "text" : "password"}
        className={`
          w-full
          rounded-lg
          border
          border-zinc-300
          bg-white
          px-3
          py-2
          pr-10
          text-sm
          text-zinc-950
          outline-none
          transition-colors
          placeholder:text-zinc-400
          focus:border-zinc-950
          ${className}
        `}
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 hover:text-zinc-950 transition-colors"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}