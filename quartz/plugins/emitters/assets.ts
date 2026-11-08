import { FilePath, joinSegments, slugifyFilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import path from "path"
import fs from "fs"
import { glob } from "../../util/glob"
import { Argv } from "../../util/ctx"
import { QuartzConfig } from "../../cfg"

const filesToCopy = async (argv: Argv, cfg: QuartzConfig) => {
  // glob all non MD files in content folder and copy it over
  return await glob("**", argv.directory, ["**/*.md", ...cfg.configuration.ignorePatterns])
}

const copyFile = async (argv: Argv, fp: FilePath) => {
  const src = joinSegments(argv.directory, fp) as FilePath

  const ext = path.extname(fp)
  const name = (slugifyFilePath(fp) + (ext === ".html" ? ".html" : "")) as FilePath
  const dest = joinSegments(argv.output, name) as FilePath

  // ensure dir exists
  const dir = path.dirname(dest) as FilePath
  await fs.promises.mkdir(dir, { recursive: true })

  await fs.promises.copyFile(src, dest)

  const bareName = slugifyFilePath(fp) as FilePath
  if (bareName !== name) {
    const bareDest = joinSegments(argv.output, bareName) as FilePath
    await fs.promises.copyFile(src, bareDest)
  }

  return dest
}

export const Assets: QuartzEmitterPlugin = () => {
  return {
    name: "Assets",
    async *emit({ argv, cfg }) {
      const fps = await filesToCopy(argv, cfg)
      for (const fp of fps) {
        yield copyFile(argv, fp)
      }
    },
    async *partialEmit(ctx, _content, _resources, changeEvents) {
      for (const changeEvent of changeEvents) {
        const ext = path.extname(changeEvent.path)
        if (ext === ".md") continue

        if (changeEvent.type === "add" || changeEvent.type === "change") {
          yield copyFile(ctx.argv, changeEvent.path)
        } else if (changeEvent.type === "delete") {
          const ext = path.extname(changeEvent.path)
          const name = (slugifyFilePath(changeEvent.path) + (ext === ".html" ? ".html" : "")) as FilePath
          const dest = joinSegments(ctx.argv.output, name) as FilePath
          await fs.promises.unlink(dest)
          const bareName = slugifyFilePath(changeEvent.path) as FilePath
          if (bareName !== name) {
            const bareDest = joinSegments(ctx.argv.output, bareName) as FilePath
            await fs.promises.unlink(bareDest).catch(() => {})
          }
        }
      }
    },
  }
}
