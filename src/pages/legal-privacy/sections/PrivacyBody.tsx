import type { ReactNode } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../../../links.ts";
import "./PrivacyBody.css";

/* Privacy body — the substance carried from v2 (git show
   refs/heads/v2:src/legal/PrivacyPage.tsx), restyled into the v3 system.
   Static: no Reveal. Curly apostrophes preserved from the source. */

type Section = { heading: string; body: ReactNode[] };

const MAILBOX = (
  <a className="legal-body__link" href={CONTACT_MAILTO}>
    {CONTACT_EMAIL}
  </a>
);

const SECTIONS: Section[] = [
  {
    heading: "What this page covers",
    body: [
      "This page covers this website only: the pages you are reading now. It does not describe how client data is handled inside the Mercury product, which is a separate matter governed by the terms agreed with the firm using it.",
    ],
  },
  {
    heading: "There is nothing to sign up for",
    body: [
      "This site has no accounts, no login and no form. We do not ask you for your name, your firm, your role or your email in order to read any page or to open the live demo.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We do not set tracking cookies and we do not run advertising trackers, so there is no consent banner to dismiss.",
      "We measure page views with Vercel Analytics, which is cookieless. It counts visits without storing anything on your device and without building a profile of you across sites.",
    ],
  },
  {
    heading: "Hosting and server logs",
    body: [
      "The site is hosted by Vercel. Like any web host, Vercel’s servers record standard request logs, which can include your IP address, the page requested, the time of the request and your browser’s user-agent string. These logs are part of running and securing the service.",
    ],
  },
  {
    heading: "Email",
    body: [
      <>
        If you write to {MAILBOX} we keep your message so we can reply to it and continue the
        conversation. That is the only way this site receives your name or contact details: you
        send them to us.
      </>,
      "We do not add you to a mailing list, and we do not use your address for anything other than replying to you. If you would like your message deleted, say so and we will delete it.",
    ],
  },
  {
    heading: "Who else sees any of this",
    body: [
      "We do not sell your information and we do not trade it. The only third parties involved are the services that make the site work: the host, the analytics measurement described above, and the email provider that carries our mail.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this page changes, the effective date at the top changes with it. There is no archive of earlier versions.",
    ],
  },
  {
    heading: "Contact",
    body: [<>Questions about this page go to {MAILBOX}.</>],
  },
];

export default function PrivacyBody() {
  return (
    <section className="legal-body band band--paper">
      <div className="container container--narrow legal-body__prose">
        {SECTIONS.map((section) => (
          <section className="legal-body__section" key={section.heading}>
            <h2 className="legal-body__heading">{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p className="legal-body__para measure" key={index}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
