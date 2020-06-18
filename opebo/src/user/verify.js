import React from "react";
import { Redirect } from "react-router-dom";
import { verify } from "../auth";
// import { Redirect, Link } from "react-router-dom";
import queryString from "query-string";

const Verify = (props) => {
  //console.log(props);

  const fetchedToken = queryString.parse(props.location.search);
  const token = fetchedToken.id;
  verify(token);
  //console.log(abc);
  const abcd = () => {
    return <div>Verified Successfully </div>;
  };
  const redirectUser = () => {
    return <Redirect to='/signin' />;
  };
  return (
    <div>
      {abcd()}
      {redirectUser()}
    </div>
  );
};

export default Verify;
