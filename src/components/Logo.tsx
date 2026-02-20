import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    width={140}
    height={35}
    className={cn("text-foreground", props.className)}
    {...props}
  >
    <title>DevCAD Studio Logo</title>
    <g>
      <text
        x="0"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="36"
        fontWeight="bold"
        fill="currentColor"
      >
        DevCAD
      </text>
      <text
        x="128"
        y="35"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="36"
        fontWeight="500"
        fill="hsl(var(--primary))"
      >
        .
      </text>
    </g>
  </svg>
);

export default Logo;
