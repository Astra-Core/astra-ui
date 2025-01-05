import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    margin: 0,
    padding: "clamp(20px, 5vh, 40px)",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "auto",
    "@media (max-height: 600px)": {
      justifyContent: "flex-start",
    },
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#24292e",
  },
  forgotPassword: {
    display: "block",
    margin: "10px 0",
    color: "#0366d6",
    textAlign: "right",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  submitButton: {
    marginTop: "20px",
    padding: "12px 0",
    fontWeight: "bold",
    textTransform: "none",
  },
  signup: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#586069",
  },
}));
export default useStyles;
