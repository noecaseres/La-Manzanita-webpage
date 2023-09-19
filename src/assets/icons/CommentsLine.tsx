/* eslint-disable max-len */
import { FC } from "react";

type IProps = {
  width?: number;
  height?: number;
};

const SvgComponent: FC<IProps> = ({ width = 248, height = 10 }) => (
 
<svg width={width} height={height} viewBox="0 0 248 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.00039L19.5 1.00039L26 7.9999L32 1.0004L247 1" stroke="#FFC700" stroke-width="2" stroke-linecap="round"/>
</svg>
  
);

export default SvgComponent;



