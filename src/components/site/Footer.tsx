import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p style={{ margin: 0 }}>
          DevCAD Solutions, Justine Bautista. Revit, AutoCAD and APS automation from the Philippines.
        </p>
        <nav aria-label="Footer">
          <Link href="/work/">Work</Link>
          <Link href="/services/">Services</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
          <a href={siteConfig.links.linkedin} rel="noopener">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
