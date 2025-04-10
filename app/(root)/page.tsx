import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string }
}) {
  const query = (await searchParams).query
  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "Veniam aute quis magna duis dolore velit.",
      image:
        "https://plus.unsplash.com/premium_photo-1678060844561-ff6d58955e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in VIrtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0
            ? posts.map((post) => <StartupCard key={post?._id} post={post} />)
            : null}
        </ul>
      </section>
    </>
  )
}
