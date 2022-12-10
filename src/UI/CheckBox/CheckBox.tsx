import cn from "classnames";
import { useState } from "react";
import s from "./CheckBox.module.css";

const CheckBox = ({
                    className = "",
                    value = false,
                    hardValue = false,
                    disabled,
                    ...props
                  }:any) => {
  let [state, setState] = useState(value);
  let actualState = hardValue ? value : state;

  return (
    <div
      className={cn(
        s.wrapper,
        { [s.active]: actualState },
        { [className]: className },
        { [s.disabled]: disabled }
      )}
      onClick={() => setState(!state)}
      data-checkbox={actualState}
      {...props}
    ></div>
  );
};

export default CheckBox;
