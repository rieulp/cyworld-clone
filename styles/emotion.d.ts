import "@emotion/react";
import { colors } from "./theme";
declare module "@emotion/react" {
  export interface Theme {
    colors: typeof colors;
  }
}
