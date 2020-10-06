import React from "react";
import cx from "classnames";
import "../styles/date.scss";

interface I_Block {
  value?: string;
  display?: boolean;
  canHover?: boolean;
  active?: boolean;
  renderProps?: (value: string) => React.ReactNode;
}

const Block: React.FC<I_Block> = (props) => {
  const {
    value = null,
    display = true,
    canHover = true,
    active,
    renderProps
  } = props;
  return (
    <div
      className={cx("Block", {
        disable: !display,
        canHover: canHover,
        active: active
      })}
    >
      {!!renderProps ? renderProps(value) : value}
    </div>
  );
};

export default Block;
