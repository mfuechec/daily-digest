# Daily Digest — Product Spec

**Working title:** Daily Digest (or: Morning Context, The Briefing, NewsForge)
**Author:** Mark + Elaine
**Date:** 2026-02-02
**Status:** Draft

---

## 1. Overview

An AI-powered personalized newsletter service that curates content from multiple sources based on user-defined interests, delivering a daily digest via email.

**Core value prop:** "Your AI reads the internet so you don't have to."

---

## 2. User Personas

### Primary: Busy Professional
- Information overload problem
- Wants to stay informed without 2hr/day reading
- Willing to pay $5-15/mo for time savings

### Secondary: Niche Enthusiast
- Deep interest in specific topics (investing, AI, crypto, sports)
- Wants expert-level curation, not generic news
- Values signal over noise

---

## 3. Onboarding Flow

### Step 1: Quick Profile (required)
```
What best describes you?
☐ Tech professional
☐ Investor/Trader  
☐ Founder/Entrepreneur
☐ Creative professional
☐ Student
☐ Other: _______
```

### Step 2: Interest Selection (required)
```
Pick 3-7 topics:
☐ AI & Machine Learning
☐ Startups & Funding
☐ Job Market & Hiring
☐ Software Engineering
☐ Mobile Development
☐ Investing & Markets
☐ Crypto & Web3
☐ Product & Design
☐ Science & Research
☐ Add custom: _______
```

### Step 3: Deep Context (optional, but valuable)
```
Tell us more (free text):
"I'm a mobile engineer with 6 years of React Native experience, 
currently job searching for AI-focused roles. I follow value 
investing principles and am interested in tech stocks..."
```

### Step 4: Source Preferences (optional)
```
Sources we'll check (toggle on/off):
✓ Hacker News (top stories)
✓ TechCrunch (funding news)
✓ YouTube (channels you specify)
☐ Reddit (subreddits you specify)
☐ Twitter/X (accounts you specify) [Premium]
☐ Newsletters (forward to us) [Premium]
```

### Step 5: Delivery Preferences
```
Email: ____________
Delivery time: [6am ▼]
Timezone: [America/Chicago ▼]
Format: ☐ Brief (5 min read) ☐ Standard (10 min) ☐ Deep (15+ min)
```

---

## 4. Templates vs Custom

### Template Approach (Recommended for MVP)
Pre-built "newspaper sections" users toggle on/off:

| Section | Description | Sources |
|---------|-------------|---------|
| **Headlines** | Top 5 stories you need to know | HN, TechCrunch, aggregated |
| **Job Market** | Hiring trends, who's hiring, layoffs | HN Who's Hiring, LinkedIn, job boards |
| **Funding & Startups** | Who raised, who launched | TechCrunch, Crunchbase |
| **Deep Dive** | One long-form piece summarized | User-specified or AI-picked |
| **Market Pulse** | Stock/crypto movements relevant to you | Yahoo Finance, user watchlist |
| **YouTube Digest** | Summaries from channels you follow | YouTube transcripts |
| **Weekly Radar** | Slower-moving trends (1x/week) | Research, reports |

### Custom Inputs
Users can add:
- Specific YouTube channels
- Specific subreddits
- RSS feeds
- Keywords to watch
- Keywords to avoid ("mute Elon")

---

## 5. Security & Safety

### LLM Prompt Injection Prevention
- **Never include raw user content in system prompts**
- Sanitize all external content before summarization
- Use structured extraction, not open-ended "summarize this"
- Rate limit per user
- Content hash deduplication (prevent adversarial flooding)

### Malicious Link Prevention
- Only include links from whitelisted source domains
- No link shorteners
- No user-generated links in summaries
- Optionally: route through SafeBrowsing API check
- Display source domain clearly: `[techcrunch.com]`

### Content Safety
- Run summaries through moderation API
- Flag/filter NSFW content by default
- Allow user override for specific topics (e.g., adult content creators want their news)

### Data Privacy
- Don't store raw source content long-term
- User data encrypted at rest
- Clear data retention policy (30 days logs)
- GDPR delete flow

---

## 6. Paid Sources (Future Premium Features)

| Source | Access Method | Notes |
|--------|---------------|-------|
| **The Information** | Requires subscription | High-value tech insider news |
| **WSJ / Bloomberg** | API partnership or user's credentials | Financial news |
| **Stratechery** | RSS with subscription | Ben Thompson's analysis |
| **Pitchbook / Crunchbase** | API | Funding data |
| **Twitter/X** | API ($100/mo base) | Need to pass cost to user |
| **Paywalled newsletters** | User forwards to unique address | Substack, etc. |
| **Research papers** | Semantic Scholar API (free) | arXiv, papers |

**Model:** User connects their own subscriptions, we summarize content they already pay for.

---

## 7. Distribution: Website vs Integration

### Option A: Standalone Web App
**Pros:**
- Full control over UX
- Direct customer relationship
- Can build community features later

**Cons:**
- Need to build auth, billing, email infra
- Another app for users to remember

**Stack:** Next.js + Supabase + Resend + Stripe

### Option B: Claude/ChatGPT Plugin
**Pros:**
- Users already in Claude/ChatGPT
- No auth needed (use platform)
- Lower friction

**Cons:**
- Platform dependency
- Revenue share with Anthropic/OpenAI
- Limited customization
- Can't send emails (pull, not push)

### Option C: Clawdbot Skill (Open Source)
**Pros:**
- Perfect for technical users
- Deep personalization
- Self-hosted = privacy
- Community contribution

**Cons:**
- Small market (Clawdbot users only)
- No direct revenue

### Recommendation: Hybrid
1. **MVP:** Standalone web app (control + simplicity)
2. **Later:** Release as Clawdbot skill for power users
3. **Maybe:** Claude plugin for discovery/growth

---

## 8. Voice Agent / Skill Architecture

### The Problem
Without a consistent "writer," each digest sounds different based on:
- Which LLM call generated it
- What prompt was used
- Random variation

### Solution: News Writer Agent

```
/skills/news-writer/
├── SKILL.md          # Instructions for voice/tone
├── prompts/
│   ├── section-headlines.md
│   ├── section-jobs.md
│   ├── section-funding.md
│   └── section-youtube.md
├── examples/
│   ├── good-digest.md
│   └── bad-digest.md
└── templates/
    └── email-template.html
```

**SKILL.md defines:**
```markdown
## Voice & Tone
- Concise, scannable, no fluff
- Slightly irreverent but professional
- Use "you" not "users" or "one"
- Bullet points > paragraphs
- Always include "why this matters to YOU"
- End with one actionable takeaway

## Formatting Rules
- Headlines: 8 words max
- Summaries: 2-3 sentences
- Always cite source: [source.com]
- Use emoji sparingly for section headers only

## Anti-patterns (never do)
- "In this article, we explore..."
- "It's important to note that..."
- "As an AI, I..."
- Em dashes
```

### Voice Consistency Techniques
1. **Few-shot examples** in every prompt
2. **Style guide** injected as system prompt
3. **Post-processing** pass for consistency check
4. **User feedback loop** ("too formal" / "too casual" buttons)

---

## 9. Technical Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Cron      │────▶│   Fetcher   │────▶│   Sources   │
│  (8am UTC)  │     │   Workers   │     │  (HN, YT,   │
└─────────────┘     └─────────────┘     │   RSS...)   │
                           │            └─────────────┘
                           ▼
                    ┌─────────────┐
                    │   Content   │
                    │    Store    │
                    │  (Postgres) │
                    └─────────────┘
                           │
                           ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   Writer    │────▶│   LLM API   │
                    │   Agent     │     │ (Claude/GPT)│
                    └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   Email     │────▶│   Resend/   │
                    │  Renderer   │     │  SendGrid   │
                    └─────────────┘     └─────────────┘
```

### Cost Estimates (per user/day)
| Component | Cost |
|-----------|------|
| Source fetching | ~$0.001 |
| LLM summarization | ~$0.02-0.05 |
| Email delivery | ~$0.001 |
| **Total** | **~$0.03-0.06/user/day** |
| **Monthly** | **~$1-2/user/month** |

At $5/mo pricing = healthy margin.

---

## 10. MVP Scope (2-Week Build)

### Week 1
- [ ] Landing page + waitlist (Carrd or Next.js)
- [ ] Onboarding form (Google Form → Airtable)
- [ ] Manual onboarding for first 10 users
- [ ] Source fetchers: HN, TechCrunch RSS
- [ ] Basic LLM summarization pipeline
- [ ] Email template (HTML)

### Week 2
- [ ] Cron job for daily delivery
- [ ] YouTube transcript integration
- [ ] User preferences storage
- [ ] Stripe payment integration
- [ ] Basic analytics (open rates)

### Post-MVP
- [ ] Self-serve onboarding
- [ ] More sources
- [ ] Feedback loop (thumbs up/down)
- [ ] Mobile app (later)
- [ ] Clawdbot skill (open source)

---

## 11. Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 section, 3x/week, watermark |
| **Pro** | $8/mo | All sections, daily, custom sources |
| **Team** | $20/mo | Shared digests, multiple emails, API |

**Launch pricing:** $5/mo early adopter rate (locked for life).

---

## 12. Open Questions

1. **Name?** Daily Digest, Morning Context, The Briefing, NewsForge?
2. **Solo or team?** Build alone or find a co-founder?
3. **Timeline?** Start now or after landing a job?
4. **Open source?** Release Clawdbot skill alongside paid product?

---

## 13. Next Steps

1. [ ] Validate demand (landing page + communities)
2. [ ] Get 10 pre-orders at $5/mo
3. [ ] Build MVP in 2 weeks
4. [ ] Onboard beta users manually
5. [ ] Iterate based on feedback
6. [ ] Scale or kill based on retention

---

*"The best time to start was yesterday. The second best time is now."*
