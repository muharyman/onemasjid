import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { AppProvider } from "../context/appContext";
import "../styles/index.css";
import Nav from "../components/nav";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [auth, setAuth] = React.useState(
    typeof window === "undefined"
      ? false
      : Boolean(localStorage.getItem("one_masjid"))
  );

  // const client = useMemo(() => {
  //   if (typeof window === "undefined") {
  //     return {};
  //   } else {
  //     let headers = {};
  //     if (auth) {
  //       headers = {
  //         Authorization: `Bearer ${localStorage.getItem("one_masjid")}`,
  //       };
  //     }
  //     return new GraphQLClient("https://evolved-imp-15.hasura.app/v1/graphql", {
  //       headers,
  //     });
  //   }
  // }, [auth]);

  const client = React.useMemo(() => ["a"], []);
  return (
    <div>
      <AppProvider value={{ client, auth, setAuth }}>
        <Nav />
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}

export default MyApp;
