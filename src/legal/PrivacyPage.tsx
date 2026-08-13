import LegalPage from "./LegalPage";
import type { LegalSection } from "./LegalPage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../links";

/* Minimal and true. Every sentence describes something this site actually
   does; anything that would need a fact we do not have (governing law,
   company registration, a data-protection officer, retention schedules) is
   left out rather than filled in. */

const TITLE = "Privacy";
const EFFECTIVE = "EFFECTIVE 13 AUGUST 2026";
const INTRO =
  "This is the marketing site for Mercury Wealth. It collects very little, and this page says exactly what.";

const MAILBOX = (
  <a className="text-link" href={CONTACT_MAILTO}>
    {CONTACT_EMAIL}
  </a>
);

const SECTIONS: LegalSection[] = [
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

export default function PrivacyPage() {
  return <LegalPage title={TITLE} effective={EFFECTIVE} intro={INTRO} sections={SECTIONS} />;
}
