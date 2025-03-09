# (Bun + Nitro + i18next) crash Example

1. bun install
2. bun prisma db push
3. bun run dev

**Try changing any file, or routing file, try several times, the crash is unstable, sometimes it crashes after a few edits, sometimes it takes many times.**

> The reason why I added prisma as translation loading is because this is my real use case. I load translations from a database.

> [NOTE]
> Note: After starting dev, visit the route a few times and then come back to edit the file, which is more likely to trigger a crash.