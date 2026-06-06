import { useEffect } from "react";

const css = `
  :root {
    --brf-dark: #1E2B3A;
    --brf-caramel: #B5895A;
    --brf-caramel-deep: #9C7144;
    --brf-cream: #FBF8F1;
    --brf-white: #FFFFFF;
    --brf-body: #4A4036;
    --brf-muted: #8A7E70;
    --brf-line: #E7DECF;
  }

  html { scroll-behavior: smooth; scroll-padding-top: 72px; }

  .brf-page {
    font-family: 'Inter', system-ui, sans-serif;
    color: var(--brf-body);
    background: var(--brf-cream);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  .brf-page * { box-sizing: border-box; }

  .brf-wrap { max-width: 900px; margin: 0 auto; padding: 0 2rem; }

  .brf-kicker {
    font-size: 0.74rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--brf-caramel);
  }

  /* HERO */
  .brf-hero {
    background: var(--brf-dark);
    padding: 4.5rem 0 5rem;
    position: relative;
    overflow: hidden;
  }
  .brf-hero::after {
    content: '';
    position: absolute;
    top: -45%; right: -10%;
    width: 620px; height: 620px;
    background: radial-gradient(circle, rgba(181,137,90,0.20) 0%, transparent 70%);
    border-radius: 50%;
  }
  .brf-hero .brf-wrap { position: relative; z-index: 1; }
  .brf-hero .brf-kicker { display: block; margin-bottom: 1.4rem; }
  .brf-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: #fff;
    font-size: clamp(2.6rem, 6vw, 4.2rem);
    line-height: 1.05;
    max-width: 16ch;
    margin-bottom: 1.6rem;
  }
  .brf-hero .brf-dek {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.78);
    max-width: 620px;
    margin-bottom: 2.2rem;
  }
  .brf-read-time {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 999px;
    padding: 0.3rem 0.9rem;
    margin-bottom: 1.6rem;
  }
  .brf-cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; }
  .brf-btn {
    display: inline-block;
    background: var(--brf-caramel);
    color: #fff;
    padding: 0.95rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: background 0.2s, transform 0.2s;
  }
  .brf-btn:hover { background: var(--brf-caramel-deep); transform: translateY(-1px); }
  .brf-hero .brf-quiet { color: rgba(255,255,255,0.7); font-size: 0.95rem; }
  .brf-hero .brf-quiet a { color: var(--brf-caramel); text-decoration: none; }

  /* SECTIONS */
  .brf-section { padding: 4.5rem 0; }
  .brf-section.on-white { background: var(--brf-white); }
  .brf-section.on-cream { background: var(--brf-cream); }
  .brf-section.on-dark { background: var(--brf-dark); color: rgba(255,255,255,0.8); }

  .brf-snum {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--brf-caramel);
    margin-bottom: 0.6rem;
  }
  .brf-h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: var(--brf-dark);
    font-size: clamp(1.9rem, 4vw, 2.7rem);
    line-height: 1.12;
    margin-bottom: 1.3rem;
    max-width: 20ch;
  }
  .on-dark .brf-h2 { color: #fff; }
  .brf-body-p { font-size: 1.02rem; max-width: 660px; margin-bottom: 1.1rem; }
  .brf-body-p strong { color: var(--brf-dark); font-weight: 600; }
  .on-dark .brf-body-p strong { color: #fff; }

  .brf-statement {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.6rem, 3.2vw, 2.2rem);
    font-weight: 600;
    color: var(--brf-dark);
    line-height: 1.22;
    max-width: 28ch;
    margin-bottom: 1.6rem;
  }
  .brf-statement span { color: var(--brf-caramel); }

  .brf-pullout {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 500;
    font-style: italic;
    color: var(--brf-caramel);
    max-width: 24ch;
    line-height: 1.25;
    margin-top: 2rem;
  }

  /* FIT GRID */
  .brf-fit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
  .brf-fit-card {
    border: 1px solid var(--brf-line);
    border-radius: 12px;
    padding: 1.8rem;
    background: var(--brf-white);
  }
  .brf-fit-card.is-lane { border: 2px solid var(--brf-caramel); }
  .brf-fit-card h3 {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 0.8rem;
    color: var(--brf-muted);
  }
  .brf-fit-card.is-lane h3 { color: var(--brf-caramel); }
  .brf-fit-card p { font-size: 0.98rem; }

  /* CATEGORIES */
  .brf-cats { display: flex; flex-direction: column; margin-top: 1.5rem; }
  .brf-cat {
    display: grid;
    grid-template-columns: 1.6rem 1fr;
    gap: 1.2rem;
    padding: 1.4rem 0;
    border-top: 1px solid var(--brf-line);
  }
  .brf-cat:last-child { border-bottom: 1px solid var(--brf-line); }
  .brf-cat-n {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--brf-caramel);
    padding-top: 0.2rem;
  }
  .brf-cat h3 { font-size: 1.12rem; color: var(--brf-dark); margin-bottom: 0.25rem; font-weight: 600; }
  .brf-cat p { font-size: 0.98rem; margin-bottom: 0.4rem; }
  .brf-cat .brf-proof { font-size: 0.9rem; color: var(--brf-muted); font-style: italic; }

  /* PROOF STATS */
  .brf-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2.2rem 0; }
  .brf-stat {
    border-top: 2px solid var(--brf-caramel);
    padding-top: 1rem;
  }
  .brf-stat .n {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: #fff;
    line-height: 1;
    display: block;
    margin-bottom: 0.4rem;
  }
  .brf-stat .l { font-size: 0.92rem; color: rgba(255,255,255,0.65); }

  /* LOOP LIST */
  .brf-loop { list-style: none; margin: 1.5rem 0 0; padding: 0; max-width: 700px; }
  .brf-loop li {
    display: grid;
    grid-template-columns: 1.6rem 1fr;
    gap: 1rem;
    padding: 0.9rem 0;
    border-top: 1px solid var(--brf-line);
    font-size: 1rem;
  }
  .brf-loop li:last-child { border-bottom: 1px solid var(--brf-line); }
  .brf-loop .x { color: var(--brf-caramel); font-weight: 600; }
  .brf-loop strong { color: var(--brf-dark); font-weight: 600; }

  /* CREDS */
  .brf-creds { list-style: none; margin: 1.8rem 0 0; padding: 0; }
  .brf-cred {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid var(--brf-line);
  }
  .brf-cred:last-child { border-bottom: 1px solid var(--brf-line); }
  .brf-cred .role { font-weight: 600; color: var(--brf-dark); font-size: 0.96rem; }
  .brf-cred .role span { display: block; color: var(--brf-caramel); font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.2rem; }
  .brf-cred p { font-size: 0.95rem; }

  /* DEMO BAND */
  .brf-demo {
    background: var(--brf-caramel);
    padding: 4.5rem 0;
  }
  .brf-demo .brf-snum { color: rgba(255,255,255,0.85); }
  .brf-demo h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    color: #fff;
    font-size: clamp(1.9rem, 4vw, 2.7rem);
    line-height: 1.12;
    margin-bottom: 1.3rem;
    max-width: 22ch;
  }
  .brf-demo p { color: rgba(255,255,255,0.92); font-size: 1.05rem; max-width: 660px; margin-bottom: 1rem; }
  .brf-demo p strong { color: #fff; }

  /* CTA */
  .brf-cta-band { background: var(--brf-dark); color: #fff; padding: 4.5rem 0; text-align: center; }
  .brf-cta-band h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 2.8rem);
    margin-bottom: 1rem;
    color: #fff;
  }
  .brf-cta-band p { font-size: 1.05rem; color: rgba(255,255,255,0.9); max-width: 540px; margin: 0 auto 2rem; }
  .brf-cta-band .brf-btn-light {
    display: inline-block;
    background: var(--brf-caramel);
    color: #fff;
    padding: 1rem 2.4rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.05rem;
    transition: background 0.2s, transform 0.2s;
  }
  .brf-cta-band .brf-btn-light:hover { background: var(--brf-caramel-deep); transform: translateY(-1px); }
  .brf-cta-links { margin-top: 1.4rem; font-size: 0.92rem; color: rgba(255,255,255,0.55); }
  .brf-cta-links a { color: var(--brf-caramel); text-decoration: none; }

  .brf-footer { background: var(--brf-dark); padding: 2rem; text-align: center; }
  .brf-footer p { font-size: 0.8rem; color: rgba(255,255,255,0.35); }
  .brf-footer a { color: var(--brf-caramel); text-decoration: none; }

  @media (max-width: 820px) {
    .brf-fit-grid { grid-template-columns: 1fr; }
    .brf-stats { grid-template-columns: 1fr; gap: 1.2rem; }
    .brf-cred { grid-template-columns: 1fr; gap: 0.4rem; }
    .brf-section { padding: 3.5rem 0; }
  }
`;

const Brief = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    const prevTitle = document.title;
    document.title = "The Brief · Dreamscope";

    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="brf-page">
      {/* HERO */}
      <header className="brf-hero">
        <div className="brf-wrap">
          <span className="brf-kicker">Dreamscope · The Brief</span>
          <h1>Months of expert work becomes days.</h1>
          <p className="brf-dek">
            I'm an operator, not a developer. I take expert work, break it
            down, and train AI to do it. This is the three-minute version of
            how, where it works, and where it doesn't.
          </p>
          <span className="brf-read-time">3-minute read</span>
          <div className="brf-cta-row">
            <a className="brf-btn" href="https://discovery.dreamscope.win/ai_maestro">
              Take the 15-minute discovery →
            </a>
            <span className="brf-quiet">
              or email{" "}
              <a href="mailto:joe@dreamscope.win?subject=The%20Brief%20-%20Let's%20talk">
                joe@dreamscope.win
              </a>
            </span>
          </div>
        </div>
      </header>

      {/* 01 THE PROBLEM */}
      <section className="brf-section on-white">
        <div className="brf-wrap">
          <div className="brf-snum">01 / The problem with AI right now</div>
          <p className="brf-statement">
            AI doesn't fail because the model is weak. It fails because no one
            taught it the judgment the work actually requires.{" "}
            <span>Tech teams build tools. Operators build judgment.</span>
          </p>
          <p className="brf-body-p">
            I've spent nine years building the systems that run companies: SOP
            suites, KPI structures, and BPM rollouts at Christina's, Dreamplex,
            Seller Candy, and Pizza 4P's. Then I built the Culture Engine,
            where I trained AI to do expert work that used to take months.
          </p>
          <p className="brf-body-p">
            AI Maestro is that same move, pointed at whatever process in your
            company is bottlenecked on one person's expertise. The hard part
            isn't getting AI to do the work once. It's knowing where it quietly
            gets the work <strong>wrong</strong> inside your domain, and
            building the checks that catch it before you have to.
          </p>
        </div>
      </section>

      {/* 02 IS THIS FOR YOU */}
      <section className="brf-section on-cream">
        <div className="brf-wrap">
          <div className="brf-snum">02 / First, whether this is for you at all</div>
          <h2 className="brf-h2">The test is judgment.</h2>
          <p className="brf-body-p">
            If your best person would handle two cases differently where a
            checklist would treat them the same, that's judgment. That's the
            work I train AI to do.
          </p>
          <div className="brf-fit-grid">
            <div className="brf-fit-card">
              <h3>Not my lane</h3>
              <p>
                Work that's pure repetition. Same steps, every time, no
                judgment in the middle. Simpler automation tools handle that
                for less money, and I'll point you to them.
              </p>
            </div>
            <div className="brf-fit-card is-lane">
              <h3>My lane</h3>
              <p>
                The report that needs an expert's read. The analysis only one
                person knows how to do. The review, the prep, the decision
                support that lives in your best operator's head and doesn't
                scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 WHERE IT PLAYS */}
      <section className="brf-section on-white">
        <div className="brf-wrap">
          <div className="brf-snum">03 / Where it plays</div>
          <h2 className="brf-h2">Five places expert work compresses.</h2>
          <div className="brf-cats">
            <div className="brf-cat">
              <div className="brf-cat-n">01</div>
              <div>
                <h3>Process compression</h3>
                <p>
                  Map a process end to end, then train AI on the steps that
                  carry real judgment.
                </p>
                <p className="brf-proof">
                  Interim COO through 7-to-70 headcount and 6x revenue at
                  Seller Candy. ~4,056 hours a year automated out of one
                  operation at Dreamplex.
                </p>
              </div>
            </div>
            <div className="brf-cat">
              <div className="brf-cat-n">02</div>
              <div>
                <h3>Reporting and insight</h3>
                <p>
                  The data exists. The report doesn't. AI pulls it together,
                  writes the narrative, and flags what's off.
                </p>
                <p className="brf-proof">
                  Culture Engine leaders query their own data in plain English
                  and get cited answers in seconds, live in the room.
                </p>
              </div>
            </div>
            <div className="brf-cat">
              <div className="brf-cat-n">03</div>
              <div>
                <h3>The company brain</h3>
                <p>
                  Feed it everything (values, history, customers, processes)
                  and it answers with full context.
                </p>
                <p className="brf-proof">
                  On a 450-person company, it flagged 5 of 7 leadership
                  departures before they happened.
                </p>
              </div>
            </div>
            <div className="brf-cat">
              <div className="brf-cat-n">04</div>
              <div>
                <h3>Knowledge consolidation</h3>
                <p>
                  Scattered tribal knowledge becomes structured, searchable,
                  and validated.
                </p>
                <p className="brf-proof">
                  260+ frontline SOPs at Pizza 4P's consolidated into one
                  operating backbone.
                </p>
              </div>
            </div>
            <div className="brf-cat">
              <div className="brf-cat-n">05</div>
              <div>
                <h3>Customer-facing intelligence</h3>
                <p>
                  Inbound questions, order routing, recommendations, demand
                  sensing.
                </p>
                <p className="brf-proof">
                  The hardest of the five, because data quality gates it. We
                  say so up front.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 PROOF */}
      <section className="brf-section on-dark">
        <div className="brf-wrap">
          <div className="brf-snum">04 / Proof it works</div>
          <h2 className="brf-h2">Not a demo. It ran on a real company.</h2>
          <p className="brf-body-p">
            The Culture Engine is the built proof. I took my own expert work,
            20+ years of culture and operations, and trained AI to do it. Then
            I pointed it at a 450-person company across 20+ locations: 290
            survey responses, 40 leadership interviews, a year of data.
          </p>
          <div className="brf-stats">
            <div className="brf-stat">
              <span className="n">5 of 7</span>
              <span className="l">
                leadership departures flagged before they happened
              </span>
            </div>
            <div className="brf-stat">
              <span className="n">-87%</span>
              <span className="l">
                supervisor sentiment crisis caught, invisible to all 40
                interviewed leaders
              </span>
            </div>
            <div className="brf-stat">
              <span className="n">161</span>
              <span className="l">
                working practices documented from their own top performers
              </span>
            </div>
          </div>
          <p className="brf-body-p">
            Work that took an expert months now takes days. The expert didn't
            get replaced. The expert got <strong>multiplied</strong>.
          </p>
        </div>
      </section>

      {/* 05 THE LOOP */}
      <section className="brf-section on-cream">
        <div className="brf-wrap">
          <div className="brf-snum">05 / Trained like an employee</div>
          <h2 className="brf-h2">AI gets things wrong. The build is what happens next.</h2>
          <p className="brf-body-p">
            Anyone selling you AI that doesn't make mistakes is lying to you.
            The difference is the correction loop, and that loop is the actual
            build:
          </p>
          <ul className="brf-loop">
            <li>
              <span className="x">×</span>
              <span>
                <strong>Corrections are spoken, not coded.</strong> The expert
                says what was wrong, the agent adjusts. Same as correcting a
                smart new hire.
              </span>
            </li>
            <li>
              <span className="x">×</span>
              <span>
                <strong>Instructions are versioned.</strong> Every change is
                tracked and reversible.
              </span>
            </li>
            <li>
              <span className="x">×</span>
              <span>
                <strong>Past cases get re-run.</strong> After every change, so
                drift gets caught instead of discovered.
              </span>
            </li>
            <li>
              <span className="x">×</span>
              <span>
                <strong>It flags its own uncertainty.</strong> Instead of
                bluffing, it asks. You stay the teacher.
              </span>
            </li>
          </ul>
          <p className="brf-body-p" style={{ marginTop: "1.6rem" }}>
            And the calls that shape the company (strategy, standards, hiring,
            money) stay yours.
          </p>
          <p className="brf-pullout">
            The right hand helps you make the call. It does not make the call
            for you.
          </p>
        </div>
      </section>

      {/* 06 THE OPERATOR */}
      <section className="brf-section on-white">
        <div className="brf-wrap">
          <div className="brf-snum">06 / The operator</div>
          <h2 className="brf-h2">Twenty-plus years operating. Nine across Asia.</h2>
          <ul className="brf-creds">
            <li className="brf-cred">
              <div className="role">
                Pizza 4P's<span>Culture &amp; Ops Excellence Director</span>
              </div>
              <p>
                40+ locations, 5 countries, 3,700 employees. 260+ SOPs into one
                backbone. eNPS up 20 points.
              </p>
            </li>
            <li className="brf-cred">
              <div className="role">
                Seller Candy<span>Interim COO</span>
              </div>
              <p>
                Built the operational foundation through 7-to-70 headcount and
                6x revenue.
              </p>
            </li>
            <li className="brf-cred">
              <div className="role">
                Dreamplex<span>Director of Central Operations</span>
              </div>
              <p>
                Full operations stack and BPM automation. Roughly 4,056 hours a
                year taken out of the work.
              </p>
            </li>
            <li className="brf-cred">
              <div className="role">
                Christina's Vietnam<span>Operations Team Leader</span>
              </div>
              <p>
                Scaling from 3 to 8 cities and 50 to 500+ employees. Manual and
                SOP suite from scratch.
              </p>
            </li>
            <li className="brf-cred">
              <div className="role">
                Dreamscope<span>The Culture Engine</span>
              </div>
              <p>
                An operator trained AI to do expert work that used to take
                months. Now the AI does it in days.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 07 THE DEMO */}
      <section className="brf-demo">
        <div className="brf-wrap">
          <div className="brf-snum">07 / How this was made</div>
          <h2>Made by the pattern it describes.</h2>
          <p>
            This page was written, designed, coded, and shipped by AI working
            from one operator's materials, in a single working session. No
            developer. No agency. No deck team.
          </p>
          <p>
            <strong>That is the product.</strong> Whatever your version of this
            is (the board report, the weekly analysis, the proposal that takes
            your best person three days), it can work the same way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="brf-cta-band">
        <div className="brf-wrap">
          <h2>The next step is 15 minutes.</h2>
          <p>
            Five categories, one priority pick, three free-text questions. We
            read every one. If your problem fits, we'll book a call.
          </p>
          <a className="brf-btn-light" href="https://discovery.dreamscope.win/ai_maestro">
            Take the discovery →
          </a>
          <div className="brf-cta-links">
            Email{" "}
            <a href="mailto:joe@dreamscope.win?subject=The%20Brief%20-%20Let's%20talk">
              joe@dreamscope.win
            </a>{" "}
            · Prefer paper? <a href="/Dreamscope_Brief.pdf">Download this brief as a PDF</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="brf-footer">
        <p>
          Dreamscope · <a href="mailto:joe@dreamscope.win">joe@dreamscope.win</a> · © 2026
        </p>
      </footer>
    </div>
  );
};

export default Brief;
