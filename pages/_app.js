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

  const client = React.useMemo(() => {
    return new GraphQLClient(
      process.env.HASURA_URL || "https://evolved-imp-15.hasura.app/v1/graphql",
      {
        headers: {
          "x-hasura-admin-secret": "admin",
        },
      }
    );
  }, [auth]);

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
