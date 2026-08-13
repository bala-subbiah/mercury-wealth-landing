import LegalPage from "./LegalPage";
import type { LegalSection } from "./LegalPage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../links";

/* Plain English, and only what we can stand behind. Governing law,
   jurisdiction and liability clauses are deliberately absent: they would
   require facts about the entity that are not settled here. */

const TITLE = "Terms";
const EFFECTIVE = "EFFECTIVE 13 AUGUST 2026";
const INTRO =
  "Short terms for reading this site. Using it means you are content with what follows.";

const MAILBOX = (
  <a className="text-link" href={CONTACT_MAILTO}>
    {CONTACT_EMAIL}
  </a>
);

const SECTIONS: LegalSection[] = [
  {
    heading: "What this site is",
    body: [
      "This site describes Mercury Wealth and what its engines do, for the people who run wealth businesses in Hong Kong and Singapore. It is informational. It is not a contract, and nothing on it commits either of us to anything.",
    ],
  },
  {
    heading: "Not advice, and not an offer",
    body: [
      "Nothing here is financial, investment, legal, tax or regulatory advice, and nothing here is an offer to sell or a solicitation to buy any security or any other product.",
      "The books, positions, prices, documents and names shown in the product recreations on this site and in the live demo are illustrative. They are there to show how the software behaves. They are not real client data, not a record of any actual portfolio, and not a performance claim.",
    ],
  },
  {
    heading: "The live demo",
    body: [
      "The demo exists so you can look at the product rather than a slide about it. It runs on illustrative data, it changes as the product changes, and it may be unavailable while we work on it. Do not put real client information into it.",
    ],
  },
  {
    heading: "What belongs to us",
    body: [
      "The Mercury name and wordmark, the writing, the design and the interfaces on this site belong to Mercury Wealth. You are welcome to read these pages, quote them with attribution, and send the link to a colleague. Please do not copy them wholesale or present them as your own work.",
      "Other companies’ names and marks that appear here belong to their owners, and their appearance does not imply any endorsement of Mercury by them.",
    ],
  },
  {
    heading: "No warranty",
    body: [
      "We keep this site accurate and current, but we do not warrant that it is free of errors or that it will always be reachable. Read it on that basis, and write to us if something looks wrong.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "These terms change as the product and the company change. The effective date at the top tells you when this version took effect.",
    ],
  },
  {
    heading: "Contact",
    body: [<>Questions about these terms go to {MAILBOX}.</>],
  },
];

export default function TermsPage() {
  return <LegalPage title={TITLE} effective={EFFECTIVE} intro={INTRO} sections={SECTIONS} />;
}
