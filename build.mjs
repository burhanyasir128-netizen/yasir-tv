import fs from 'node:fs';
const raw=process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
let origin='';
if(raw){const u=new URL(raw.includes('://')?raw:'https://'+raw);if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash||u.pathname!=='/')throw new Error('SITE_URL must be a bare HTTPS origin, e.g. https://your-domain.com');origin=u.origin;}
if(process.env.VERCEL&&!origin)throw new Error('Enable Vercel system environment variables or set SITE_URL to your production HTTPS domain, then redeploy.');
const preview=process.env.VERCEL_ENV==='preview';
fs.rmSync('public',{recursive:true,force:true});fs.mkdirSync('public');
const pages=['index','about','privacy','playback-help'];
for(const file of fs.readdirSync('source')){
 if(!file.endsWith('.html')){fs.copyFileSync('source/'+file,'public/'+file);continue;}
 let s=fs.readFileSync('source/'+file,'utf8');const path=file==='index.html'?'/':'/'+file;
 let head='<link rel="icon" href="/favicon.svg" type="image/svg+xml">';
 if(origin&&file!=='404.html'){
  head+='<link rel="canonical" href="'+origin+path+'">';
  if(file==='index.html'){
   head+='<meta property="og:url" content="'+origin+'/"><meta property="og:image" content="'+origin+'/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Apna Live TV by Yasir Tanveer"><meta name="twitter:image" content="'+origin+'/og-image.png">';
   head+='<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'Apna Live TV',url:origin+'/',inLanguage:'en-PK',description:'Pakistani television channel browser by Yasir Tanveer.',publisher:{'@type':'Person',name:'Yasir Tanveer'}})+'</script>';
  }
 }
 if(preview)s=s.replace(/<meta name="robots"[^>]*>/g,'<meta name="robots" content="noindex,nofollow">');
 s=s.replace('<!-- BUILD_SEO_HEAD -->',head);fs.writeFileSync('public/'+file,s);
}
let robots=preview?'User-agent: *\nDisallow: /\n':'User-agent: *\nAllow: /\n';
if(origin&&!preview)robots+='Sitemap: '+origin+'/sitemap.xml\n';
fs.writeFileSync('public/robots.txt',robots);
if(origin)fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(p=>'<url><loc>'+origin+(p==='index'?'/':'/'+p+'.html')+'</loc></url>').join('')+'</urlset>');
console.log(origin?'Built SEO pages for '+origin:'Built local preview. Vercel will generate canonical URLs and sitemap at deployment.');
