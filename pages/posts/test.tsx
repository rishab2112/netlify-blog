import Link from "next/link"

export default () => {
  return (
    <header>
      <h1>ButWillItScale.com</h1>
      <p>
        <Link href="/posts/[slug]" as="/posts/lets-party">
          <a>Let's Party</a>
        </Link>
      </p>
      <p>
        <Link href="/posts/[slug]" as="/posts/some-food-for-thought">
          <a>Some Food For Thought</a>
        </Link>
      </p>
    </header>
  )
}
