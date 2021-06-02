import {withStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "rgb(143, 140, 140)",
  },
  barColorPrimary: {
    backgroundColor: "rgb(176, 187, 170)",
  },
})(LinearProgress);
