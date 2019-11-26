import { NextPage } from "next"

type Blog = {
  layout: string
  title: string
  slug: string
  date: string
  thumbnail?: string
  rating?: string
  body: string
}

const PostPage: NextPage<{
  post?: { attributes: Blog; html: string }
}> = props => {
  if (!props.post) {
    return <div>Loading...</div>
  }
  const {
    post: {
      attributes: { title, thumbnail, rating, date, body },
      html
    }
  } = props

  return (
    <>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>{date}</div>
        <div>{rating}</div>
        <div>{body}</div>
        <div>{thumbnail}</div>
      </article>
    </>
  )
}

PostPage.getInitialProps = async ctx => {
  const {
    query: { slug }
  } = ctx

  if (slug) {
    const post = await import(`../../content/posts/${slug}.md`)

    return { post }
  }
  return {}
}

export default PostPage