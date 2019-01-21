import { IDocument } from "./IDocument";
import { exec } from "child_process";

export class PdfDocument implements IDocument {
  public generate(fileName: string): void {
    const command = `pandoc docs/${fileName}.md -f markdown+yaml_metadata_block --template templates/cv.latex -o out/${fileName}.pdf`;
    exec(command, (err) => {if (err) throw new Error("error converting to pdf format") });
  }
}
