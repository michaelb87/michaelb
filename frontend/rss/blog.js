import axios from 'axios'
import MarkdownIt from "markdown-it";
const md = new MarkdownIt()

export default async function (feed) {
    feed.options = {
      title: 'Michael Bierbaumer Blog',
      link: 'https://www.michaelb.dev/blog/feed.xml',
      description: 'Michas Blog!'
    }
  
    const posts = await (axios.get('http://localhost:1337/articles?_limit=10&_sort=published_at:DESC&is_draft_eq=false'))
    posts.data.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post.slug,
        link: 'https://www.michaelb.dev/blog/'+post.slug,
        content: md.render(post.content)
      })
    })
  
    feed.addCategory('Nuxt.js')
  
    feed.addContributor({
      name: 'Michael Bierbaumer',
      email: 'mb@michaelb.at',
      link: 'https://www.michaelb.dev'
    })
  }