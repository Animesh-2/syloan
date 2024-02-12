import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MonitizationOn from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import withRouter from "react-router-dom/withRouter";
import { connect } from "react-redux";


const styles = (theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
      padding: 20,
      height: "100vh",
      borderRadius: 1,
      textAlign: "center",
    },
    appName: {
      fontFamily: "Baloo",
      color: "inherit",
    },
    whyUs: {
      fontFamily: "Baloo",
      color: "inherit",
    },
    icon: {
      verticalAlign: "-10%",
      fontSize: 30,
    },
    nav: {
      padding: 7,
    },
    navLink: {
      color: "inherit",
      borderColor: theme.palette.primary.main,
      borderRadius: "30px",
      borderWidth: 2,
      width: 150,
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: "white",
      },
    },
    navActive: {
      borderColor: "white",
    },
    divider: {
      backgroundColor: "whitesmoke",
      opacity: 0.4,
    },
  });

const navs = [
  {
    name: "Loan Types",
    link: "loanTypes",
  },
  {
    name: "Apply",
    link: "apply",
  },
  {
    name: "My loans",
    link: "loans",
  },
];

const whyUs = [
  " At SyLoan, we understand that time is of the essence when it comes to financial needs. That's why our application process is streamlined and digital, enabling you to apply for a loan from anywhere, at any time. Forget about paperwork and waiting in lines; at SyLoan, your next financial step is just a few clicks away.",
  "Whether you're looking to finance a home, expand your business, or need an emergency fund, SyLoan offers a wide range of loan products tailored to meet your unique circumstances.",
];

const LeftSection = (props) => {
  const { classes } = props;
  let path = props.location.pathname.substr(1);
  if (path === "") props.history.push("loanTypes");

  return (
    <Paper className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.appName}>
        {/* M<MonitizationOn className={classes.icon}/>ney Lender */}
        <img src="../Myntra-Logo.jpg" alt="" />
        SyLoan
      </Typography>
      {navs.map((nav, index) => {
        return (
          <div className={classes.nav} key={index}>
            <Button
              variant="outlined"
              color="primary"
              className={
                classes.navLink +
                " " +
                (path === nav.link ? classes.navActive : "")
              }
              onClick={() => props.history.push(nav.link)}
            >
              {nav.name}
            </Button>
          </div>
        );
      })}

      <br />
      <Divider className={classes.divider} />
      <br />
      <Typography component="h5" variant="h5" className={classes.whyUs}>
        Why choose us?
      </Typography>
      <br />
      {whyUs.map((data, index) => {
        return (
          <div key={index}>
            <Typography component="h6" variant="h6" color={"inherit"}>
              {data}
            </Typography>
            <br />
          </div>
        );
      })}
    </Paper>
  );
};

export default withRouter(withStyles(styles)(LeftSection));
