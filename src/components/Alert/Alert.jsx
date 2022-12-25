import { Alert } from "@mui/material";
import classes from "./Alert.module.scss";
const AlertComponent = ({ children, icon, status }) => {
  return (
    <Alert icon={icon} severity={status} className={classes.alert}>
      {children}
    </Alert>
  );
};
export default AlertComponent;
