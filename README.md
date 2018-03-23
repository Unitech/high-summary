
# High Summary

```javascript
var summarize = require('high-summary')

summarize('http://www.bbc.com/news/health-43502144', function(err, page) {
  console.log(page)
})
```

Result:

```
{ title: 'Rise in cancers \'caused by weight\'',
  summary: 'Being overweight or obese is a growing cause of cancer in the UK while cases caused by smoking are falling, according to a large study. Cancer Research UK found the country with the greatest proportion of preventable causes of cancer was Scotland with 41.5%, followed by Northern Ireland on 38%, Wales on 37.8%, and England on 37.3%. Across the UK, smoking remained by far the leading cause of preventable cancer, although it dropped from 19.4% in 2011 to 15.1%. However, overall the analysis found the proportion of preventable cases of cancer had fallen - from 42.7% in 2011 to 37.7%. Cancer Research UK said the figures showed smoking prevention strategies were working, but more work was needed to tackle the growing problem of obesity. ',
    image: 'https://ichef.bbci.co.uk/images/ic/1024x576/p062174x.jpg' }
```

# License

MIT
