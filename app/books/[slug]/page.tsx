import Link from "next/link";
import { notFound } from "next/navigation";
import { books, commerceLinks, getBookBySlug } from "@/lib/books";

type BookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book not found",
    };
  }

  return {
    title: `${book.title} | Military History`,
    description: book.summary,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const links = commerceLinks(book);

  return (
    <main>
      <Link className="back-link" href="/">
        Back to reading list
      </Link>

      <article className="summary-page">
        <p className="eyebrow">{book.category}</p>
        <h1>{book.title}</h1>
        {book.author ? <p className="book-author">By {book.author}</p> : null}
        <p className="intro">{book.summary}</p>

        <div className="summary-layout">
          <section>
            <h2>Brief Summary</h2>
            <p>{book.detail}</p>
          </section>

          <section>
            <h2>Why It Belongs Here</h2>
            <p>{book.relevance}</p>
          </section>
        </div>

        <div className="commerce-panel" aria-label={`Book links for ${book.title}`}>
          <a href={links.amazon} rel="noreferrer" target="_blank">
            Find on Amazon
          </a>
          <a href={links.audible} rel="noreferrer" target="_blank">
            Find on Audible
          </a>
        </div>
      </article>
    </main>
  );
}
