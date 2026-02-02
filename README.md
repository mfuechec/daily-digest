# Daily Digest

AI-powered personalized newsletter service. Your AI reads the internet so you don't have to.

## Features

- 🎯 Personalized content based on your interests
- 📰 Multiple sources: Hacker News, TechCrunch, YouTube, RSS
- 🤖 AI-powered summarization and curation
- 📧 Daily email delivery
- 🎨 Customizable sections and preferences

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (Postgres)
- **Email:** Resend
- **AI:** Anthropic Claude / OpenAI
- **Styling:** Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Push database schema
npm run db:push

# Run development server
npm run dev
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── onboarding/        # User onboarding flow
│   └── dashboard/         # User dashboard
├── components/            # React components
├── lib/                   # Utilities and config
├── services/              # Business logic
│   ├── sources/          # Content fetchers (HN, YouTube, RSS)
│   └── email/            # Email rendering and sending
└── agents/                # AI agents
    └── news-writer/      # Digest writing agent
        ├── prompts/      # Section-specific prompts
        └── examples/     # Few-shot examples
```

## Environment Variables

```
DATABASE_URL=
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
RESEND_API_KEY=
WEBSHARE_USER=
WEBSHARE_PASS=
```

## License

MIT
