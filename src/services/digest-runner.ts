/**
 * Digest Runner
 * Orchestrates content fetching, AI processing, and email delivery
 */

import { PrismaClient } from "@prisma/client";
import { NewsWriter, UserContext } from "@/agents/news-writer";
import { fetchTopStories, filterRelevant } from "./sources/hackernews";
import { fetchFeed, FEEDS } from "./sources/rss";
import { sendDigest } from "./email/sender";
import { renderDigestEmail } from "./email/template";

const prisma = new PrismaClient();
const newsWriter = new NewsWriter();

async function runDigestForUser(userId: string) {
  // 1. Get user and preferences
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true, preferences: true },
  });

  if (!user || !user.preferences) {
    console.log(`User ${userId} not found or no preferences`);
    return;
  }

  const userContext: UserContext = {
    name: user.name || "there",
    role: user.profile?.role,
    interests: user.profile?.interests || [],
    context: user.profile?.context,
  };

  const sections = [];

  // 2. Fetch and process each enabled section
  for (const sectionId of user.preferences.sections) {
    let items: any[] = [];

    switch (sectionId) {
      case "headlines":
        const hnStories = await fetchTopStories(30);
        items = filterRelevant(hnStories, userContext.interests);
        break;
      case "funding":
        items = await fetchFeed(FEEDS.techcrunchStartups, "TechCrunch");
        break;
      // Add more sections...
    }

    if (items.length > 0) {
      const section = await newsWriter.writeSection(sectionId, items, userContext);
      sections.push(section);
    }
  }

  // 3. Render and send email
  const html = renderDigestEmail(userContext.name, sections);
  const subject = `Your Daily Digest - ${new Date().toLocaleDateString()}`;

  await sendDigest({
    to: user.email,
    subject,
    html,
  });

  // 4. Save digest record
  await prisma.digest.create({
    data: {
      userId: user.id,
      content: sections,
      htmlBody: html,
      sentAt: new Date(),
    },
  });

  console.log(`Digest sent to ${user.email}`);
}

async function runAllDigests() {
  const users = await prisma.user.findMany({
    where: { preferences: { isNot: null } },
  });

  for (const user of users) {
    try {
      await runDigestForUser(user.id);
    } catch (error) {
      console.error(`Failed for user ${user.id}:`, error);
    }
  }
}

// Run if called directly
if (require.main === module) {
  runAllDigests()
    .then(() => process.exit(0))
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

export { runDigestForUser, runAllDigests };
