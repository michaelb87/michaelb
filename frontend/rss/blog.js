import axios from 'axios'
import removeMd from 'remove-markdown'

export default async function (feed) {
    feed.options = {
      title: 'Michael Bierbaumer Blog',
      link: 'https://www.michaelb.dev/blog/feed.xml',
      description: 'Michael Bierbaumers Blog!'
    }
  
    const posts = await (axios.get('http://localhost:1337/articles?_limit=15&_sort=published_at:DESC&is_draft_eq=false'))
    posts.data.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post.slug,
        link: 'https://www.michaelb.dev/blog/'+post.slug,
        content: removeMd(post.content)
      })
    })
  
    feed.addCategory('Nuxt.js')
  
    feed.addContributor({
      name: 'Michael Bierbaumer',
      email: 'mb@michaelb.at',
      link: 'https://www.michaelb.dev'
    })
  }