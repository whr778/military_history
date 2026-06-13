"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Book, Category } from "@/lib/books";
import { commerceLinks } from "@/lib/books";

type BookCatalogProps = {
  books: Book[];
  categories: Category[];
};

export function BookCatalog({ books, categories }: BookCatalogProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredBooks = useMemo(() => {
    if (!normalizedQuery) {
      return books;
    }

    return books.filter((book) =>
      [
        book.title,
        book.author,
        book.category,
        book.summary,
        book.detail,
        ...(book.extraLinks?.map((link) => link.label) ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [books, normalizedQuery]);

  const filteredBookSlugs = new Set(filteredBooks.map((book) => book.slug));

  return (
    <>
      <section className="search-panel" aria-label="Search books">
        <label htmlFor="book-search">Search the reading list</label>
        <div className="search-row">
          <input
            id="book-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, author, category, or topic"
            type="search"
            value={query}
          />
          {query ? (
            <button onClick={() => setQuery("")} type="button">
              Clear
            </button>
          ) : null}
        </div>
        <p>
          Showing {filteredBooks.length} of {books.length} books
        </p>
      </section>

      {filteredBooks.length === 0 ? (
        <section className="empty-state">
          <h2>No Matches</h2>
          <p>Try a different title, author, category, or keyword.</p>
        </section>
      ) : null}

      {categories.map((category) => {
        const categoryBooks = books.filter(
          (book) => book.category === category.name && filteredBookSlugs.has(book.slug),
        );

        if (categoryBooks.length === 0) {
          return null;
        }

        return (
          <section className="category-section" id={category.slug} key={category.slug}>
            <div className="section-heading">
              <p>
                {categoryBooks.length} {categoryBooks.length === 1 ? "title" : "titles"}
              </p>
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
                      <p className="book-author">By {book.author}</p>
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
                      {book.extraLinks?.map((link) => (
                        <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
