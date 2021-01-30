import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { AppProvider } from "../context/appContext";
import "../styles/index.css";
import Nav from "../components/nav";
import { useRouter } from "next/router";
import Snackbar from "../components/snackbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState("");
  const [snackCategory, setSnackCategory] = React.useState("");
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

  const setSnack = React.useCallback((message, category) => {
    setSnackOpen(Boolean(message));
    if (Boolean(message)) {
      setSnackMessage(message);
      setSnackCategory(category);
    }
  }, []);

  return (
    <div>
      <Head>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.3.0/react-datepicker.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>One Masjid</title>
        <link rel='shortcut icon' href='/images/logo.svg' />
        <meta name='description' content='One Masjid'></meta>{" "}
        <meta property='og:image' content='/images/logo.png' key='ogimage' />
        {/* <link href="URL" rel="canonical"></link> */}
        <meta name='robots' content='index, follow'></meta>
        <meta property='og:title' content='One Masjid' key='ogtitle' />
        <meta property='og:description' content='One Masjid' key='ogdesc' />
      </Head>
      <AppProvider value={{ client, auth, setAuth, setSnack }}>
        <Nav />
        <Component {...pageProps} />
        <Snackbar
          open={snackOpen}
          message={snackMessage}
          color={
            snackCategory === "error"
              ? "red"
              : snackCategory === "success"
              ? "#00a859"
              : "black"
          }
        />
      </AppProvider>
    </div>
  );
}

export default MyApp;
