/**
 * Email template renderer
 */

import { DigestSection } from "@/agents/news-writer";
import { format } from "date-fns";

export function renderDigestEmail(
  userName: string,
  sections: DigestSection[]
): string {
  const date = format(new Date(), "EEEE, MMMM d, yyyy");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Digest - ${date}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 { font-size: 24px; margin-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
    .date { color: #666; font-size: 14px; margin-bottom: 24px; }
    .section { margin-bottom: 32px; }
    .item { margin-bottom: 16px; }
    .item-headline { font-weight: 600; margin-bottom: 4px; }
    .item-summary { color: #444; }
    .item-why { color: #0066cc; font-size: 14px; margin-top: 4px; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <h1>Good morning, ${userName} 👋</h1>
  <p class="date">${date}</p>
  
  ${sections.map((section) => `
    <div class="section">
      <h2>${section.title}</h2>
      <div>${section.content}</div>
    </div>
  `).join("")}
  
  <div class="footer">
    <p>You're receiving this because you signed up for Daily Digest.</p>
    <p><a href="#">Manage preferences</a> · <a href="#">Unsubscribe</a></p>
  </div>
</body>
</html>
  `;
}
