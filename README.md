# HTML to Markdown API

[![MCP Server](https://img.shields.io/badge/MCP-server-blue)](https://html-to-markdown.api.klymax402.com/mcp)
[![x402](https://img.shields.io/badge/payments-x402-6E56CF)](https://x402.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Convert HTML to clean Markdown -- strips scripts/styles, preserves headings, links, lists, images. Pay-per-call via [x402](https://x402.org) (USDC on Base L2) -- no API key, no signup, no rate-limit wall.

Part of the [klymax402](https://klymax402.com) marketplace -- 100 x402 micropayment APIs for AI agents, one wallet, USDC on Base.

## Quickstart -- MCP

Add to your MCP client config (Claude Desktop, Cursor, ElizaOS, etc.):

```json
{
  "mcpServers": {
    "html-to-markdown": {
      "url": "https://html-to-markdown.api.klymax402.com/mcp"
    }
  }
}
```

## Quickstart -- HTTP (x402)

```bash
curl -X POST "https://html-to-markdown.api.klymax402.com/api/convert" \
  -H "Content-Type: application/json" \
  -d '{"html":"..."}'
# -> 402 Payment Required, with an x402 payment challenge in the response body
```

Any x402-aware client ([`@x402/fetch`](https://www.npmjs.com/package/@x402/fetch), [`x402-agent-tools`](https://www.npmjs.com/package/x402-agent-tools), ATXP) handles the 402 -> sign -> retry cycle automatically.

## Tools

| Tool | Method | Path | Price | Description |
|---|---|---|---|---|
| `text_convert_html_to_markdown` | POST | `/api/convert` | $0.003 | Convert HTML to markdown |

### `text_convert_html_to_markdown`

Use this when you need to convert HTML to clean Markdown text. Returns the converted markdown in JSON.

**Parameters**

| Name | Type | Required | Description |
|---|---|---|---|
| `html` | string | yes | HTML content to convert to markdown |

Example response:

```json
{"markdown":"# Hello World\n\nThis is **bold** and *italic*.\n\n[Link](https://example.com)","inputLength":156,"outputLength":68,"strippedElements":["script","style"]}
```

**When to use**: converting web content to LLM-friendly format, migrating CMS content, cleaning up HTML emails, and preparing content for markdown-based systems.

**Not for**: markdown to HTML (use `text_convert_markdown_to_html`), web scraping (fetching + converting) (use `web_scrape_to_markdown`), PDF generation (use `document_generate_pdf`).

## Example agent prompts

- "Convert HTML to clean Markdown text"

## Payment

- Protocol: [x402](https://x402.org) -- HTTP-native pay-per-call, no signup, no API key
- Network: Base L2 (`eip155:8453`)
- Asset: USDC
- Facilitator: Coinbase CDP (primary), PayAI (fallback)
- Also reachable via [ATXP](https://atxp.ai) (OAuth-wrapped x402, RFC 9728 protected-resource metadata)

## Part of klymax402

100 x402 micropayment APIs for AI agents -- one wallet, USDC on Base, zero signup.

- Catalog: https://klymax402.com/llms.txt
- Full API reference: https://klymax402.com/llms-full.txt
- Live stats: https://klymax402.com/stats

## License

MIT
