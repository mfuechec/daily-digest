/**
 * Hacker News source fetcher
 */

const HN_API = "https://hacker-news.firebaseio.com/v0";

export interface HNStory {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
}

export async function fetchTopStories(limit = 30): Promise<HNStory[]> {
  const res = await fetch(`${HN_API}/topstories.json`);
  const ids: number[] = await res.json();
  
  const stories = await Promise.all(
    ids.slice(0, limit).map(async (id) => {
      const storyRes = await fetch(`${HN_API}/item/${id}.json`);
      return storyRes.json();
    })
  );
  
  return stories.filter((s) => s && s.url);
}

export function filterRelevant(
  stories: HNStory[],
  keywords: string[]
): HNStory[] {
  const pattern = new RegExp(keywords.join("|"), "i");
  return stories.filter((s) => pattern.test(s.title));
}
