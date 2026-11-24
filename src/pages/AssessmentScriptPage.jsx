/* eslint-disable react/no-unescaped-entities, react/prop-types */
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/* Private page: served from an unguessable route, not linked anywhere, kept out of search. */
export const ASSESSMENT_ROUTE = "/s-2226b55857e7b304";

const CALLOUTS = {
  SAY: { color: "#60a5fa", label: "Say" },
  DO: { color: "#4ade80", label: "Do" },
  PROMPT: { color: "#c084fc", label: "Prompt" },
  CHECK: { color: "#fbbf24", label: "Check" },
};

const Tag = ({ type }) => {
  const c = CALLOUTS[type];
  return (
    <span className="inline-block font-mono text-[11px] font-semibold tracking-wide rounded-md px-1.5 py-0.5 mr-2 align-[1px]"
      style={{ color: c.color, border: `1px solid ${c.color}55`, background: `${c.color}14` }}>
      {type}
    </span>
  );
};

const P = ({ children, className = "" }) => (
  <p className={`text-[15px] leading-relaxed ${className}`} style={{ color: "var(--text-2)" }}>{children}</p>
);

const Ic = ({ children }) => (
  <code className="font-mono text-[13px] px-1.5 py-0.5 rounded-md" style={{ background: "var(--surface-alt)", color: "var(--text-1)" }}>{children}</code>
);

const Quote = ({ type = "SAY", children }) => (
  <div className="pl-4 py-1 my-3" style={{ borderLeft: `2px solid ${CALLOUTS[type].color}` }}>
    <P><Tag type={type} />{children}</P>
  </div>
);

const Item = ({ type, children }) => (
  <li className="mb-2.5"><P><Tag type={type} />{children}</P></li>
);

const CodeBlock = ({ children, label }) => {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(children); setDone(true); setTimeout(() => setDone(false), 1500); } catch { /* ignore */ }
  };
  return (
    <div className="relative my-3 rounded-xl overflow-hidden" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
      <div className="flex items-center justify-between px-3.5 py-1.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <span className="eyebrow" style={{ color: "var(--text-3)" }}>{label || "code"}</span>
        <button onClick={copy} className="inline-flex items-center gap-1 text-[11px]" style={{ color: "var(--text-3)" }} aria-label="Copy">
          {done ? <Check size={12} /> : <Copy size={12} />} {done ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="font-mono text-[12.5px] leading-relaxed px-3.5 py-3 overflow-x-auto whitespace-pre-wrap break-words" style={{ color: "var(--text-1)" }}>{children}</pre>
    </div>
  );
};

const Prompt = ({ children }) => (
  <div className="my-3">
    <p className="mb-1"><Tag type="PROMPT" /></p>
    <CodeBlock label="paste into claude code">{children}</CodeBlock>
  </div>
);

const Step = ({ title, time, children }) => (
  <section className="mt-14">
    <div className="flex items-baseline justify-between gap-4 mb-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]" style={{ color: "var(--text-1)" }}>{title}</h2>
      {time && <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-3)" }}>{time}</span>}
    </div>
    {children}
  </section>
);

const H3 = ({ children }) => (
  <h3 className="text-lg font-semibold mt-8 mb-2" style={{ color: "var(--text-1)" }}>{children}</h3>
);

const Check_ = ({ children }) => (
  <div className="my-3 rounded-xl px-4 py-3" style={{ background: `${CALLOUTS.CHECK.color}12`, border: `1px solid ${CALLOUTS.CHECK.color}40` }}>
    <div className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}><Tag type="CHECK" />{children}</div>
  </div>
);

const SCHEDULE = [
  ["Before the clock", "1. Create the project and start recording", "Folder, git and recorder are ready"],
  ["0-5 min", "2. Read the brief and write assumptions", "ASSUMPTIONS.md committed"],
  ["5-40 min", "3. Build the endpoints with Claude Code", "3 endpoints written and committed"],
  ["40-48 min", "4. Test everything with curl", "Every curl result matches what you expect"],
  ["48-60 min", "5. Push and explain", "Code on GitHub, walkthrough recorded"],
];

const CURLS = [
  ["1. View Asha → 200, 3 credits, no bookings", `curl -i http://localhost:3000/users/u1`],
  ["2. Unknown user → 404", `curl -i http://localhost:3000/users/xyz`],
  ["3. Book a visit → 201, COPY the code from the reply", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"userId":"u1","venueId":"v1"}'`],
  ["4. Ravi has 0 credits → 400", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"userId":"u2","venueId":"v1"}'`],
  ["5. Unknown user → 404", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"userId":"nope","venueId":"v1"}'`],
  ["6. Unknown venue → 404", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"userId":"u1","venueId":"nope"}'`],
  ["7. Missing fields → 400", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{}'`],
  ["8. Run TWICE: first 201 (Iron Gym's 2nd booking), then 409 (full)", `curl -i -X POST http://localhost:3000/bookings -H "Content-Type: application/json" -d '{"userId":"u1","venueId":"v1"}'`],
  ["9. Redeem → 200 (put YOUR code from step 3 in place of ABC123)", `curl -i -X POST http://localhost:3000/bookings/redeem -H "Content-Type: application/json" -d '{"code":"ABC123"}'`],
  ["10. Same command again → 409 already redeemed", null],
  ["11. Fake code → 404", `curl -i -X POST http://localhost:3000/bookings/redeem -H "Content-Type: application/json" -d '{"code":"FAKE00"}'`],
  ["12. Asha at the end → 1 credit, 2 bookings (1 redeemed, 1 booked)", `curl -i http://localhost:3000/users/u1`],
];

const AssessmentScriptPage = () => {
  /* Keep this page out of search engines and link previews */
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow, noarchive";
    document.head.appendChild(meta);
    const prev = document.title;
    document.title = "Script";
    return () => { document.head.removeChild(meta); document.title = prev; };
  }, []);

  return (
    <article className="px-5 sm:px-6 pt-6 pb-28">
      <div className="max-w-3xl mx-auto">
        <header>
          <p className="eyebrow mb-3" style={{ color: "var(--accent-text)" }}>Flexxd assessment</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] mb-3">Tejas's Start-to-End Script</h1>
          <p className="font-mono text-xs" style={{ color: "var(--text-3)" }}>Nov 23, 2026</p>
        </header>

        <Step title="How to use this script">
          <P>You have about 60 minutes: build 3 API endpoints with Claude Code, test them with curl, then explain your work on video. Keep this doc open beside your screen while you record.</P>
          <ul className="mt-4 space-y-2">
            <Item type="SAY">words to speak out loud on the recording</Item>
            <Item type="DO">things you type or run yourself</Item>
            <Item type="PROMPT">text to paste into Claude Code</Item>
            <Item type="CHECK">what to look for in Claude's answer before you accept it</Item>
          </ul>

          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-left text-[13.5px]">
              <thead>
                <tr style={{ background: "var(--surface-alt)", color: "var(--text-3)" }}>
                  {["Time", "Step", "Done when"].map((h) => <th key={h} className="px-4 py-2.5 font-semibold eyebrow">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(([t, s, d]) => (
                  <tr key={t} style={{ borderTop: "1px solid var(--border)", color: "var(--text-2)" }}>
                    <td className="px-4 py-2.5 font-mono whitespace-nowrap">{t}</td>
                    <td className="px-4 py-2.5" style={{ color: "var(--text-1)" }}>{s}</td>
                    <td className="px-4 py-2.5">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P className="mt-4">If you are behind at 40 minutes, skip the bonus (expiry and tests) and go straight to testing. Explaining your work matters more than extras.</P>
        </Step>

        <Step title="Step 1: Create the project" time="before the clock">
          <P>Setup time doesn't count, so do all of this calmly before you start reading the brief.</P>
          <ol className="mt-4 space-y-3 list-decimal pl-5 marker:text-[var(--text-3)]">
            <li><P><Tag type="DO" />Check that Node is installed:</P><CodeBlock label="bash">node -v</CodeBlock></li>
            <li><P><Tag type="DO" />Create the folder and start git (use your real surname):</P>
              <CodeBlock label="bash">{`mkdir flexxd-assessment-tejas-lastname\ncd flexxd-assessment-tejas-lastname\ngit init`}</CodeBlock></li>
            <li><P><Tag type="DO" />On GitHub, create an empty public repo with the same name: <Ic>flexxd-assessment-tejas-lastname</Ic>. Don't add a README there.</P></li>
            <li><P><Tag type="DO" />Open the folder in VS Code. Open a terminal and start Claude Code.</P></li>
            <li><P><Tag type="DO" />Open a second terminal tab for curl. If you're on Windows, use Git Bash, not PowerShell.</P></li>
            <li><P><Tag type="DO" />Start Loom or OBS: full screen, mic on. Record 10 seconds, play it back to check the sound, then start the real recording.</P></li>
            <li><P><Tag type="SAY" />"Hi, I'm Tejas, and this is my Flexxd full stack assessment. I'm starting the clock now, and first I'll read the whole brief before writing any code."</P></li>
          </ol>
        </Step>

        <Step title="Step 2: Write the assumptions" time="0-5 min">
          <P>Write these yourself, with no AI. They want to see your own thinking before any code exists.</P>
          <ol className="mt-4 space-y-3 list-decimal pl-5 marker:text-[var(--text-3)]">
            <li><P><Tag type="DO" />Scroll through the PDF on screen while you summarise it.</P></li>
            <li><P><Tag type="SAY" />"So this is a pay-per-visit booking backend. Users have credits, they book a venue, get a code, and redeem it when they arrive. Node and Express, in-memory data, three endpoints. Before coding, I'll write down what the brief doesn't tell me."</P></li>
            <li><P><Tag type="DO" />Create <Ic>ASSUMPTIONS.md</Ic> and type this while you explain each line:</P>
              <CodeBlock label="ASSUMPTIONS.md">{`# Assumptions

1. One booking costs exactly 1 credit, regardless of venue price.
   Price is stored for future billing.
2. Daily capacity = max bookings per venue per calendar day (server time).
   A full venue returns 409.
3. No cancellations or refunds for now. An unused booking keeps the credit
   spent.
4. No authentication. Anyone with a code can redeem it. This is a known risk.
5. Redemption codes are random 6-character uppercase strings and must be
   unique.`}</CodeBlock></li>
            <li><P><Tag type="SAY" />a reason for each one, for example: "I'm assuming 1 credit per visit because the brief says 'deducts one credit' and never links price to credits." "No login, because it isn't mentioned and doesn't fit in an hour, but I'm flagging it as a risk."</P></li>
            <li><P><Tag type="SAY" />"I may change these as I build, and I'll say so if I do."</P></li>
            <li><P><Tag type="DO" /></P><CodeBlock label="bash">{`git add .\ngit commit -m "Add assumptions"`}</CodeBlock></li>
          </ol>
        </Step>

        <Step title="Step 3: Build with Claude Code" time="5-40 min">
          <P>Give Claude Code one small piece at a time, and read every answer out loud before you accept it. Before each prompt, say why you're asking for it.</P>

          <H3>3a. Give context (don't let it build everything)</H3>
          <Prompt>{`I'm doing a timed technical assessment. I'll build a small Express booking API step by step. Don't build anything yet. Wait for my instructions for each part, and keep the code simple in one index.js file.`}</Prompt>
          <Quote>"I'm building this one piece at a time so I can review each part."</Quote>

          <H3>3b. Setup and seed data</H3>
          <Prompt>{`Set up a Node project with Express. In index.js, create in-memory arrays: users (id, name, credits), venues (id, name, pricePerVisit, dailyCapacity), and an empty bookings array. Seed users u1 "Asha" with 3 credits and u2 "Ravi" with 0 credits. Seed venues v1 "Iron Gym" (price 500, capacity 2) and v2 "Yoga Studio" (price 300, capacity 10). Use express.json(), export app, and only call app.listen(3000) when the file is run directly. No endpoints yet. Then commit with "Set up server and seed data".`}</Prompt>
          <Quote>"Ravi has 0 credits and Iron Gym has capacity 2 on purpose, so I can easily show those errors."</Quote>
          <Check_><Ic>express.json()</Ic> is there, IDs are strings, <Ic>app</Ic> is exported.</Check_>

          <H3>3c. GET /users/:id</H3>
          <Prompt>{`Add GET /users/:id. Return 404 { error: "User not found" } if missing, otherwise the user plus a bookings array of their bookings. Then commit.`}</Prompt>
          <Check_>it filters bookings by <Ic>userId</Ic>.</Check_>

          <H3>3d. POST /bookings (the most important one)</H3>
          <Quote>"The order of checks matters here. I never want to take a credit and then fail."</Quote>
          <Prompt>{`Add POST /bookings taking { userId, venueId }. Do ALL checks before changing any data, in this order: 400 if fields are missing, 404 if the user isn't found, 404 if the venue isn't found, 400 if the user has 0 credits, 409 if the venue already has dailyCapacity bookings today. Only then deduct 1 credit and create { id, userId, venueId, code, status: "booked", createdAt, redeemedAt: null }. The code is a random unique 6-character uppercase string. Return 201 with the booking. Then commit.`}</Prompt>
          <Check_>out loud:
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Is the credit taken only after every check? If not: "That's a bug, I'll ask Claude to fix it."</li>
              <li>Does it make sure the code isn't already used?</li>
              <li>How does it decide what "today" is?</li>
            </ul>
          </Check_>
          <P>Catching a mistake like this is a good moment for your recording.</P>

          <H3>3e. POST /bookings/redeem</H3>
          <Prompt>{`Add POST /bookings/redeem taking { code }. 400 if missing, 404 if not found, 409 if already redeemed. Otherwise set status to "redeemed" and redeemedAt to now, and return 200 with the booking. Then commit.`}</Prompt>
          <Quote>"409 for already redeemed, because it clashes with the booking's current state. It isn't bad input."</Quote>

          <H3>3f. Bonus: only if you're before 35 minutes</H3>
          <Prompt>{`Add a 10-minute expiry. Store expiresAt on each booking using a constant CODE_TTL_MS. In redeem, return 410 { error: "Code expired" } if it's past expiresAt. Then commit.`}</Prompt>
          <Prompt>{`Add 2 tests with node:test and supertest: booking with 0 credits returns 400 and creates no booking, and redeeming the same code twice returns 409. Add "test": "node --test" to package.json. Then commit.`}</Prompt>
          <P><Tag type="DO" /><Ic>npm test</Ic> and check that every test passes.</P>
        </Step>

        <Step title="Step 4: Test everything with curl" time="40-48 min">
          <P>Restart the server so the data is fresh, then run these in your second terminal, in this order. Say each expected result out loud before you run the command, then confirm it.</P>
          <P className="mt-3"><Tag type="DO" />in terminal 1: <Ic>node index.js</Ic> (you should see the server running on port 3000).</P>
          <Quote>"I'm testing the happy path first, then every error case. -i shows the status code."</Quote>

          <div className="mt-4 space-y-4">
            {CURLS.map(([title, cmd]) => (
              <div key={title}>
                <p className="text-[13px] font-medium" style={{ color: "var(--text-1)" }}>{title}</p>
                {cmd && <CodeBlock label="curl">{cmd}</CodeBlock>}
              </div>
            ))}
          </div>

          <Quote>after step 12: "Asha started with 3 credits and made 2 successful bookings, so she has 1 left. The failed booking didn't take a credit, which shows the checks run before any data changes."</Quote>
          <P className="mt-3">If a result is wrong: <Tag type="SAY" />"That's not what I expected", fix it with Claude Code, re-test, and commit. They said broken moments are useful to see.</P>
          <P className="mt-3">The browser only works for steps 1 and 2 (GET). Bookings and redeem are POST requests with a JSON body, which an address bar can't send. That's why we use curl. Postman also works if you prefer buttons.</P>
        </Step>

        <Step title="Step 5: Push and explain" time="48-60 min">
          <H3>5a. README and push (2 min)</H3>
          <Prompt>{`Write a short README.md: what this is, how to run it, the endpoints, the error codes, and next steps (venue-only redemption, audit log, cancellations, database). Then commit.`}</Prompt>
          <P><Tag type="DO" /></P>
          <CodeBlock label="bash">{`git branch -M main\ngit remote add origin https://github.com/YOUR-USERNAME/flexxd-assessment-tejas-lastname.git\ngit push -u origin main`}</CodeBlock>
          <Quote>"The code is pushed. Now I'll explain it as if I'm talking to a non-technical founder."</Quote>

          <H3>5b. Walkthrough script (5-10 min)</H3>
          <P>Speak slowly. Keep the code and terminal on screen.</P>

          <h4 className="font-semibold mt-6 mb-1" style={{ color: "var(--text-1)" }}>1. What I built (1-2 min)</h4>
          <Quote>"I built the engine behind booking a gym visit. A member has credits. When they book, one credit is spent and they get a unique code. At the gym, the code is entered and marked as used, so it can't be used twice. Each gym has a daily limit so it can't be overbooked. Codes also expire after 10 minutes." (Drop the last sentence if you skipped the bonus.)</Quote>
          <P><Tag type="DO" />Run a few curl commands again to show it working.</P>

          <h4 className="font-semibold mt-6 mb-1" style={{ color: "var(--text-1)" }}>2. What I skipped and what's next (1 min)</h4>
          <Quote>"To fit the hour, I skipped logins, a real database (so data resets when the server restarts) and cancellations. Next I'd add a database, separate logins for members and gyms, and cancellations with credit refunds."</Quote>

          <h4 className="font-semibold mt-6 mb-1" style={{ color: "var(--text-1)" }}>3. My assumptions (1-2 min)</h4>
          <P>Read your 5 assumptions quickly. Then:</P>
          <Quote>"One I'd change: with a 10-minute expiry, someone who books from home has to arrive within 10 minutes, which isn't realistic. In a real product I'd link the code to a booked time slot."</Quote>
          <P>Mention anything else that changed while you were building.</P>

          <h4 className="font-semibold mt-6 mb-1" style={{ color: "var(--text-1)" }}>4. How I used AI (2 min)</h4>
          <Quote>"I used Claude Code, but one piece at a time so I could review each part. I gave it the exact order of checks I wanted. Things I had to catch or change were: [say the real ones from your session]. I tested every endpoint with curl, including all the error cases."</Quote>

          <h4 className="font-semibold mt-6 mb-1" style={{ color: "var(--text-1)" }}>5. The 6pm scenario (2-3 min)</h4>
          <Quote>"A gym says a code was redeemed at 6pm but nobody came in.</Quote>
          <Quote>To investigate with what I built, I'd find the booking with that code. It tells me which member booked it, when it was created, and confirms it was redeemed at 6pm. Then I'd check that member's history for a pattern.</Quote>
          <Quote>But there's a gap. My system records when a code was used, not who used it. There's no login, so anyone with the code could redeem it, even the member from home.</Quote>
          <Quote>To stop it happening again, I'd add four things. Only gym staff can redeem, with their own login. The system checks that the gym redeeming is the gym that was booked. Every redemption attempt is logged with who, when and where. And the member gets a notification when their code is used, so problems are caught straight away."</Quote>
          <P className="mt-4"><Tag type="SAY" />Close: "That's everything. Thanks for watching."</P>
          <P className="mt-2"><Tag type="DO" />Stop the recording.</P>
        </Step>

        <Step title="Submit and golden rules">
          <P>Submit within 48 hours of receiving the assessment.</P>
          <ul className="mt-4 space-y-2">
            {[
              ["Video renamed to", "flexxd-assessment-tejas-lastname.mp4"],
              ["GitHub repo is public and named", "flexxd-assessment-tejas-lastname"],
              ["The repo shows several commits, not just one", null],
              ["Video uploaded and repo link pasted into their form", null],
            ].map(([t, c]) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-1 w-4 h-4 rounded shrink-0" style={{ border: "1px solid var(--border-h)" }} />
                <P>{t} {c && <Ic>{c}</Ic>}</P>
              </li>
            ))}
          </ul>

          <H3>Golden rules for the recording</H3>
          <ol className="space-y-2 list-decimal pl-5 marker:text-[var(--text-3)]">
            <li><P>Never go silent. Even "I'm reading Claude's code now" is better than silence.</P></li>
            <li><P>Point out at least one thing the AI got wrong. If it gets everything right, say what you checked and why.</P></li>
            <li><P>If something breaks, keep going and say so. They said directly that this is useful to them.</P></li>
            <li><P>Don't paste in pre-written code. Build it live with Claude Code. They are grading how you guide and check the AI.</P></li>
          </ol>
        </Step>
      </div>
    </article>
  );
};

export default AssessmentScriptPage;
