import { BookCatalog } from "@/app/book-catalog";
import { books, categories } from "@/lib/books";

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

      <BookCatalog books={books} categories={categories} />
    </main>
  );
}
