"use client";
import { useState } from "react";
import { SITE } from "@/data/site";
import { PhoneIcon, MessageIcon, MailIcon } from "./Icons";

const ISSUES = [
  "No cooling / AC not working",
  "No heat / furnace not working",
  "Water heater problem",
  "Replacement estimate",
  "Tune-up / maintenance",
  "Service agreement",
  "Pre-purchase inspection",
  "Humidifier",
  "Ductwork",
  "Something else",
];

function message(form: HTMLFormElement) {
  const d = new FormData(form);
  const v = (k: string) => String(d.get(k) ?? "").trim();
  const lines = [
    `Hi Temprasure, this is ${v("name")}.`,
    `${v("issue")} at ${v("address")}.`,
    v("message"),
    `Best number: ${v("phone")}${v("email") ? `, email: ${v("email")}` : ""}`,
  ].filter(Boolean);
  return lines.join("\n");
}

function compose(kind: "sms" | "email", form: HTMLFormElement) {
  if (!form.reportValidity()) return;
  const body = message(form);
  if (kind === "sms") {
    window.location.href = `${SITE.smsHref}?&body=${encodeURIComponent(body)}`;
  } else {
    const issue = String(new FormData(form).get("issue") ?? "Service request");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Service request: ${issue}`)}&body=${encodeURIComponent(body)}`;
  }
}

export function ContactForm({ defaultIssue }: { defaultIssue?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot
    const endpoint = SITE.formEndpoint;
    if (!endpoint) {
      compose("sms", form);
      return;
    }
    setState("sending");
    try {
      const r = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      setState(r.ok ? "sent" : "error");
      if (r.ok) form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="alert" role="status">
        <strong>Got it.</strong> We have your request and will call or text you shortly. If it is urgent, call {SITE.phone} now.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      </div>
      <div className="form__row">
        <label>Email (optional)<input name="email" type="email" autoComplete="email" /></label>
        <label>Service address<input name="address" required autoComplete="street-address" placeholder="Street, city" /></label>
      </div>
      <label>
        What's going on?
        <select name="issue" defaultValue={defaultIssue ?? ISSUES[0]}>
          {ISSUES.map((i) => <option key={i}>{i}</option>)}
        </select>
      </label>
      <label>Details (optional)<textarea name="message" rows={4} placeholder="What the system is doing, how old it is, anything else useful" /></label>
      <input name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
      <div className="form__send">
        {SITE.formEndpoint ? (
          <button className="btn btn--hot btn--lg" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send request"}
          </button>
        ) : (
          <button className="btn btn--hot btn--lg" type="submit"><MessageIcon /> Send by text</button>
        )}
        {SITE.email && (
          <button className="btn btn--cold btn--lg" type="button" onClick={(e) => compose("email", e.currentTarget.form!)}>
            <MailIcon /> Send by email
          </button>
        )}
        {SITE.formEndpoint && (
          <button className="btn btn--ghost-dark btn--lg" type="button" onClick={(e) => compose("sms", e.currentTarget.form!)}>
            <MessageIcon /> Send by text
          </button>
        )}
        <a className="btn btn--ghost-dark btn--lg" href={SITE.phoneHref}><PhoneIcon /> Call {SITE.phone}</a>
      </div>
      <p className="form__how">Text and email open your own messaging app with everything filled in. Tap send and it reaches Al directly.</p>
      {state === "error" && (
        <p className="form__note" role="alert">The form didn't send. Call or text <a href={SITE.phoneHref}>{SITE.phone}</a> and we'll take it from there.</p>
      )}
      <p className="form__note">Need someone right now? We answer the phone around the clock.</p>
    </form>
  );
}
