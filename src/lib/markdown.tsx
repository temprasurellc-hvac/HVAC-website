import React from "react";
import Link from "next/link";

/** Inline: **bold**, [text](/url/), plain text. */
function inline(text: string, key: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={`${key}-b${i++}`}>{m[1]}</strong>);
    else if (m[2] !== undefined) {
      const href = m[3];
      out.push(
        href.startsWith("/") ? (
          <Link key={`${key}-a${i++}`} href={href}>{m[2]}</Link>
        ) : (
          <a key={`${key}-a${i++}`} href={href} rel="noopener noreferrer" target="_blank">{m[2]}</a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function headings(md: string): { id: string; text: string }[] {
  return md
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ text: l.slice(3).trim(), id: slugify(l.slice(3).trim()) }));
}

/** Render markdown-lite (## h2, ### h3, paragraphs, - bullets, 1. ordered) to React. */
export function Markdown({ md }: { md: string }) {
  const lines = md.replace(/\r/g, "").split("\n");
  const nodes: React.ReactNode[] = [];
  let para: string[] = [];
  let list: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let k = 0;

  const flushPara = () => {
    if (para.length) {
      nodes.push(<p key={k++}>{inline(para.join(" "), `p${k}`)}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length && listType) {
      const items = list.map((t, i) => <li key={i}>{inline(t, `l${k}-${i}`)}</li>);
      nodes.push(listType === "ul" ? <ul key={k++}>{items}</ul> : <ol key={k++}>{items}</ol>);
      list = [];
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) { flushPara(); flushList(); continue; }
    if (line.startsWith("## ")) {
      flushPara(); flushList();
      const t = line.slice(3).trim();
      nodes.push(<h2 key={k++} id={slugify(t)}>{t}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara(); flushList();
      nodes.push(<h3 key={k++}>{line.slice(4).trim()}</h3>);
      continue;
    }
    const ul = /^[-*]\s+(.*)$/.exec(line);
    const ol = /^\d+[.)]\s+(.*)$/.exec(line);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (listType && listType !== type) flushList();
      listType = type;
      list.push((ul ?? ol)![1]);
      continue;
    }
    flushList();
    para.push(line.trim());
  }
  flushPara(); flushList();
  return <>{nodes}</>;
}

/** Plain-text version for schema/descriptions. */
export function stripMd(md: string): string {
  return md
    .replace(/^#+\s+/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}
