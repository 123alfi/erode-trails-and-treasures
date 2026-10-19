<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the tourism experience in `public/erode/index.html`, `style.css`, and `script.js`; the TanStack home route embeds the same standalone page so the preview and downloadable vanilla project stay identical.
- Use external Google Maps directions links rather than an embedded map; directions require no app credentials or paid API calls.
- Store the hosted destination catalogue in Supabase with stable text IDs and unique normalized names; public reads use a publishable-key TanStack server function and RLS, never elevated credentials.
- Deliver the hosted catalogue to the vanilla iframe through origin-and-source-checked messages; retain the embedded list as the standalone/offline fallback and keep favourites in localStorage so no sign-in is required.
