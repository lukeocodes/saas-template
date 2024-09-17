import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 ring-offset-white focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white/90",
	{
		variants: {
			variant: {
				default:
					"bg-brand text-zinc-50 hover:bg-zinc-900/90 dark:hover:bg-zinc-50/90 dark:hover:text-zinc-900/90",
				destructive: "bg-red-500 hover:bg-red-500/90 dark:bg-red-900 dark:hover:bg-red-900/90",
				outline:
					"focus-visible:outline-0 outline outline-1 outline-zinc-200 hover:bg-white dark:outline-zinc-800 dark:hover:bg-zinc-950",
				secondary: "bg-mid dark:bg-zinc-900/90 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80",
				ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
