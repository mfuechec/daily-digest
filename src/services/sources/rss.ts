/**
 * Generic RSS feed fetcher
 */

import Parser from "rss-parser";

const parser = new Parser();

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  source: string;
}

export async function fetchFeed(
  feedUrl: string,
  sourceName: string
): Promise<RSSItem[]> {
  const feed = await parser.parseURL(feedUrl);
  
  return feed.items.map((item) => ({
    title: item.title || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    content: item.contentSnippet || item.content,
    source: sourceName,
  }));
}

// Pre-configured feeds
export const FEEDS = {
  techcrunch: "https://techcrunch.com/feed/",
  techcrunchStartups: "https://techcrunch.com/category/startups/feed/",
  verge: "https://www.theverge.com/rss/index.xml",
  arstechnica: "https://feeds.arstechnica.com/arstechnica/technology-lab",
};
