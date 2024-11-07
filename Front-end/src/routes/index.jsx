import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Loader from "../components/Loader";

// ** Creates Application routes based on file structure.
export default function MainRouter() {
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>;
}
