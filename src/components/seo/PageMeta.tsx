import { Helmet } from "react-helmet-async";

const SITE_NAME = "100 Days of Holy Spirit Revival";
const BASE_URL = "https://electroniccityrevival.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function PageMeta({
  title,
  description,
  path = "/",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMetaProps) {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
