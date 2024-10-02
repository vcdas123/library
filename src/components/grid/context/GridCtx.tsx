import createSafeContext from "../../../utils/CreateSafeContext";

export interface GridCtx {
  rowGap?: string;
  colGap?: string;
}

export const [Provider, useGridCtx] = createSafeContext<GridCtx>(
  "Fail to initiate form grid context"
);
