import { NOTO_SANS_JP } from "@/app/fonts/notoSansJp";
import { PACIFICO } from "@/app/fonts/pacifico";
import { Color } from "@/types/Color";
import { WithBaseElementProps } from "@/types/Props";
import { tv } from "tailwind-variants";

type Props = {
  color?: Color;
  align?: "left" | "center" | "right";
  element?: "p" | "h1" | "h2" | "h3";
  size?: "xLarge" | "medium" | "small" | "large" | "xSmall";
  bold?: boolean;
  family?: "ja" | "en";
};

export const Typography: React.FC<WithBaseElementProps<Props>> = ({
  children,
  color = "te",
  element = "p",
  size = "medium",
  align,
  className = "",
  family = "ja",
  id,
  bold = false,
}) => {
  const Element = element;

  const typographyStyle = tv({
    base: "whitespace-pre-wrap",
    variants: {
      size: {
        xLarge: "text-2xl leading-loose",
        small: "text-sm leading-loose",
        medium: "text-base leading-loose",
        large: "text-lg leading-relaxed",
        xSmall: "text-xs leading-relaxed",
      },
      underLine: {
        true: "underline",
      },
      color: {
        black: "text-black",
        primary: "text-primary",
        secondary: "text-secondary",
        error: "text-error",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      bold: {
        true: "font-bold",
      },
      family: {
        ja: NOTO_SANS_JP.className,
        en: PACIFICO.className,
      },
    },
  });

  return (
    <Element
      id={id}
      className={`${typographyStyle({
        size,
        align,
        bold,
        family,
      })} text-${color} ${className}`}>
      {children}
    </Element>
  );
};
