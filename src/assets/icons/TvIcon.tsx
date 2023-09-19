/* eslint-disable max-len */
import { FC } from "react";

type IProps = {
  width?: number;
  height?: number;
};

const SvgComponent: FC<IProps> = ({ width = 24, height = 24 }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0077 4.35767H3.45386V15.1807H21.0077V4.35767Z" fill="#242424"/>
<path d="M12.6346 14.0769H11.8269V17.9808H12.6346V14.0769Z" fill="#242424"/>
<path d="M15.4347 17.8462H9.02698V18.6539H15.4347V17.8462Z" fill="#242424"/>
</svg>

    
);

export default SvgComponent;

