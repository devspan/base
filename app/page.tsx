import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import { jsonLdScriptProps } from 'react-schemaorg';
import { Organization, WebSite } from 'schema-dts';
import { metadata } from "./page.metadata";

export { metadata };

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rupaya.io'

export default function Home() {
  return (
    <>
      <script
        {...jsonLdScriptProps<Organization>({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: process.env.NEXT_PUBLIC_SITE_NAME,
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          sameAs: [
            `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
            "https://t.me/rupayacoin",
            "https://github.com/rupayaproject",
            "https://discord.gg/rupaya"
          ],
          description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION
        })}
      />
      <script
        {...jsonLdScriptProps<WebSite>({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: process.env.NEXT_PUBLIC_SITE_NAME,
          url: baseUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      />
      <div>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Team />
      </div>
    </>
  )
}