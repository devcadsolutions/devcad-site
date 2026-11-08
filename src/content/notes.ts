export type NoteBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang: string; code: string };

export type Note = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date */
  date: string;
  tags: string[];
  /** Drafts are only built when NEXT_PUBLIC_SHOW_DRAFTS=1, for review. */
  draft?: boolean;
  related?: string[];
  body: NoteBlock[];
};

export const notes: Note[] = [
  {
    slug: "contour-lines-to-revit-toposolid",
    title: "Turning contour lines in a linked DWG into a Revit toposolid",
    summary:
      "The general approach behind Import Topo from CAD: read the contours from the linked drawing, collect clean points with real elevations, and create the toposolid in one transaction.",
    date: "2026-11-08",
    tags: ["Revit API", "Toposolid", "CAD import", "C#"],
    draft: true,
    related: ["cracknell-import-topo-from-cad"],
    body: [
      {
        type: "p",
        text: "Site teams usually get topography as a survey drawing: contour polylines drawn at their real elevations. Rebuilding that terrain in Revit by hand means placing points one at a time, which is slow and easy to get wrong. The add-in reads the linked drawing instead. This note covers the general approach, not the production code.",
      },
      { type: "h2", text: "1. Read the geometry from the linked drawing" },
      {
        type: "p",
        text: "A linked or imported DWG is an ImportInstance. Its geometry comes back as a GeometryInstance, and GetInstanceGeometry() returns it with the link's transform already applied, so the points land where the drawing sits in the model.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `var options = new Options { ComputeReferences = false };
var points = new List<XYZ>();

foreach (var obj in importInstance.get_Geometry(options))
{
    if (obj is not GeometryInstance gi) continue;
    foreach (var item in gi.GetInstanceGeometry())
    {
        switch (item)
        {
            case PolyLine pl: points.AddRange(pl.GetCoordinates()); break;
            case Curve c:     points.AddRange(c.Tessellate());      break;
        }
    }
}`,
      },
      { type: "h2", text: "2. Clean the points before Revit sees them" },
      {
        type: "list",
        items: [
          "Contours drawn flat at Z = 0 carry no elevation. Check for that early and tell the user, instead of building a flat toposolid.",
          "Neighbouring polylines share vertices. Merge points that sit within a small tolerance so the surface doesn't get spikes.",
          "Very dense polylines add points without adding accuracy. Thinning them keeps the toposolid fast to edit.",
        ],
      },
      { type: "h2", text: "3. Create the toposolid" },
      {
        type: "p",
        text: "Revit 2024 replaced topography surfaces with toposolids. Toposolid.Create takes the points, a toposolid type and a level, and runs inside a normal transaction.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `var typeId = new FilteredElementCollector(doc)
    .OfClass(typeof(ToposolidType))
    .FirstElementId();

using var tx = new Transaction(doc, "Import topo from CAD");
tx.Start();
var topo = Toposolid.Create(doc, cleanedPoints, typeId, levelId);
tx.Commit();`,
      },
      { type: "h2", text: "Worth building in" },
      {
        type: "list",
        items: [
          "A way to pick which DWG layers hold the contours, since survey drawings mix contours with text, grids and boundaries.",
          "A short summary before anything is created: how many points, and the lowest and highest elevation found.",
          "A single transaction, so a wrong pick is one undo away.",
        ],
      },
    ],
  },
];

const showDrafts = process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";

export const publishedNotes = notes
  .filter((n) => showDrafts || !n.draft)
  .sort((a, b) => b.date.localeCompare(a.date));
