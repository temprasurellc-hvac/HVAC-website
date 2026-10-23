import { PHOTOS, src, type Photo } from "@/data/photos";

/* eslint-disable @next/next/no-img-element */

export function Photo({ p, small, priority }: { p: Photo; small?: boolean; priority?: boolean }) {
  const sw = small ? 640 : Math.min(1400, p.w);
  const sh = Math.round((p.h / p.w) * sw);
  return (
    <figure className="photo">
      <img
        src={src(p, small)}
        srcSet={`${src(p, true)} 640w, ${src(p)} ${Math.min(1400, p.w)}w`}
        sizes={small ? "(min-width: 760px) 33vw, 100vw" : "(min-width: 900px) 50vw, 100vw"}
        width={sw}
        height={sh}
        alt={p.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
      <figcaption>{p.caption}</figcaption>
    </figure>
  );
}

export function PhotoStrip({ photos, title = "From recent jobs" }: { photos: Photo[]; title?: string }) {
  if (!photos.length) return null;
  return (
    <section className="section section--white">
      <div className="wrap">
        <div className="rule" />
        <h2>{title}</h2>
        <div className={`photos photos--${Math.min(photos.length, 3)}`} style={{ marginTop: "1.4rem" }}>
          {photos.map((p) => <Photo key={p.file} p={p} small={photos.length > 2} />)}
        </div>
      </div>
    </section>
  );
}

export function PhotoGrid() {
  return (
    <div className="photos--masonry">
      {PHOTOS.map((p, i) => <Photo key={p.file} p={p} small priority={i < 3} />)}
    </div>
  );
}
