import React, { CSSProperties } from "react";
import { useGridCtx } from "./context/GridCtx";
import { RowProps } from "./Grid.Component";

const Row: React.FC<RowProps> = ({ children, style, ...rest }) => {
  const { colGap } = useGridCtx();

  let colStr = "";

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      const span = child.props.span ? child.props.span : 1;
      colStr += `${span}fr `;
    }
  });

  const defaultStyle: CSSProperties = {
    display: "grid",
    width: "100%",
    gap: colGap,
    gridTemplateColumns: colStr,
  };

  return (
    <div style={{ ...defaultStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

export default Row;
