import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Icon } from "../icon/Icon";
import clsx from "clsx";



const buttonVariants = {
    'success': 'bg-success-400',
    'info': 'bg-info-400',
    'warning': 'bg-warning-400',
    'neutral': 'bg-neutral-400',
};

type IconProp = ComponentPropsWithoutRef<typeof Icon>["icon"];

type BaseProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant: "info" | "success" | "warning" | "neutral";
  size: "s" | "m" | "l";
};

type TrailingIconProps = {
  trailingIcon: IconProp;
  leadingIcon?: never;
};

type LeadingIconProps = {
  leadingIcon: IconProp;
  trailingIcon?: never;
};

type ConditionalProps = TrailingIconProps | LeadingIconProps;

type ButtonProps = BaseProps & ConditionalProps;

export const Button = ({
  className,
  variant,
  leadingIcon,
  trailingIcon,
  children,
}: ButtonProps) => {
  return (
    <button type='button' className={clsx("text-white font-bold py-2 px-4",buttonVariants[variant], className )}>
      {leadingIcon && <Icon className="px-s" icon={leadingIcon}></Icon>}
      {children}
      {trailingIcon && <Icon className="px-s" icon={trailingIcon}></Icon>}
    </button>
  );
};
