import "./CockpitDashboard.css";

/* ---------------------------------------------------------------------------
   Content
   ---------------------------------------------------------------------------
   Anatomy: docs/asset-extraction-report.md §1 (pulse strip, attention feed,
   coming-up rail) and §2 (book summary strip).
   Figures: the reconciled book, as-of Fri 19 Jun 2026 — US$342.6M · 44
   households · 118 accounts. Every recreation on the site describes this same
   book; the named rows below are a ranked subset of it, never the whole of it.
   Attention rows: docs/copy-deck.md §1, which is final copy and outranks the
   report's advisor-specific row set. Advisor persona is the copy deck's
   Lau Ka-Ming, Hong Kong.
   --------------------------------------------------------------------------- */

const PANEL_LABEL = "BOOK OF BUSINESS";
const ADVISOR_LINE = "Lau Ka-Ming · Hong Kong";
const AS_OF = "FRI 19 JUN 2026";

type Tone = "neutral" | "up" | "down" | "watch";

interface SummaryItem {
  label: string;
  value: string;
  tone?: Tone;
}

const SUMMARY: SummaryItem[] = [
  { label: "Book", value: "US$342.6M" },
  { label: "Households", value: "44" },
  { label: "With open alerts", value: "9" },
  { label: "NNM MTD", value: "−US$2.4M", tone: "down" },
];

interface StatCard {
  label: string;
  value: string;
  sub: string;
  tone?: Tone;
  spark?: number[];
  dot?: Tone;
}

const STATS: StatCard[] = [
  {
    label: "TOTAL AUM",
    value: "US$342.6M",
    sub: "44 households · 118 accounts",
    spark: [10, 16, 14, 20, 18, 23, 21, 26, 24, 30, 27, 31, 29, 33, 30, 34],
  },
  {
    label: "TODAY",
    value: "+US$994k",
    sub: "+0.29% vs last close",
    tone: "up",
    spark: [6, 8, 12, 11, 15, 13, 18, 16, 21, 19, 24, 22, 27, 26, 30, 28],
  },
  {
    label: "NET NEW MONEY · MTD",
    value: "−US$2.4M",
    sub: "withdrawal · Lim Family Office",
    tone: "down",
    spark: [31, 27, 26, 21, 22, 17, 18, 14, 15, 12, 13, 10, 12, 9, 11, 10],
  },
  {
    label: "NEEDS ATTENTION",
    value: "14",
    sub: "5 urgent · 6 watch · 3 suggestions",
    dot: "watch",
  },
];

type Severity = "urgent" | "watch" | "suggestion";

interface AttentionRow {
  rank: string;
  severity: Severity;
  household: string;
  portfolio?: string;
  kind: string;
  issue: string;
  value: string;
  action: string;
  bar?: { weight: number; target: number };
}

const ATTENTION_ROWS: AttentionRow[] = [
  {
    rank: "01",
    severity: "urgent",
    household: "Zhang Family",
    portfolio: "Asia Satellite",
    kind: "BREACH",
    issue: "Equity 8.4pp over IPS band",
    value: "68.4% vs 60.0%",
    action: "Review rebalance",
    bar: { weight: 68.4, target: 60 },
  },
  {
    rank: "02",
    severity: "urgent",
    household: "Okonkwo Family",
    portfolio: "Thematic",
    kind: "CAP",
    issue: "NVDA 12.1% vs 10% max single position",
    value: "12.1% vs 10%",
    action: "Review rebalance",
    bar: { weight: 12.1, target: 10 },
  },
  {
    rank: "03",
    severity: "watch",
    household: "Zhang Family",
    portfolio: "Core",
    kind: "MATURING",
    issue: "Tencent autocall observation · 03 JUL",
    value: "in 14d",
    action: "Open task",
  },
  {
    rank: "04",
    severity: "suggestion",
    household: "Okonkwo Family",
    portfolio: "Corporate",
    kind: "APPROVAL",
    issue: "PRP-2026-0004 awaiting four-eyes",
    value: "PRP-2026-0004",
    action: "Open task",
  },
  {
    rank: "05",
    severity: "watch",
    household: "Lim Family Office",
    kind: "REVIEW",
    issue: "Suitability review due · 26 JUN",
    value: "due 26 JUN",
    action: "Schedule review",
  },
];

type AgendaKind = "review" | "observation" | "task";

interface AgendaItem {
  date: string;
  offset: string;
  kind: AgendaKind;
  entity: string;
  detail: string;
}

interface AgendaGroup {
  heading: string;
  empty?: string;
  items: AgendaItem[];
}

const AGENDA: AgendaGroup[] = [
  { heading: "Today", empty: "Nothing due today.", items: [] },
  {
    heading: "Next two weeks",
    items: [
      {
        date: "26 Jun",
        offset: "+7d",
        kind: "review",
        entity: "Lim Family Office",
        detail: "Suitability review due",
      },
      {
        date: "30 Jun",
        offset: "+11d",
        kind: "review",
        entity: "Lim Family Office",
        detail: "Quarterly review pack",
      },
      {
        date: "3 Jul",
        offset: "+14d",
        kind: "observation",
        entity: "Zhang Family",
        detail: "Tencent autocall observation",
      },
    ],
  },
  {
    heading: "Later",
    items: [
      {
        date: "1 Aug",
        offset: "+43d",
        kind: "task",
        entity: "Task",
        detail: "Prepare onboarding proposal · Ho Family",
      },
    ],
  },
];

const FEED_MORE = "+9 more · view the full list in Book of Business";
const FEED_FOOTER = "Actions create proposals. Nothing executes without approval.";
const AGENDA_FOOTER = "Scheduled items. Exceptions live in the feed.";

/* --------------------------------------------------------------------------- */

export interface CockpitDashboardProps {
  className?: string;
}

/**
 * The book-of-business home screen — the advisor's cockpit at rest.
 *
 * Deliberately static: this panel is evidence, not theatre. The only motion is
 * a hover state on the feed and agenda rows, which is how the real screen
 * behaves under a pointer.
 */
export default function CockpitDashboard({ className }: CockpitDashboardProps) {
  return (
    <section
      className={["cd-panel", className].filter(Boolean).join(" ")}
      aria-label="Mercury book of business"
    >
      <header className="cd-head">
        <div className="cd-head-id">
          <span className="cd-label">{PANEL_LABEL}</span>
          <span className="cd-advisor">
            {ADVISOR_LINE} · {AS_OF}
          </span>
        </div>
        <ul className="cd-summary">
          {SUMMARY.map((item) => (
            <li key={item.label}>
              <span className="cd-summary-label">{item.label}</span>
              <span className={toneClass("cd-summary-value", item.tone)}>{item.value}</span>
            </li>
          ))}
        </ul>
      </header>

      <ul className="cd-stats">
        {STATS.map((stat) => (
          <li className="cd-stat" key={stat.label}>
            <span className="cd-stat-label">
              {stat.dot ? <span className={`cd-dot cd-dot--${stat.dot}`} aria-hidden="true" /> : null}
              {stat.label}
            </span>
            <span className={toneClass("cd-stat-value", stat.tone)}>{stat.value}</span>
            <span className="cd-stat-sub">{stat.sub}</span>
            {stat.spark ? <Sparkline points={stat.spark} tone={stat.tone} /> : null}
          </li>
        ))}
      </ul>

      <div className="cd-body">
        <section className="cd-feed" aria-label="Needs attention">
          <header className="cd-section-head">
            <h3 className="cd-section-title">
              Needs attention
              <span className="cd-count">14</span>
            </h3>
            <div className="cd-section-meta">
              <span className="cd-ranked">RANKED BY MERCURY</span>
              <span className="cd-openlink">Open in Book of Business ↗</span>
            </div>
          </header>

          <ul className="cd-rows">
            {ATTENTION_ROWS.map((row) => (
              <li className="cd-row" key={row.rank}>
                <span className="cd-rank">{row.rank}</span>
                <span className="cd-row-main">
                  <span className="cd-row-top">
                    <span className={`cd-dot cd-dot--${row.severity}`} aria-hidden="true" />
                    <span className="cd-household">{row.household}</span>
                    {row.portfolio ? <span className="cd-portfolio">{row.portfolio}</span> : null}
                    <span className={`cd-kind cd-kind--${row.severity}`}>{row.kind}</span>
                  </span>
                  <span className="cd-issue">{row.issue}</span>
                  {row.bar ? <DriftBar weight={row.bar.weight} target={row.bar.target} /> : null}
                </span>
                <span className="cd-row-right">
                  <span className="cd-row-value">{row.value}</span>
                  <span className="cd-action">{row.action}</span>
                </span>
                <ChevronIcon />
              </li>
            ))}
          </ul>

          <p className="cd-more">{FEED_MORE}</p>
          <footer className="cd-feed-footer">
            <LockIcon />
            {FEED_FOOTER}
          </footer>
        </section>

        <aside className="cd-agenda" aria-label="Coming up">
          <header className="cd-section-head cd-section-head--rail">
            <h3 className="cd-section-title">Coming up</h3>
            <span className="cd-rail-meta">FRI 19 JUN · NEXT 45D</span>
          </header>

          {AGENDA.map((group) => (
            <div className="cd-agenda-group" key={group.heading}>
              <h4 className="cd-agenda-heading">{group.heading}</h4>
              {group.items.length === 0 ? (
                <p className="cd-agenda-empty">{group.empty}</p>
              ) : (
                <ul>
                  {group.items.map((item) => (
                    <li className="cd-agenda-row" key={item.date + item.detail}>
                      <span className="cd-agenda-when">
                        <span className="cd-agenda-date">{item.date}</span>
                        <span className="cd-agenda-offset">{item.offset}</span>
                      </span>
                      <AgendaIcon kind={item.kind} />
                      <span className="cd-agenda-text">
                        <span className="cd-agenda-entity">{item.entity}</span>
                        <span className="cd-agenda-detail">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <footer className="cd-agenda-footer">{AGENDA_FOOTER}</footer>
        </aside>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Pieces
   --------------------------------------------------------------------------- */

function toneClass(base: string, tone?: Tone) {
  return tone && tone !== "neutral" ? `${base} ${base}--${tone}` : base;
}

/** Weight fill against an IPS/cap target tick — the real feed's micro-bar. */
function DriftBar({ weight, target }: { weight: number; target: number }) {
  const clamp = (value: number) => Math.max(0, Math.min(100, value));
  return (
    <span className="cd-bar" aria-hidden="true">
      <span className="cd-bar-fill" style={{ width: `${clamp(weight)}%` }} />
      <span className="cd-bar-tick" style={{ left: `${clamp(target)}%` }} />
    </span>
  );
}

function Sparkline({ points, tone }: { points: number[]; tone?: Tone }) {
  const width = 72;
  const height = 20;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / span) * (height - 2) - 1;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      className={toneClass("cd-spark", tone)}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="cd-chevron" viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="cd-lock" viewBox="0 0 24 24" width="11" height="11" fill="none" aria-hidden="true">
      <rect x="4" y="10.5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V7.5a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function AgendaIcon({ kind }: { kind: AgendaKind }) {
  const common = {
    className: "cd-agenda-icon",
    viewBox: "0 0 24 24",
    width: 13,
    height: 13,
    fill: "none",
    "aria-hidden": true,
  } as const;

  if (kind === "observation") {
    return (
      <svg {...common}>
        <path
          d="M3 16.5l6-6 4 4 8-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 6.5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "task") {
    return (
      <svg {...common}>
        <path
          d="M3 6.5l2 2 3-3M3 16.5l2 2 3-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 7.5h9M12 17.5h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3.5h6v3H9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M9 13l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
