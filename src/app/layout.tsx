import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import UseMousePointer from "@/utils/MouseCursorUtilis";
import Alert from "@/components/common/Alert";
import Modal from "@/components/common/Modal";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const metadata = {
  title: "The Beats Beyond",
  description: "Inspiration for your favorite artists",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Music inspiration for your idols" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </head>

      <body suppressHydrationWarning={true}>
        <UseMousePointer />
        <ReduxProvider>
          <AppProvider>{children}</AppProvider>
          <Alert />
          <Modal />
        </ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;
