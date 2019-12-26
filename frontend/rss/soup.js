import axios from 'axios'
import MarkdownIt from "markdown-it";
const md = new MarkdownIt()

export default async function (feed) {
    feed.options = {
      title: 'Michas Link Soup',
      link: 'https://www.michaelb.dev/blog/feed.xml',
      description: 'Michael Bierbaumers Blog!'
    }
  
    const posts = await (axios.get('http://localhost:1337/soups?_limit=15&_sort=created_at:DESC'))
    posts.data.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post.id,
        link: post.url,
        content: md.render(post.description)
      })
    })
  
    feed.addCategory('Nuxt.js')
  
    feed.addContributor({
      name: 'Michael Bierbaumer',
      email: 'mb@michaelb.at',
      link: 'https://www.michaelb.dev'
    })
  }