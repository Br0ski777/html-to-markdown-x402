import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "html-to-markdown",
  slug: "html-to-markdown",
  description: "Convert HTML to clean Markdown -- strips scripts/styles, preserves headings, links, lists, images.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/convert",
      price: "$0.001",
      description: "Convert HTML to markdown",
      toolName: "text_convert_html_to_markdown",
      toolDescription: `Use this when you need to convert HTML to clean Markdown text. Returns the converted markdown in JSON.

Returns: 1. markdown (converted text) 2. inputLength (character count of HTML) 3. outputLength (character count of markdown) 4. strippedElements (scripts, styles, iframes removed).

Example output: {"markdown":"# Hello World\\n\\nThis is **bold** and *italic*.\\n\\n[Link](https://example.com)","inputLength":156,"outputLength":68,"strippedElements":["script","style"]}

Use this FOR converting web content to LLM-friendly format, migrating CMS content, cleaning up HTML emails, and preparing content for markdown-based systems.

Do NOT use for markdown to HTML -- use text_convert_markdown_to_html instead. Do NOT use for web scraping (fetching + converting) -- use web_scrape_to_markdown instead. Do NOT use for PDF generation -- use document_generate_pdf instead.`,
      inputSchema: {
        type: "object",
        properties: {
          html: { type: "string", description: "HTML content to convert to markdown" },
        },
        required: ["html"],
      },
    },
  ],
};
