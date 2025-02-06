"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  password?: boolean;
  error?: string;
}
  

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, password, id, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="flex flex-col w-full gap-2">
        {label && (
          <label
            className="text-sm font-semibold"
            htmlFor={id}
          >
            {label}
          </label>
        )}    
        <div className={`w-full border ${error ? 'border-rose-500' : "border-app_primary"} rounded-md text-sm relative`}>
          <input
            id={id}
            type={password ? (showPassword ? "text" : "password") : type}
            className={cn(
              "w-full px-4 py-2 bg-transparent",
              className
            )}
            ref={ref}
            {...props}
          />
          {error && (
            <span
              className="text-xs text-rose-500 absolute top-11 left-0"
            >
              {error}
            </span>
          )}
          {password && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-0 h-full flex items-center justify-center px-2"
            >
              {showPassword ? <EyeIcon/> : <EyeClosedIcon/>}
            </button>
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
