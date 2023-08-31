/* eslint-disable max-len */
import { FC } from "react";

type IProps = {
  width?: number;
  height?: number;
};

const SvgComponent: FC<IProps> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.341 7.73825H13.6587C14.7312 7.73922 15.6624 8.47721 15.9084 9.52113C15.929 9.60815 16.0066 9.66967 16.0961 9.66988H19.6476C19.6989 9.67006 19.7481 9.64985 19.7843 9.6137C19.8206 9.57754 19.841 9.52843 19.841 9.47721V7.54488C19.841 7.13503 19.6782 6.74197 19.3883 6.45223C19.0984 6.16249 18.7053 5.99981 18.2954 6H6.70427C6.29443 5.99981 5.9013 6.16249 5.61143 6.45223C5.32155 6.74197 5.15869 7.13503 5.15869 7.54488V9.47721C5.15869 9.52843 5.17909 9.57754 5.21537 9.6137C5.25166 9.64985 5.30085 9.67006 5.35207 9.66988H8.90365C8.99327 9.67019 9.07119 9.60845 9.09136 9.52113C9.33732 8.47721 10.2685 7.73922 11.341 7.73825Z" fill="#242424"/>
  <path d="M4.77279 10.8293C4.56778 10.8292 4.37111 10.9105 4.22614 11.0555C4.08117 11.2005 3.99981 11.3971 4 11.6021V15.6588C4 16.026 4.2585 16.3426 4.61838 16.416C4.70817 16.4344 4.77266 16.5134 4.77279 16.6051V18.1698C4.77279 18.5966 5.11878 18.9426 5.54558 18.9426C5.97238 18.9426 6.31838 18.5966 6.31838 18.1698V16.6249C6.31819 16.5737 6.3384 16.5245 6.37455 16.4882C6.41071 16.4519 6.45982 16.4316 6.51104 16.4316H18.489C18.5402 16.4316 18.5893 16.4519 18.6254 16.4882C18.6616 16.5245 18.6818 16.5737 18.6816 16.6249V18.1698C18.6816 18.5966 19.0276 18.9426 19.4544 18.9426C19.8812 18.9426 20.2272 18.5966 20.2272 18.1698V16.6051C20.2273 16.5134 20.2918 16.4344 20.3816 16.416C20.7415 16.3426 21 16.026 21 15.6588V11.6021C21.0002 11.3971 20.9188 11.2005 20.7739 11.0555C20.6289 10.9105 20.4322 10.8292 20.2272 10.8293H4.77279Z" fill="#242424"/>
  </svg>
  
);

export default SvgComponent;

