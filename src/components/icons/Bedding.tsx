/* eslint-disable max-len */
import { FC } from "react";

type IProps = {
  width?: number;
  height?: number;
};

const SvgComponent: FC<IProps> = ({ width = 24, height = 24 }) => (
<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.04002 1H16.84V23H4.52002V4.52C4.52002 3.58644 4.89088 2.69111 5.551 2.03098C6.21113 1.37086 7.10646 1 8.04002 1Z" fill="black"/>
<path d="M20.8 3.64V2.76C20.8 1.7876 20.1686 1 19.392 1H15.96V3.64H20.8Z" fill="black"/>
<path d="M20.8 5.83997H17.28V17.72H20.8V5.83997Z" fill="black"/>
<path d="M23 4.07996H1V5.39996H23V4.07996Z" fill="black"/>
</svg>
  
);

export default SvgComponent;

