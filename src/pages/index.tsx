import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import FeaturesSection from "../components/HomepageFeatures/featuresSection";
import HeroSection from "../components/HomepageFeatures/heroSection";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  const shouldHideHamburgerMenu = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        {shouldHideHamburgerMenu && (
          <style>
            {`
              .navbar__toggle {
                display: none !important;
              }
            `}
          </style>
        )}
        <HeroSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
