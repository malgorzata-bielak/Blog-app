import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => (
  <div className="login-box">
    <div className="login-box__modal">
      <h1 className="login-box__title">My Blog</h1>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(LoginPage);
