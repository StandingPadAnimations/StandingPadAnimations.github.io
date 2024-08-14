// Copied from https://blog.puzzmo.com/posts/2024/06/23/shiki-hugo/
// 
// This uses the Rose Pine and Rose Pine Dawn themes

import { createHighlighter, bundledLanguages } from "shiki"
import { readdirSync, readFileSync, writeFileSync } from "fs"
import { parse } from "node-html-parser"

const website = "docs"
const files = await readdirSync(website, { recursive: true, encoding: "utf-8" })
const indexFiles = files.filter((file) => file.endsWith("index.html"))

const highlighter = await createHighlighter({
  themes: ["github-dark-default", "github-light-default"],
  langs: Object.keys(bundledLanguages),
})

// Find all of the files in the website directory which are index.html
for (const file of indexFiles) {
  // Grab the file, and parse it into a DOM
  const content = readFileSync(website + "/" + file, { encoding: "utf-8" })
  const dom = parse(content)

  // This isn't a particularly smart query implementation,
  // so lets take the simple route and just grab all of the pre tags
  const codeBlocks = dom.querySelectorAll("pre")

  for (const codeBlock of codeBlocks) {
    // We need to look for the code inside it
    const codeChild = codeBlock.childNodes[0]
    if (!codeChild) continue

    const codeElement = parse(codeChild.toString())

    // Pull out the language from the original code block
    let lang = "text"
    if (codeChild.rawText.startsWith('<code class="language-')) {
      lang = codeChild.rawText.split("language-")[1].split('"')[0]
    }

    const code = codeElement.textContent
    const highlighted = highlighter.codeToHtml(code, {
      lang: lang || "text",
      themes: {
        light: "github-light-default",
        dark: "github-dark-default"
      }
    })

    const newPreElement = parse(highlighted)
    codeBlock.replaceWith(newPreElement)
  }

  // Write the new HTML
  const newContent = dom.toString()
  writeFileSync(website + "/" + file, newContent)
}
