let Parser = require('rss-parser');
const fs = require('fs');
let parser = new Parser({ customFields: { feed: ['dc:date'], item: ['description']}});

(async () => {

  let feed = await parser.parseURL('https://www.nrk.no/nyheter/siste.rss');

  let document = {
      date: feed['dc:date'],
      stories: []
  }

  feed.items.forEach(item => {

    const { title, description, pubDate, link} = item;

    document.stories.push({
        title,
        description,
        pubDate,
        link
    })
  });

  fs.unlink('src/feeds/nrk/current.json', (err) => console.log(err));
  fs.rename('src/feeds/nrk/next.json', 'src/feeds/nrk/current.json', (err) => console.log(err));
  fs.writeFile('src/feeds/nrk/next.json', JSON.stringify(document), 'utf-8', (err) => console.log(err));

})();