import { Color } from "@/types/Color";
import Link from "next/link";
import { Typography } from "../Typography";

type Props = {
  color?: Color;
};
export const Logo: React.FC<Props> = ({ color = "background" }) => (
  <Link
    href="/"
    style={{
      textDecoration: "none",
      padding: "8px",
      display: "inline-block",
    }}>
    <Typography color={color} size="xLarge" family="en">
      Moeko Iwai
    </Typography>
  </Link>
);
