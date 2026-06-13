import Link from "next/link";
import { books, categories, commerceLinks } from "@/lib/books";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div>
          <p className="eyebrow">Reading Campaign</p>
          <h1>Military History</h1>
          <p className="intro">
            A focused shelf of military history, special warfare, strategy, intelligence,
            leadership, and biographies with quick summary pages for each title.
          </p>
        </div>
        <img
          alt=""
          className="header-mark"
          src="/field-library.svg"
          aria-hidden="true"
        />
      </header>

      <nav aria-label="Categories" className="category-nav">
        {categories.map((category) => (
          <a href={`#${category.slug}`} key={category.slug}>
            {category.name}
          </a>
        ))}
      </nav>

      <section className="stats" aria-label="Reading list totals">
        <div>
          <span>{books.length}</span>
          <p>Books</p>
        </div>
        <div>
          <span>{categories.length}</span>
          <p>Categories</p>
        </div>
        <div>
          <span>3</span>
          <p>Actions per title</p>
        </div>
      </section>

      {categories.map((category) => {
        const categoryBooks = books.filter((book) => book.category === category.name);

        return (
          <section className="category-section" id={category.slug} key={category.slug}>
            <div className="section-heading">
              <p>{categoryBooks.length} titles</p>
              <h2>{category.name}</h2>
            </div>

            <div className="book-grid">
              {categoryBooks.map((book) => {
                const links = commerceLinks(book);

                return (
                  <article className="book-card" key={book.slug}>
                    <div>
                      <p className="book-category">{book.category}</p>
                      <h3>{book.title}</h3>
                      <p>{book.summary}</p>
                    </div>
                    <div className="actions" aria-label={`Links for ${book.title}`}>
                      <Link href={`/books/${book.slug}`}>Summary</Link>
                      <a href={links.amazon} rel="noreferrer" target="_blank">
                        Amazon
                      </a>
                      <a href={links.audible} rel="noreferrer" target="_blank">
                        Audible
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
