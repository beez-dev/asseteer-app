import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  orientation?: "horizontal" | "vertical"
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, label, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn("w-px bg-border h-full", className)}
          {...props}
        />
      )
    }

    if (label) {
      return (
        <div
          ref={ref}
          className={cn("relative flex items-center", className)}
          {...props}
        >
          <div className="flex-grow border-t border-border" />
          <span className="px-4 text-sm text-muted-foreground">{label}</span>
          <div className="flex-grow border-t border-border" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("border-t border-border w-full", className)}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider }
