import { Fragment } from "react";

// Configs
import strings from '../src/configs/strings';

import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

import { appWithTranslation } from "next-i18next";
import RTL from "components/RTL";
import MuiTheme from "theme/MuiTheme";
import OpenGraphTags from "utils/OpenGraphTags";
import { AppProvider } from "contexts/AppContext";
import SettingsProvider from "contexts/SettingContext";
import SnackbarProvider from "components/SnackbarProvider";
import { IntlProvider } from 'react-intl';
import nextI18NextConfig from "../next-i18next.config";
import "simplebar/dist/simplebar.min.css";
import '../src/styles/globals.css';
import "../src/__server__";

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
// small change
nProgress.configure({
  showSpinner: false
});

const App = ({
  Component,
  pageProps
}) => {
  return <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Skynship drop, marketplace curated by estheticians. Online store selling products made by estheticians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <OpenGraphTags />
        <title>Skyndrop marketplace curated by estheticians</title>
      </Head>

      <SettingsProvider>
        <AppProvider>
          <MuiTheme>
            <IntlProvider messages={strings} locale="en">
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
            </IntlProvider>
          </MuiTheme>
        </AppProvider>
      </SettingsProvider>
    </Fragment>;
};

export default appWithTranslation(App, nextI18NextConfig);