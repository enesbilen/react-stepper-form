import { createElement } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

export default function Button({ as, size, variant, type, id, name, className, children, ...props }) {
  return createElement(
    as,
    {
      type: type,
      id: id,
      name: name,
      className: classNames("rounded-full flex items-center justify-center font-bold transition-colors", {
        "px-4 h-8 text-sm": size === 'small',
        "px-4 h-9": size === 'normal',
        "px-4 text-[17px] h-[52px] w-full": size === 'large',

        "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white": variant === 'primary',
        "bg-[#f0a51d] hover:bg-[#d8a81a]": variant === 'warning',
        "bg-[#3cb043] text-white hover:bg-[#349234]": variant === 'success',
        "bg-[#e04141] hover:bg-[#d83434]": variant === 'error',
        "border border-[#b4b4b4b] hover:border-[#000]/50 hover:bg-[#22c55e] hover:text-white": variant === 'white-outline',
        [className]: true
      }),
      ...props
    },
    children
  );
}

Button.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.oneOf(['primary', 'warning', 'success', 'error', 'white-outline']),
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  as: 'button',
  size: 'normal',
  variant: 'primary',
  type: 'button',
  id: '',
  name: '',
  className: '',
  children: null,
};
