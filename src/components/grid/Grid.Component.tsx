import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import Col from "./Col.Component";
import { Provider } from "./context/GridCtx";
import Row from "./Row.Component";

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  span?: number;
}

export interface RowProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
  children: React.ReactElement<ColProps, typeof Col>[];
  style?: Omit<
    CSSProperties,
    "display" | "gridTemplateColumns" | "width" | "gap"
  >;
}

interface GridProps {
  children: React.ReactElement<RowProps, typeof Row>[];
  rowGap?: string;
  colGap?: string;
}

const Grid: React.FC<GridProps> & {
  Row: typeof Row;
  Col: typeof Col;
} = ({ children, rowGap = "10px", colGap = "10px" }) => {
  return (
    <Provider value={{ colGap, rowGap }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: rowGap,
          width: "100%",
        }}
      >
        {children}
      </div>
    </Provider>
  );
};

Grid.Col = Col;
Grid.Row = Row;

export default Grid;
