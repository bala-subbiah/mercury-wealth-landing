import Reveal from "../../components/Reveal";
import "./ProblemAct.css";

/* The conversion beat v1's home was missing (docs/v2-plan.md §3.2): the page
   names what is broken before it presents anything.

   Every clause here is sourced from docs/one-pager.html, "Why Mercury exists":
   the scattered portals/CRM/email, the spreadsheet holding the real numbers,
   drift discovered at quarter-end rather than the day it emerged, and the
   approval trail spread across inboxes. Nothing about Mercury appears in this
   act, and nothing may be added to it that the one-pager does not say.

   Warm paper, per the surface banding recorded in design.md amendment 1: this
   is the company speaking, not the product working. */
const EYEBROW = "WHY MERCURY EXISTS";
const TITLE = "The book is scattered before the day starts.";
/* The third sentence ran to 58 words and buried its own two hits under one
   comma (docs/critique-v2.md P1-10). It is three sentences now; the fragment
   is deliberate. */
const BODY =
  "A relationship manager’s day runs across custodian portals, a CRM, an inbox and the spreadsheet holding the real numbers. None of it answers how the book is positioned right now. So drift is found at quarter-end. Not the day it emerged. And the approval trail sits in inboxes on the morning compliance asks for it.";

/** The page's daylight interlude, and its only act with no product in it. */
export default function ProblemAct() {
  return (
    <section
      className="section pr on-paper"
      id="why"
      data-section="why"
      aria-labelledby="pr-title"
    >
      <Reveal className="container pr-inner">
        <span className="eyebrow">{EYEBROW}</span>
        <h2 className="section-title pr-title" id="pr-title">
          {TITLE}
        </h2>
        <p className="pr-body">{BODY}</p>
      </Reveal>
    </section>
  );
}
