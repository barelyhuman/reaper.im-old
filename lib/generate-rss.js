const getPosts = require('./get-posts');
const fs = require('fs');
const path = require('path');

const siteConfig = {
  name: "Reaper's blog",
  link: 'https://reaper.im/blog',
  description: 'stories, rants, and development',
  rssLink: 'https://reaper.im/blog.xml',
};

const generateRSSTemplate = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

<channel>
  <title>${siteConfig.name}</title>
  <link>${siteConfig.link}</link>
  <description>${siteConfig.description}</description>
  <atom:link href="${
    siteConfig.rssLink
  }" rel="self" type="application/rss+xml" />
  ${posts
    .map((item) => {
      return `
      <item>
      <guid>${item.link}</guid>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <description>${item.description}</description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`;
    })
    .join('')}
</channel>
</rss>`;

const formatToRSSItem = (postItem) => {
  return {
    title: postItem.meta.title,
    link: siteConfig.link + '/' + postItem.meta.slug,
    description: postItem.content,
    pubDate: new Date(postItem.meta.date).toUTCString(),
  };
};

async function generate() {
  try {
    const posts = ((await getPosts()) || []).map(formatToRSSItem);
    const rssContent = generateRSSTemplate(posts);

    const saveLocation = path.join(__dirname, '..', 'public', 'blog.xml');
    console.log(saveLocation);

    fs.writeFileSync(saveLocation, rssContent);
    console.log('Wrote file to public/blog.xml');
  } catch (err) {
    console.error(err);
  }
}

if (require.main === module) {
  generate();
}
