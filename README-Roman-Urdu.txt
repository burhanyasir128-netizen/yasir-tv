APNA LIVE TV — VERCEL + SEO
Developer: Yasir Tanveer

UPLOAD KARNE KA TAREEQA
1. ZIP extract karein. Andar wali files ko GitHub repository ke root mein upload karein.
   package.json, build.mjs, vercel.json aur source folder ek hi level par hon.
2. Vercel mein Add New > Project se GitHub repository import karein.
3. Framework Preset: Other
   Build Command: npm run build
   Output Directory: public
4. Deploy karein. vercel.json mein settings bhi mojood hain.
5. Vercel system environment variables enabled hon to production domain se
   canonical URLs, social image URLs aur sitemap automatic banenge.
6. Agar build SITE_URL maange, Project Settings > Environment Variables mein
   SITE_URL = apna asal HTTPS production domain set karein aur redeploy karein.
   Is mein /page ya query na likhein. Custom domain change karne par SITE_URL
   update karein aur redeploy karein. SITE_URL public URL hai, secret nahin.

COMMAND LINE ALTERNATIVE
Node.js ke sath project folder mein terminal open karein:
  npx vercel
Login aur project setup complete karein. Production ke liye:
  npx vercel --prod

GOOGLE SEARCH CONSOLE
1. Live website ki URL-prefix property add karein.
2. HTML tag verification choose karein. Mila hua google-site-verification meta
   tag source/index.html ke <head> mein add karein, phir redeploy karein.
3. Search Console mein sitemap.xml submit karein.
4. URL Inspection se homepage check karke indexing request karein.
5. Vercel deployment public aur Googlebot ke liye accessible hona chahiye.
   Login-protected pages public search mein accessible nahin honge.

SEO CHANGES
- Descriptive title, description aur author.
- Open Graph aur social sharing image.
- Visible HTML channel catalogue aur playback information.
- WebSite structured data (build par real domain se).
- Canonical links, robots.txt aur sitemap.xml.
- Alag About, Privacy aur Playback Help pages.
- Purane /jazztv.html aur /index.html se homepage redirects.
- Preview deployments mein noindex; production mein index,follow.
- Unknown URLs ke liye 404 page.

ADS
source/index.html mein AD_DESKTOP_START, AD_MOBILE_START aur AD_NATIVE_START
markers ke placeholders ko apne publisher account ke complete code se replace
karein. Ads disabled hain jab tak code add na ho. Privacy aur zaroori consent
controls apni integration ke mutabiq update karein.

PLAYBACK KI IMPORTANT BAAT
Vercel hosting ya SEO se restricted channel links theek nahin hote.
Green Entertainment ke original provider URL ne test mein HTTP 403 diya tha.
Har channel ke liye working, authorized URL zaroori hai. Source mein const
channels array mein URLs edit kar sakte hain.

LOCAL CHECK
  npm run build
Generated static files public folder mein milengi. Local build bina SITE_URL
ke fake canonical ya fake sitemap URL nahin banata. Vercel build par real URL
use hota hai. Koi third-party npm dependency required nahin.

Google ranking aur indexing guaranteed nahin. Working playback, useful original
content aur actual user experience par bhi kaam zaroori hai.
