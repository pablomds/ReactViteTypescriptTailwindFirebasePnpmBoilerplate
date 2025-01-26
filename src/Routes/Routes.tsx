import React from "react";
import { Route } from "react-router";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import PrivatePage from "../Pages/PrivatePage";
import LoggedLayout from "../Layouts/LoggedLayout";

export const PublicRoutes = () => {
  return (
    <>
      <Route element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
      </Route>
    </>
  );
};

export const PrivateRoutes = () => {
  return (
    <>
      <Route element={<LoggedLayout currentUser={{}} />}>
        <Route path="/private-route" index element={<PrivatePage />} />
      </Route>
    </>
  );
};
