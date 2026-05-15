import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center ring-offset-background font-poppins transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        primary:
          "focus:ring-2 bg-accent text-white hover:bg-accent-secondary ring-darkGreen",
        secondary:
          "focus:ring-2 bg-darkGreen text-white hover:bg-[#0B6366] ring-lightGreen",
        link: "focus:ring-2 text-darkGreen underline underline-offset-8 hover:font-semibold hover:decoration-[3px] focus:ring-0",
      },
      size: {
        sm: "px-4 py-[7.50px] gap-2 rounded-lg text-sm font-medium",
        md: "px-5 py-[13px] gap-2.5 rounded-lg text-base font-medium leading-[18px] tracking-tight",
        lg: "px-6 py-[17px] gap-3 rounded-lg text-xl font-medium leading-[18px] tracking-tight",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const mergedProps = {
      ...props,
      className: cn(buttonVariants({ variant, size, className })),
      ref,
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, mergedProps);
    }

    return (
      <button
        {...(mergedProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
