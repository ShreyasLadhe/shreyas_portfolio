import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { solutionsProjects } from "../constants";

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => solutionsProjects.find((p) => p.slug === slug), [slug]);

  const renderInline = (text) => {
    // First split on backticks for inline code: `code`
    const chunks = String(text).split("`");
    return chunks.map((chunk, i) => {
      if (i % 2 === 1) {
        return (
          <code key={`code-${i}`} className="text-cyan-300 bg-storm/30 px-1 py-0.5 rounded">
            {chunk}
          </code>
        );
      }
      // For non-code segments, apply bold via **...**
      const parts = chunk.split("**");
      return parts.map((part, idx) =>
        idx % 2 === 1 ? (
          <strong key={`b-${i}-${idx}`} className="text-white font-semibold">{part}</strong>
        ) : (
          <span key={`t-${i}-${idx}`}>{part}</span>
        )
      );
    });
  };

  const renderParagraph = (para, key) => {
    // Support types:
    // - string text (with **bold** and optional > indentation)
    // - markdown image only: ![alt](src)
    // - object: { text, indent } or { image, alt, caption }
    if (typeof para === "object" && para?.image) {
      return (
        <figure key={key} className="my-6 rounded-lg overflow-hidden ring-1 ring-gray-700">
          <img src={para.image} alt={para.alt || ""} className="w-full h-auto" />
          {para.caption ? (
            <figcaption className="p-2 text-center text-sm text-sand">{para.caption}</figcaption>
          ) : null}
        </figure>
      );
    }

    let text = typeof para === "string" ? para : para?.text ?? "";

    // Markdown image line: ![alt](src)
    const mdImg = text.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (mdImg) {
      const [, alt, src] = mdImg;
      return (
        <figure key={key} className="my-6 rounded-lg overflow-hidden ring-1 ring-gray-700">
          <img src={src} alt={alt} className="w-full h-auto" />
          {alt ? (
            <figcaption className="p-2 text-center text-sm text-sand">{alt}</figcaption>
          ) : null}
        </figure>
      );
    }

    // Detect leading whitespace for indentation if indent not provided
    let indentLevel = typeof para === "object" && para?.indent ? para.indent : 0;
    // Easy prefix-based indentation: use leading ">>" groups to indicate levels
    if (!indentLevel) {
      const bang = text.match(/^(>+)\s+/);
      if (bang && bang[1]) {
        indentLevel = bang[1].length;
        text = text.replace(/^(>+)\s+/, "");
      }
    }
    if (!indentLevel) {
      const match = text.match(/^(\s+)/);
      if (match && match[1]) {
        const ws = match[1];
        const tabs = (ws.match(/\t/g) || []).length;
        const spaces = (ws.match(/ /g) || []).length;
        indentLevel = tabs + Math.floor(spaces / 2); // every 2 spaces = 1 level
        text = text.replace(/^\s+/, "");
      }
    }

    // Map indent level to Tailwind margin classes (clamped 0..6)
    const levels = ["ml-0","ml-4","ml-8","ml-12","ml-16","ml-20","ml-24"];
    const classIndent = levels[Math.max(0, Math.min(indentLevel, levels.length - 1))];

    return (
      <p key={key} className={"" + " " + classIndent}>{renderInline(text)}</p>
    );
  };

  if (!post) {
    return (
      <div className="container mx-auto max-w-5xl p-6">
        <button className="text-sm underline text-sand" onClick={() => navigate(-1)}>← Go back</button>
        <h1 className="text-2xl mt-6">Not found</h1>
        <p className="mt-2 text-sand">We couldn't find that solution. Please pick one from the homepage.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl p-6">
      <button className="text-sm underline text-sand" onClick={() => navigate(-1)}>← Go back</button>
      <article className="prose prose-invert max-w-none mt-6">
        <header className="mb-6">
          <h1 className="text-3xl">{post.title}</h1>
          <p className="mt-2 text-sand">{post.subtitle}</p>
        </header>

        {post.cover && (
          <div className="rounded-xl overflow-hidden ring-1 ring-gray-700 mb-8">
            <img src={post.cover} alt={post.title} className="w-full h-auto" />
          </div>
        )}

        {post.content?.map((section, idx) => (
          <section key={idx} className="mb-10">
            {section.heading && <h2 className="text-2xl mb-2">{section.heading}</h2>}
            {section.body && (
              <div className="space-y-4 text-sand leading-7">
                {section.body.map((para, pIdx) => renderParagraph(para, pIdx))}
              </div>
            )}
            {section.image && (
              <div className="mt-4 rounded-lg overflow-hidden ring-1 ring-gray-700">
                <img src={section.image} alt={section.heading || post.title} className="w-full h-auto" />
              </div>
            )}
            {section.list && (
              <ul className="mt-4 list-disc pl-6 text-sand space-y-1">
                {section.list.map((item, li) => (
                  <li key={li}>{item}</li>
                ))}
              </ul>
            )}
            {section.code && (
              <pre className="mt-4 bg-storm/40 rounded-lg p-4 overflow-auto"><code>{section.code}</code></pre>
            )}
          </section>
        ))}

        {post.links?.length ? (
          <footer className="mt-10">
            <h3 className="text-xl mb-2">References</h3>
            <ul className="list-disc pl-6 text-sand space-y-1">
              {post.links.map((l, i) => (
                <li key={i}><a className="underline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </footer>
        ) : null}
      </article>
    </div>
  );
};

export default Blog;


