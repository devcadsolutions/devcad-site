// With no published notes, the static export still writes placeholder /notes pages.
// Remove them so the live site has no empty section.
import { existsSync, rmSync } from "node:fs";

if (existsSync("out/notes/none")) {
  rmSync("out/notes", { recursive: true, force: true });
  console.log("postbuild: no published notes, removed out/notes");
}
