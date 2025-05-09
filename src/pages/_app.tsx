import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Simple loading indicator for page transitions
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <AuthProvider>
      <Layout>
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse z-50"></div>
        )}
        {/*<Header />*/}

        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
