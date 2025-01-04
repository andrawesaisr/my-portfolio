import React from "react";
import { makeStyles } from "@material-ui/styles";
import { expriences } from "../../helpers/exprienceArray";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles({
  exprienceContainer: {
    backgroundColor: "hsl(210, 11%, 25%)",
    color: "white",
    padding: "3rem",
  },
  header: {
    fontSize: "3rem",
    margin: "1rem 0",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#f0f0f0", // Adjusted color for container
    border: "1px solid #e0e0e0",
    borderRadius: "18px",
    marginBottom: "1rem",
    color: "black", // Text color changed to black
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  companyData: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    alignItems: "center",
  },
  compnayDataInside: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "1rem",
  },
  companyLogo: {
    borderRadius: "23px",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default function Exprience() {
  const classes = useStyles();
  return (
    <div className={classes.exprienceContainer} id="experience">
      <div className={classes.header}>Exprience</div>
      {expriences.map((e, idx) => {
        return (
          <Fade direction="right" duration={2300} triggerOnce="true">
            <div className={classes.container} key={idx}>
              <div className={classes.container1}>
                <div className={classes.companyData}>
                  <img
                    src={e.logo}
                    alt="compnay_logo"
                    className={classes.companyLogo}
                  />
                  <div className={classes.compnayDataInside}>
                    <div className={classes.boldText}>{e.companyName}</div>
                    <div>{e.timeSpent}</div>
                    <div>{e.location}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "20px", marginRight: "0px" }}>
                <div className={classes.boldText}>{e.position}</div>
                <div>{e.type}</div>
                <div style={{ fontSize: "17px", marginBottom: "7px" }}>
                  {e.description}
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}
