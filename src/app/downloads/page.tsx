import type { Metadata } from "next";
import { PageHead } from "@/components/site/parts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Small AutoLISP routines for everyday AutoCAD drafting from DevCAD Solutions.",
  alternates: { canonical: "/downloads/" },
};

export default function DownloadsPage() {
  const items = siteConfig.downloads;
  return (
    <>
      <PageHead
        title="Downloads"
        sheet="D-001"
        lede="Small AutoLISP routines I wrote for everyday drafting. Ask and I’ll send the file with load instructions."
        meta={[
          { label: "Platform", value: "AutoCAD" },
          { label: "Language", value: "AutoLISP" },
          { label: "Routines", value: items.length },
        ]}
      />
      <section className="section" style={{ paddingTop: 48 }} aria-labelledby="dl-title">
        <div className="wrap">
          <h2 id="dl-title" className="visually-hidden">Routines</h2>
          <table className="schedule">
            <thead>
              <tr>
                <th scope="col" className="lettering">Routine</th>
                <th scope="col" className="lettering">What it does</th>
                <th scope="col" className="lettering">File</th>
              </tr>
            </thead>
            <tbody>
              {items.map((d) => {
                const real = d.link && d.link !== "#";
                const href = real
                  ? d.link
                  : `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(`Download request: ${d.function}`)}`;
                return (
                  <tr key={d.function}>
                    <td>{d.function}</td>
                    <td data-label="What it does">{d.description}</td>
                    <td data-label="File">
                      <a className="text-link" href={href}>{real ? "Download" : "Ask for the file"}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="small" style={{ marginTop: 20, color: "var(--graphite)", maxWidth: "64ch" }}>
            Load with APPLOAD in AutoCAD. Test on a copy of your drawing first.
          </p>
        </div>
      </section>
    </>
  );
}
