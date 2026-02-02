/**
 * News Writer Agent
 * Generates personalized digest content with consistent voice
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";

const PROMPTS_DIR = join(__dirname, "prompts");

export interface DigestSection {
  id: string;
  title: string;
  content: string;
  items: DigestItem[];
}

export interface DigestItem {
  headline: string;
  summary: string;
  url: string;
  source: string;
  whyMatters?: string;
}

export interface UserContext {
  name: string;
  role?: string;
  interests: string[];
  context?: string;
}

export class NewsWriter {
  private client: Anthropic;
  private styleGuide: string;

  constructor() {
    this.client = new Anthropic();
    this.styleGuide = readFileSync(
      join(PROMPTS_DIR, "style-guide.md"),
      "utf-8"
    );
  }

  async writeSection(
    sectionId: string,
    items: any[],
    user: UserContext
  ): Promise<DigestSection> {
    const sectionPrompt = readFileSync(
      join(PROMPTS_DIR, `section-${sectionId}.md`),
      "utf-8"
    );

    const message = await this.client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      system: this.styleGuide,
      messages: [
        {
          role: "user",
          content: `${sectionPrompt}

User context:
- Name: ${user.name}
- Role: ${user.role || "Not specified"}
- Interests: ${user.interests.join(", ")}
- Additional context: ${user.context || "None"}

Content to summarize:
${JSON.stringify(items, null, 2)}

Generate the section content:`,
        },
      ],
    });

    // Parse response and return structured section
    const content =
      message.content[0].type === "text" ? message.content[0].text : "";

    return {
      id: sectionId,
      title: this.getSectionTitle(sectionId),
      content,
      items: [],
    };
  }

  private getSectionTitle(sectionId: string): string {
    const titles: Record<string, string> = {
      headlines: "📰 Headlines",
      jobs: "💼 Job Market",
      funding: "💰 Funding & Startups",
      youtube: "🎬 Video Digest",
      deepdive: "🔍 Deep Dive",
    };
    return titles[sectionId] || sectionId;
  }
}
