"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectCaseStudyList from "@/components/portfolio/ProjectCaseStudyList";
import { getAllProjectTags, type PortfolioProject } from "@/lib/portfolio-projects";

type PortfolioTagBrowserProps = {
  projects: PortfolioProject[];
};

export default function PortfolioTagBrowser({ projects }: PortfolioTagBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const selectedTag = searchParams.get("tag")?.trim() ?? "";
  const allTags = getAllProjectTags();
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;
  const tagCounts = new Map(
    allTags.map((tag) => [tag, projects.filter((project) => project.tags.includes(tag)).length])
  );

  const handleTagChange = (tag: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (tag) {
      nextParams.set("tag", tag);
    } else {
      nextParams.delete("tag");
    }

    const nextUrl = nextParams.toString() ? `${pathname}?${nextParams.toString()}` : pathname;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  };

  return (
    <>
      <section className="pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-shell px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Browse by Tag</h2>
                <p className="text-muted-foreground">
                  Jump straight into the kinds of projects you want to review.
                </p>
              </div>
              {selectedTag ? (
                <button
                  type="button"
                  onClick={() => handleTagChange("")}
                  className="text-sm font-semibold text-primary transition hover:opacity-75"
                >
                  Clear filter
                </button>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {allTags.map((tag) => {
                const isActive = tag === selectedTag;

                return (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={
                      isActive
                        ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
                        : "rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm font-medium text-foreground/85 transition hover:border-primary/35 hover:text-primary"
                    }
                  >
                    {tag} ({tagCounts.get(tag) ?? 0})
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {selectedTag
                ? `${filteredProjects.length} project${filteredProjects.length === 1 ? "" : "s"} tagged "${selectedTag}".`
                : `${projects.length} total case studies across all tags.`}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            key={selectedTag || "all-projects"}
            className={`filter-fade transition-opacity duration-200 ${isPending ? "opacity-45" : "opacity-100"}`}
          >
            <ProjectCaseStudyList
              projects={filteredProjects}
              title={selectedTag ? `Projects Tagged: ${selectedTag}` : "Featured Projects"}
              intro={
                selectedTag
                  ? "Filtered case studies based on the selected portfolio tag."
                  : "A fast read on the workflow, the build approach, and the practical outcome."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
