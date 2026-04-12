import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "html-to-markdown",
  slug: "html-to-markdown",
  description: "Convert HTML to clean markdown. Strips scripts and styles. Preserves structure.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/convert",
      price: "$0.001",
      description: "Convert HTML to markdown",
      toolName: "text_convert_html_to_markdown",
      toolDescription: "Use this when you need to convert HTML to clean markdown text. Strips scripts, styles, and tags. Preserves headings, links, images, lists, bold, italic. Do NOT use for markdown to HTML — use text_convert_markdown_to_html instead. Do NOT use for web scraping — use web_scrape_to_markdown instead.",
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
