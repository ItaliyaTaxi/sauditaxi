import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal Slot: merges its own props onto a single child element so a styled
 * component can render `asChild` (e.g. a Button that becomes an <a>/<Link>)
 * without pulling in @radix-ui/react-slot.
 */
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;
    const childProps = child.props;

    return React.cloneElement(child, {
      ...props,
      ...childProps,
      className: cn(className, childProps.className as string | undefined),
      ref,
    });
  }
);
Slot.displayName = "Slot";
