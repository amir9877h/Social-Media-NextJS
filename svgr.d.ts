declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

// declare module "*.svg?raw" {
//   const content: any;
//   export default content;
// }

// declare module "*.svg" {
//   import React from "react";
//   const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }
