import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        google: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 focus-visible:ring-gray-400",
        facebook: "bg-[#1877F2] text-white hover:bg-[#1877F2]/90 focus-visible:ring-[#1877F2]",
        github: "bg-[#24292F] text-white hover:bg-[#24292F]/90 focus-visible:ring-[#24292F]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "google",
      size: "default",
    },
  }
)

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {}

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(socialButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
SocialButton.displayName = "SocialButton"

export { SocialButton, socialButtonVariants }
