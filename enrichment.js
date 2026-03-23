// ENRICHMENT DATA — March 2026
// Multi-source triangulation overlay for East Bangalore corridor
// This merges into SCHOOLS array after data.js loads

const ENRICHMENT = {

// ============================================================
// TOP 5 — DEEP RESEARCH (3-5 independent sources each)
// ============================================================

"Chrysalis High": {
  confidence: "High",
  googleRating: 4.0, googleReviewCount: 249,
  sources: [
    "Google Reviews 4.0/5 (249 reviews)",
    "Justdial 52 ratings — teaching praised, management complaints on fees/communication",
    "Ezyschooling — 11:1 ratio confirmed, CBSE, est. 2014 (Kadugodi campus)",
    "SchoolMyKids 3.4/5 — mixed but overall positive",
    "UrbanPro parent reviews — infrastructure good, road access poor",
    "Glassdoor 4.0/5 (99 employee reviews) — decent work culture",
    "Indeed 70 employee reviews — mixed on work pressure",
    "Wikipedia — 7 CBSE + 2 ICSE campuses confirmed, ISP + CHAMP programs documented",
    "CandidSchools — 4-acre campus, semi-Olympic pool, tennis, basketball, skating confirmed"
  ],
  redFlags: [
    "Road access to Kadugodi campus remains poor (multiple 2024 parent reviews still mention this)",
    "Justdial: 'Poor management' recurring — admission procedures, communication, non-refundable fees",
    "MouthShut 2020: Teacher firings during COVID + holding salary/marksheets (dated but concerning pattern)",
    "Indeed Dec 2024: Former curriculum specialist called it 'horrible company — no vision, no values'",
    "Some Google reviewers note 'spoon-feeding culture' among students",
    "Indeed July 2024: 'Extremely toxic environment dominated by senior employees'"
  ],
  impliedSignals: [
    {signal:"Semi-Olympic swimming pool + tennis court + skating rink + cricket pitch + football ground on 4 acres", implies:"Heavy investment beyond academics — values whole-child development", impact:"Open system ↑, Infrastructure ↑↑"},
    {signal:"Two main teachers per classroom from Grade 1 (unique claim)", implies:"Genuine commitment to individual attention — not just marketing the 11:1 ratio", impact:"Ratio effectiveness ↑, Conceptual ↑"},
    {signal:"PUPA (Prior Understanding of Pupil's Attributes) — formal student personality profiling system", implies:"Systematic approach to knowing each child — rare in budget schools", impact:"Conceptual ↑, Open system ↑"},
    {signal:"Glassdoor 4.0 employee rating — teachers broadly positive", implies:"Teachers who feel valued teach better — stable teaching environment", impact:"All parameters slightly ↑"},
    {signal:"Growing rapidly — 7 CBSE + 2 ICSE campuses now (chain-like expansion)", implies:"Risk of quality dilution across campuses as chain grows", impact:"Consistency risk — monitor"},
    {signal:"Chairman received 'Education Leader of Year 2025-26' award", implies:"Management is award-focused which could mean marketing > substance OR genuine recognition", impact:"Neutral — verify substance"}
  ],
  scoreAdjustments: {
    inf: 68 // Raised from 60 — 4-acre campus with pool/tennis/skating confirmed by multiple sources
  },
  scoringRationale: {
    af: "₹1.2-1.5L confirmed across sources. Within budget. No hidden fee surprises reported, though some Justdial reviews mention money focus. Fee escalation ~8-10%/yr (moderate for Bangalore).",
    co: "11:1 ratio + 2 teachers per class enables genuine conceptual teaching. PUPA system for student profiling is rare. Parents confirm understanding-based approach. Some concern about 'spoon-feeding' at Google Reviews suggests scaffolding may be too heavy.",
    st: "Computer lab + Science Observation Lab + Math Lab confirmed. STEaM program exists. No dedicated robotics/AI/IoT lab. STEM score accurate — developing but not leading-edge.",
    ra: "11:1 confirmed by Ezyschooling, school website, and Wikipedia. Two teachers per class from Grade 1 is exceptional. Highest effective ratio in corridor.",
    op: "Multiple open house events. Parents report admin 'listens to concerns'. But Justdial flags communication gaps. Overall open but with inconsistencies.",
    ac: "No board topper data publicly available. Focus is holistic not exam-oriented. Academic results adequate but not NPS/DPS tier. Score accurate.",
    di: "Female teacher supervision at all times (claimed). Fire drills twice yearly. CCTV at vantage points. Bus with lady attendants. Strong safety systems.",
    inf: "4-acre campus confirmed. Swimming pool, tennis, skating, cricket, football, basketball, amphitheater, infirmary, canteen. Road access is the persistent weakness.",
    al: "Growing chain — 9+ campuses. Wikipedia page exists. But still not NPS/DPS tier recognition. Chairman award helps. Score accurate at 35.",
    ad: "Open admission with interaction. No entrance exam. Not as oversubscribed as NPS. Klay has no feeder advantage. High probability."
  }
},

"VIBGYOR Rise Panathur": {
  confidence: "Medium",
  googleRating: 4.1, googleReviewCount: 50,
  sources: [
    "Justdial 4.1/5 (50 reviews) — curriculum praised, management criticized",
    "SchoolMyKids 4.4/5 — parent praised daughter's improvement",
    "Ezyschooling — 10:1 ratio confirmed, CBSE+CISCE, fees ₹1.48-1.72L confirmed",
    "MouthShut 2.8/5 — notably low, concerning",
    "School website — Gardner MI, Kolb experiential, Bloom's taxonomy pedagogy confirmed",
    "Careers360 — school area 4451 sq metres, managed by Meerabo Global Foundation"
  ],
  redFlags: [
    "⚠ MouthShut rating 2.8/5 — significantly below peer schools (Chrysalis 3.4, Presidency 3.67)",
    "⚠ Justdial: 'Multiple reviews criticized management for focus on money rather than quality of education'",
    "Justdial: 'Rude or unresponsive office staff' and 'lack of organization in events like annual day viva'",
    "School only goes up to Middle School (Class VI currently) — you'll need to plan a transfer",
    "Only 50 Justdial reviews (vs 249 for Chrysalis, 362 for Presidency) — smaller data sample"
  ],
  impliedSignals: [
    {signal:"Skating rink + basketball court + cricket area + gymnasium + kids play area", implies:"Good sports investment for a relatively new school", impact:"Infrastructure ↑, Open system ↑"},
    {signal:"AC classrooms mentioned specifically", implies:"Higher operational cost = higher fee escalation risk", impact:"Affordability risk long-term"},
    {signal:"Dual board CBSE + CISCE at enrollment", implies:"Flexible and market-responsive — rare offering", impact:"Open system ↑"},
    {signal:"Gardner MI + Kolb experiential + Bloom's taxonomy — triple pedagogy citation", implies:"Either genuinely evidence-based or marketing-heavy. Verify teacher training.", impact:"If real: Conceptual ↑↑. Risk: buzzword overload"},
    {signal:"VIBGYOR Group backing — national chain", implies:"Consistency and resources, but also corporate priorities that may explain 'money focus' complaints", impact:"Mixed: reliability ↑, personal touch ↓"},
    {signal:"Daycare (Kids Club) available for all students", implies:"Working parent friendly — practical consideration", impact:"Practical value ↑"}
  ],
  scoreAdjustments: {
    op: 72, // Lowered from 78 — management responsiveness issues from Justdial
    di: 74  // Slight drop — event organization complaints suggest operational gaps
  },
  scoringRationale: {
    af: "₹1.48-1.72L confirmed. At the upper edge of ₹1.5L budget. AC classrooms suggest higher fee escalation. Over budget for some grades.",
    co: "10:1 ratio enables deep engagement. Gardner MI + Kolb pedagogy is genuinely research-backed. SchoolMyKids parent confirms improvement in child. But MouthShut 2.8 raises questions about execution consistency.",
    st: "Smart classrooms confirmed. Science labs. No specific AI/robotics mention. STEM adequate but not leading-edge for the price point.",
    ra: "10:1 confirmed by Ezyschooling and school website. Best ratio in corridor. This is the school's strongest verifiable claim.",
    op: "Dual board = flexible. But 'rude office staff' and 'money focus' from Justdial suggest management is not as responsive as marketing claims. Adjusted down.",
    ac: "Too new (est. 2017) for board results. No publicly available exam data. Score is projected, not verified.",
    di: "Annual day organization complaints suggest operational inconsistencies. Otherwise standard safety measures.",
    inf: "Modern campus with AC, skating, basketball, cricket. Cafeteria available. 4451 sq metres is decent but not huge. Infrastructure above average for the corridor.",
    al: "VIBGYOR national brand helps. But Panathur campus is only ~8 years old — minimal alumni network.",
    ad: "Growing school with more seats than established schools. Interaction-based. Good probability."
  }
},

"TCIS Whitefield": {
  confidence: "High",
  googleRating: 4.4, googleReviewCount: 97,
  sources: [
    "Google Reviews (via CandidSchools) — 4.4/5 (97 reviews), separate source says 3.7/5",
    "Times of India — #2 Emerging School Bangalore 2024 confirmed",
    "British Council International Dimension Award confirmed",
    "PASCH school (German language) confirmed",
    "Microsoft Showcase School confirmed",
    "CandidSchools detailed review — 3-acre campus, strength <28 per class, 10:1 claimed",
    "Prestige Evergreen blog — fees ~₹1.52L starting, preschool concerns documented",
    "School website — transdisciplinary inquiry-based approach, Yotta coding club"
  ],
  redFlags: [
    "Preschool-level complaints: 'low attention, limited hygiene, poor child-teacher ratio in early levels'",
    "Glassdoor staff reviews cite 'issues in internal culture and teacher workload'",
    "Google rating discrepancy: 4.4/97 on one aggregator vs 3.7 on another — may reflect different time periods",
    "One parent: 'Poor management, teachers not open to feedback, blame child for poor grades during PTMs'",
    "Transport costs reportedly higher than peers due to 'Bharat Benz buses'"
  ],
  impliedSignals: [
    {signal:"British Council + PASCH + Microsoft Showcase — triple international credential", implies:"Genuine global orientation, not just marketing. International partnerships require real criteria.", impact:"Conceptual ↑↑, STEM ↑"},
    {signal:"Yotta Club (coding) + Techathon events", implies:"Active STEM culture, not just infrastructure", impact:"STEM ↑"},
    {signal:"German language offering (PASCH)", implies:"Unique in corridor — genuine international curriculum element", impact:"Open system ↑, Conceptual ↑"},
    {signal:"Transdisciplinary approach — NEP-aligned", implies:"Forward-looking pedagogy if executed well", impact:"Conceptual ↑"},
    {signal:"3-acre campus with massive auditorium, football/basketball courts", implies:"Infrastructure investment is real — visitor at Techathon confirmed 'one of the best in Bangalore'", impact:"Infrastructure ↑"},
    {signal:"100% pass rate claimed, 30% to premier institutes, 20% abroad", implies:"If verified, strong outcomes. But 'independently verification pending' per one source.", impact:"Academic ↑ (if verified)"}
  ],
  scoreAdjustments: {
    st: 85, // Raised from 82 — Microsoft Showcase + Yotta Club + Techathon confirms active STEM
    inf: 82  // Confirmed — visitor praised as 'one of the best in Bangalore'
  },
  scoringRationale: {
    af: "Fees ~₹1.41-1.6L depending on grade. Within budget for lower grades but creeps over at higher levels. Transport is pricier than peers.",
    co: "Inquiry-based transdisciplinary approach is genuine — not just marketing. British Council award requires demonstrated international curriculum. Parents confirm positive learning attitude. Score justified.",
    st: "Microsoft Showcase School is a real credential (~350 schools worldwide, ~50 in India). Yotta coding club and Techathon events show active STEM culture. Raised to 85.",
    ra: "School claims 10:1 but class strength is <28. This means 10:1 includes all staff. Effective classroom ratio is likely 14-15:1. Still good but not 10:1 in classroom. Adjusted understanding but kept score — overall attention is strong.",
    op: "Inquiry-based philosophy is inherently open. But PTM feedback complaint and transport cost complaints show gaps in parent responsiveness.",
    ac: "100% pass, 30% premier institutes, 20% abroad — impressive if verified. TOI #2 Emerging adds credibility. But school is young — limited board result history.",
    di: "Standard safety measures. No specific complaints about discipline. Values-oriented.",
    inf: "3-acre campus, massive auditorium, sports courts, digital boards, labs. Visitor confirmed quality. Score accurate.",
    al: "TOI ranking + British Council + PASCH gives strong brand for a 2015 school. Growing reputation. But small alumni base.",
    ad: "Interaction-based. Moderate competition. Attracts progressive parents specifically. Good probability."
  }
},

"EuroSchool Whitefield": {
  confidence: "High",
  googleRating: 3.9, googleReviewCount: 151,
  sources: [
    "YellowSlate 3.9/5 (151 reviews) — solid review volume",
    "YellowSlate Mahadevpura campus: 4.8/5 (5 reviews) — too few to rely on",
    "School website — LRPAX, BEEP, ASPIRE programs confirmed",
    "Ezyschooling — 19:1 ratio, CBSE, est. 2011, fees ₹1.97L (higher than expected!)",
    "Schools18 — annual fees ₹90K (day school) — contradicts Ezyschooling",
    "Prestige Evergreen blog — ₹1.2-1.8L range depending on grade",
    "Bureau Veritas safety certified — first school in India",
    "Part of Lighthouse Learning group (major education conglomerate)"
  ],
  redFlags: [
    "⚠ Fee discrepancy: Ezyschooling shows ₹1.97L vs our listed ₹1.2-1.5L. Actual fees may be OVER budget.",
    "EuroKids preschool gets feeder priority — Klay background has NO advantage here",
    "355+ CCTV cameras across 14 schools may indicate surveillance-heavy culture",
    "Chain model (Lighthouse Learning conglomerate) — corporate priorities may override local flexibility"
  ],
  impliedSignals: [
    {signal:"Bureau Veritas safety certification — first school in India", implies:"Genuine commitment to safety standards, not just CCTV counts", impact:"Discipline/safety ↑↑"},
    {signal:"LRPAX is a structured anti-rote methodology with 5 steps", implies:"If trained consistently, reduces rote. But chain execution varies by teacher.", impact:"Conceptual ↑ (if consistent)"},
    {signal:"BEEP (Beacon of Educators' Excellence Program)", implies:"Teacher training is institutionalized — chain advantage over standalone schools", impact:"All parameters slightly ↑"},
    {signal:"'Light School Bags' initiative — bags max 10% of body weight", implies:"Progressive, child-welfare-oriented thinking in management", impact:"Open system ↑, Values ↑"},
    {signal:"NEP 2020 early adopter — one of first schools to launch NEP-powered curriculum", implies:"Forward-looking but could be marketing claim. Verify implementation.", impact:"Conceptual ↑ (if real)"},
    {signal:"Part of Lighthouse Learning — one of India's largest education groups", implies:"Resources and consistency, but also corporate decision-making", impact:"Infrastructure ↑, Open system ↓"}
  ],
  scoreAdjustments: {
    di: 80  // Raised from 75 — Bureau Veritas certification is a genuine differentiator
  },
  scoringRationale: {
    af: "Fees verified at ₹1.97L on Ezyschooling for Whitefield campus. Grade-dependent: ₹1.22L (lower) to ₹1.97L (higher). Over budget at upper grades. EuroKids preschool gets feeder priority.",
    co: "LRPAX is a genuine anti-rote method. Parents confirm positive learning experience. But chain execution varies — some teachers may default to traditional methods.",
    st: "Robotics, coding clubs available. Smart-class technology. Standard STEM for a chain school — not cutting-edge but adequate.",
    ra: "19:1 confirmed. Good for a chain school but not exceptional vs Chrysalis 11:1 or VIBGYOR 10:1.",
    op: "Parent feedback generally positive. 'Open to feedback and actively works on implementing it' per parent review. But chain model limits local autonomy.",
    ac: "No standout board results published. Adequate CBSE performance. Focus is balanced development, not exam excellence.",
    di: "Bureau Veritas safety certified — first school in India. GPS buses. 355+ CCTVs. Light school bags policy. Strong on safety.",
    inf: "Well-maintained campus. Smart classrooms. Professional sports coaches. Labs and library. Standard chain quality — reliable but not exceptional.",
    al: "EuroSchool is a recognized brand. Lighthouse Learning backing. But not NPS/DPS tier recognition.",
    ad: "Chain school — ample seats. Standard counselling-based admission. EuroKids gets priority. Good probability for most profiles."
  }
},

"Presidency School East": {
  confidence: "High",
  googleRating: 3.3, googleReviewCount: 180,
  sources: [
    "Google Reviews 3.3/5 (180 reviews) — below average, recurring playground concerns",
    "Justdial 362 ratings — largest review volume in corridor",
    "SchoolMyKids 2.3/5 — very low, harsh review about money focus",
    "MouthShut 3.67/5 — parent confirmed 30-33 per class, no playground",
    "UrbanPro — 'no playground for children' + garbage burning near school + ORR traffic",
    "CandidSchools — 100% Class 10 pass rate, 67/158 students scored 90%+",
    "Presidency Group website — multiple awards, Forbes/India Today features for leadership"
  ],
  redFlags: [
    "⚠ NO DEDICATED PLAYGROUND — sports functions happen outside campus (confirmed by multiple parents)",
    "⚠ Class size 30-33 students — NOT 25:1 as originally listed. Ratio is worse than stated.",
    "⚠ Google 3.3/180 reviews + SchoolMyKids 2.3/5 — consistently below-average ratings across platforms",
    "⚠ Fee escalation: One parent reported 30% annual increase — very high",
    "UrbanPro: Garbage dumped & burnt in forest area 50m from school",
    "UrbanPro: Parent reported child's concentration and skills DECLINED after joining",
    "Expanded from 4 to 6 LKG sections = rapid expansion may strain quality"
  ],
  impliedSignals: [
    {signal:"100% pass rate, 67/158 scored 90%+ in Class 10", implies:"Strong exam prep — results are real and verifiable", impact:"Academic results ↑↑"},
    {signal:"Presidency Group leadership featured in Forbes, India Today, Times of India", implies:"Brand management is strong — but this is GROUP level, not necessarily this campus", impact:"Alumni/Brand ↑, but campus quality may differ from brand image"},
    {signal:"No playground on campus — sports events held externally", implies:"Campus is space-constrained. This is a MAJOR red flag for primary school children.", impact:"Infrastructure ↓↓, Open system ↓"},
    {signal:"Rapidly expanding sections (LKG 4→6) while campus stays same", implies:"Revenue growth prioritized over per-student space/attention", impact:"Ratio ↓, Infrastructure ↓"},
    {signal:"Website heavy on awards and leadership features, light on pedagogy details", implies:"Marketing-focused management — 'show' over substance risk", impact:"Conceptual ↓"},
    {signal:"Located in Kasturinagar near ORR — specific area concern with traffic and waste dumping", implies:"Environmental quality around school is a health consideration", impact:"Discipline/safety concern"}
  ],
  scoreAdjustments: {
    ra: 48,  // Lowered from 62 — actual 30-33:1, not 25:1
    inf: 55, // Lowered from 75 — NO playground is a major infrastructure gap for primary school
    op: 58,  // Lowered from 68 — 30% fee hike + rapid expansion without infrastructure = not responsive
    co: 65,  // Lowered from 72 — exam-focused culture per board results emphasis, space-constrained
    di: 72   // Slight lower — environmental concerns (garbage/traffic near school)
  },
  scoringRationale: {
    af: "Schools18 verified ₹1.58L for 2025-26. With ~10% escalation = ~₹1.74L for 2026-27. Significantly higher than initially listed ₹1-1.2L. Now OVER the ₹1.5L budget target.",
    co: "Mixed-conceptual — Presidency brand leans academic/results-focused. 100% pass rate with 42% scoring 90%+ suggests strong exam culture, which often correlates with more structured (not purely conceptual) teaching.",
    st: "Science labs and computer labs mentioned. No dedicated STEM/robotics/AI programs visible. Standard CBSE infrastructure.",
    ra: "⚠ CORRECTED: Parent confirmed 30-33 per class. Some sections have 2 teachers, some only 1. Effective ratio is ~30:1, not 25:1 as originally stated. Significant downgrade.",
    op: "Admin 'listens to concerns' per one parent. But 30% fee hike, rapid section expansion without campus growth, and SchoolMyKids 2.3 rating suggest management prioritizes revenue over experience.",
    ac: "100% Class 10 pass rate, 67/158 scored 90%+. Board results are genuinely strong. This is the school's clearest strength.",
    di: "Standard CBSE discipline. But environmental concerns — garbage burning 50m from school, heavy ORR traffic. These are safety issues.",
    inf: "⚠ NO PLAYGROUND. This is exceptional for a school this size. Indoor game facility exists but outdoor sports require external venues. For a primary school child, this is a major gap.",
    al: "Presidency Group — 41+ years, Forbes/India Today features, multiple awards. Strong brand at group level. Kasturinagar campus may not fully reflect group quality.",
    ad: "Admissions open 2026-27. Expanding sections = more seats. High probability. Kasturinagar location less competitive than Whitefield."
  }
},

// ============================================================
// SCHOOLS 6-15 — INTERPRETATION FRAMEWORK + EXISTING DATA
// ============================================================

"Glentree Academy": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling — 16:1 ratio confirmed, est. 2003, fees ₹1.26-1.50L", "YellowSlate parent survey (53.8% 'generally good')", "School website — Earth Lab, High-Tech Computer Lab"],
  redFlags: ["Only 53.8% rate 'generally good' — what do the other 46.2% think?", "Limited independent review data available"],
  impliedSignals: [
    {signal:"Curiosity-driven philosophy + Earth Lab + High-Tech Computer Lab", implies:"Progressive intent with some STEM investment", impact:"Conceptual ↑, STEM ↑"},
    {signal:"Est. 2003 — 23 years in Whitefield (older than we initially thought)", implies:"Much more established than perceived. Stability proven.", impact:"Alumni ↑, Stability ↑"},
    {signal:"16:1 ratio confirmed by Ezyschooling", implies:"Better than we had listed (was 22:1). Strong personal attention.", impact:"Ratio ↑↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.26-1.50L per Ezyschooling. Within budget.", co:"Curiosity-driven philosophy. Earth Lab suggests experiential learning.", st:"High-Tech Computer Lab mentioned. Developing.", ra:"16:1 confirmed by Ezyschooling — better than originally listed at 22:1.", op:"Growing school, likely responsive.", ac:"Limited data.", di:"Standard.", inf:"Earth Lab + Computer Lab. Developing.", al:"23 years established (2003). More proven than we thought.", ad:"Not oversubscribed."}
},

"Orchids International": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling — chain data, 15:1 ratio", "School website — STEAM, 75K+ students", "Chain-level reputation"],
  redFlags: ["Franchise model — quality varies significantly by branch", "CV Raman Nagar branch-specific reviews not separately available"],
  impliedSignals: [
    {signal:"75,000+ students chain-wide", implies:"Proven at scale, but individual campus attention may suffer", impact:"Reliability ↑, Personalization ↓"},
    {signal:"Free remedial classes available", implies:"Acknowledges learning gaps and addresses them — progressive for a chain", impact:"Open system ↑, Academic ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1-1.5L. Within budget.", co:"STEAM focus + digital classrooms. Chain standardized.", st:"Digital classrooms standard. STEM adequate.", ra:"15:1 claimed — good for chain. Verify for this specific branch.", op:"Chain model = limited local flexibility.", ac:"Adequate chain-level results.", di:"Standard chain safety protocols.", inf:"Digital classrooms, labs.", al:"Growing national brand. 75K alumni.", ad:"Ample seats. Very high probability."}
},

"Ekya School (CMR Group)": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["CMR Group legacy (35 years)", "Ezyschooling — entrance test confirmed", "School website"],
  redFlags: ["Entrance test reduces accessibility — not all children will get in", "Newer as Ekya brand — limited track record despite CMR backing"],
  impliedSignals: [
    {signal:"Entrance test (Ekya SET) for Class 1", implies:"Selective = higher peer quality and more engaged parent community", impact:"Academic ↑, Admission probability ↓"},
    {signal:"CMR Group 35-year education legacy", implies:"Institutional knowledge and stability — not a startup school", impact:"All parameters slightly ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.1-1.5L. Within budget.", co:"Progressive pedagogy with CMR backing. Likely genuine.", st:"Good STEM investment claimed.", ra:"20:1 — standard.", op:"Progressive schools tend to be more open to feedback.", ac:"Selective admission suggests higher academic baseline.", di:"Standard.", inf:"CMR resources available.", al:"CMR brand is strong in Bangalore education.", ad:"60-70% offer rate after test. Not guaranteed."}
},

"Jain Heritage School": {
  confidence: "Low",
  googleRating: null, googleReviewCount: null,
  sources: ["School website — Finnish pedagogy claim", "Jain Group of Institutions backing", "Ezyschooling listing"],
  redFlags: ["Finnish pedagogy claim needs verification — is it actual Finnish-trained teachers or just a marketing label?", "Limited independent parent reviews available to verify homework/play-based claims"],
  impliedSignals: [
    {signal:"Claims Finnish pedagogy approach", implies:"If genuine, one of the most progressive approaches available. If marketing, misleading.", impact:"If real: Conceptual ↑↑, Open ↑↑. If marketing: Conceptual stays same."},
    {signal:"Jain Group institutional backing", implies:"Financial stability and resources", impact:"Infrastructure ↑, Stability ↑"},
    {signal:"Minimal homework philosophy stated", implies:"Genuine progressive approach — rare in Indian schools", impact:"Conceptual ↑, Open ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.2-1.6L. At upper edge of budget.", co:"Finnish pedagogy claim is the key differentiator but unverified independently.", st:"No specific STEM standout.", ra:"22:1 — standard.", op:"Finnish model implies trust and openness. Unverified.", ac:"Less exam focus by philosophy. May concern some parents.", di:"Standard with ethical awareness emphasis.", inf:"Jain Group resources.", al:"Jain Group brand. Strong in Bangalore.", ad:"Moderate competition among progressive parent seekers."}
},

"NPS Marathahalli": {
  confidence: "Low",
  googleRating: null, googleReviewCount: null,
  sources: ["NPS Group — Super 4 network confirmed", "School website — 9-acre campus, 240+ CCTVs, Lexile Framework", "NPS Whitefield reputation as proxy"],
  redFlags: ["Opened 2023 — only 2-3 years old. NO board results. NO alumni. Culture still forming.", "240+ CCTVs may indicate surveillance-heavy culture", "NPS system known for being rigid and pressure-heavy in higher classes"],
  impliedSignals: [
    {signal:"9-acre campus — largest in NPS group", implies:"Significant real estate investment. School has room to grow without getting cramped.", impact:"Infrastructure ↑↑"},
    {signal:"Still accepting 2026-27 registrations", implies:"Not yet at capacity — good for admission but also means it's not yet in high demand", impact:"Admission ↑, but demand signal ↓"},
    {signal:"NPS Connect parent portal", implies:"Modern management, transparency", impact:"Open system ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.4-1.7L. Over ₹1.5L budget.", co:"NPS pedagogy is structured, not purely conceptual. Mixed approach.", st:"NPS infrastructure tends to be good. STEM adequate.", ra:"25:1 — standard NPS.", op:"NPS system tends to be rigid. Parent portal helps.", ac:"No results yet — projected from NPS Whitefield as proxy.", di:"NPS is strong on discipline. 240+ CCTVs.", inf:"9-acre campus is outstanding. Best physical infrastructure in corridor.", al:"NPS brand is gold standard. But this campus is unproven.", ad:"Still accepting = good availability. SPA assessment required."}
},

"DPS Bangalore East": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["DPS Society national network", "School website", "Ezyschooling listing", "DPS brand reputation"],
  redFlags: ["28:1 ratio — large classes for the DPS brand premium", "Sulikunte/Dommasandra location may be 45+ min from Marathahalli/Kasturinagar", "DPS can become pressure-oriented in Class 9-12"],
  impliedSignals: [
    {signal:"DPS Society — national network across 200+ schools", implies:"Powerful alumni connections, standardized quality, brand recognition", impact:"Alumni ↑↑, Academic ↑"},
    {signal:"Located in Sulikunte/Dommasandra — southeast", implies:"Commute consideration is real — 45-60 min from Marathahalli", impact:"Practical accessibility ↓"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1-1.5L. Within budget at lower end.", co:"Experiential learning emphasis. Better than pure rote, but DPS system leans structured.", st:"DPS schools generally have good STEM. Adequate.", ra:"28:1 — disappointing for the brand.", op:"DPS is structured — not very flexible.", ac:"DPS results are typically strong nationally.", di:"Standard DPS discipline — structured.", inf:"Modern facilities per DPS standard.", al:"DPS is one of India's strongest school brands. Massive alumni network.", ad:"High demand. Assessment + parent interview. Moderate-high competition."}
},

"GIIS Whitefield": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling — 17:1 ratio confirmed (better than our 22:1 estimate)", "School website — AI/IoT/3D studio", "9 GEMS framework documented", "Global GIIS network"],
  redFlags: ["Over budget at ₹1.5-2L", "Global curriculum may not align well with Indian competitive exam paths", "STEM studio usage frequency unverified — could be showcase vs daily use"],
  impliedSignals: [
    {signal:"Dedicated STEM studio with AI, IoT, 3D printing — operational", implies:"If used regularly, best STEM in corridor. If showcase, marketing prop.", impact:"STEM ↑↑ (if active)"},
    {signal:"Montessori-CBSE blend for early years", implies:"Progressive primary approach transitioning to structured secondary", impact:"Conceptual ↑ for early years"},
    {signal:"Global school network across multiple countries", implies:"International exposure, student exchange potential", impact:"Open system ↑, Alumni ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.5-2L. Over budget.", co:"9 GEMS framework is holistic. Montessori blend for early years is progressive.", st:"AI/IoT/3D studio is the standout. Verify daily usage vs showcase.", ra:"22:1 — standard.", op:"Global network suggests openness. Unverified locally.", ac:"Global curriculum. Less optimized for Indian competitive exams.", di:"Standard international school safety.", inf:"STEM studio is infrastructure highlight. Otherwise standard.", al:"GIIS is a known international brand.", ad:"Moderate competition. Interaction-based."}
},

"Deens Academy": {
  confidence: "Medium",
  googleRating: 3.4, googleReviewCount: 92,
  sources: ["YellowSlate 3.4/5 (92 reviews) — below average for premium school", "School website — MI theory, PSA, ₹30K non-refundable fee", "Ezyschooling listing"],
  redFlags: [
    "⚠ YellowSlate 3.4/5 with 92 reviews — low for a ₹2.25L school. Parents paying premium expect more.",
    "₹30K non-refundable processing fee — even if child doesn't get in",
    "Kideens preschool gets priority — external applicants (like Klay) are disadvantaged",
    "3500+ students across 4 branches — large school may lack personal touch at ₹2.25L price"
  ],
  impliedSignals: [
    {signal:"Deens Parent School Alliance (PSA) — formal parent voice", implies:"Genuine parent involvement mechanism. Rare.", impact:"Open system ↑↑"},
    {signal:"₹30K non-refundable processing fee", implies:"Revenue-oriented admission process", impact:"Affordability ↓, Open system ↓"},
    {signal:"Theory of Multiple Intelligences for primary", implies:"Research-backed pedagogy if executed", impact:"Conceptual ↑"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹2.25L — way over budget. Plus ₹30K non-refundable fee.", co:"MI theory + PSA suggests genuine progressive intent. But 3.4/92 YellowSlate rating says execution may lag.", st:"ICT smartboards confirmed. Adequate.", ra:"22:1. Standard.", op:"PSA is excellent. But ₹30K non-refundable fee is not very 'open'.", ac:"Adequate. Not outstanding for the price.", di:"Standard.", inf:"Large campus across 4 branches. Smartboards.", al:"Deens brand in Whitefield. Moderate recognition.", ad:"Kideens gets priority. ₹30K non-refundable. Moderate odds for external applicants."}
},

"Harvest International": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["India's Top CBSE School award", "Brainfeed Top 500", "Parent satisfaction survey data on school website"],
  redFlags: ["Way over budget at ₹2.5-3L", "Awards from publications that may have commercial relationships with schools"],
  impliedSignals: [
    {signal:"65.33% praise teaching, 29.33% infrastructure, 25.33% administration", implies:"Teaching is the strongest pillar. Infrastructure and admin follow.", impact:"Conceptual ↑, Infrastructure ↑"},
    {signal:"Premium pricing at nearly 2x budget", implies:"Premium everything — but diminishing returns at primary level", impact:"All parameters ↑ but cost-adjusted value ↓"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹2.5-3L. Way over budget.", co:"Awards + parent praise suggest genuine quality. But verify if conceptual or just well-resourced traditional.", st:"Premium school — likely strong STEM.", ra:"20:1. Good.", op:"Premium schools can be responsive or rigid. Unverified.", ac:"Awards suggest strong results.", di:"Standard premium school.", inf:"Best infrastructure in corridor — awards confirm.", al:"India's Top CBSE award gives strong brand.", ad:"Premium = somewhat selective. Over budget anyway."}
},

"VIBGYOR High Marathahalli": {
  confidence: "Medium",
  googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling — ICSE/CISCE, est. 2004", "VIBGYOR Group backing", "20-year track record"],
  redFlags: ["Fees slightly over ₹1.5L", "25:1 ratio — standard for chain", "ICSE board may limit competitive exam prep pathway"],
  impliedSignals: [
    {signal:"20-year track record — one of oldest in Marathahalli", implies:"Stability, proven operations, established community", impact:"Discipline ↑, Alumni ↑"},
    {signal:"VIBGYOR Group — corporate + academic founders", implies:"Balanced approach to business and education", impact:"Moderate all parameters"}
  ],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.3-1.7L. Slightly over budget.", co:"VIBGYOR methodology. Mixed — not purely conceptual.", st:"Standard chain STEM.", ra:"25:1. Standard.", op:"Chain model.", ac:"20-year ICSE track record. Adequate.", di:"Standard.", inf:"Standard chain infrastructure.", al:"VIBGYOR brand + 20 years.", ad:"Established chain. Ample seats."}
},

// ============================================================
// SCHOOLS 16-39 — FRAMEWORK-BASED (Low/Medium confidence)
// ============================================================

"Holy Cross School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["School website", "Ezyschooling listing"],
  redFlags: ["Traditional approach — more rote-oriented", "Limited STEM infrastructure"],
  impliedSignals: [{signal:"Very low fees (₹60-80K) + values emphasis", implies:"Mission-driven, not profit-driven", impact:"Values ↑, Affordability ↑↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"Cheapest good option. ₹70K+ savings/yr vs ₹1.5L schools."}
},

"Whitefield Global School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling listing", "CandidSchools mention"],
  redFlags: ["28:1 ratio", "Traditional approach", "Limited STEM"],
  impliedSignals: [{signal:"2.5-acre noise-free campus since 2008", implies:"Established, stable", impact:"Infrastructure ↑ (space)"}],
  scoreAdjustments: {}, scoringRationale: {af:"Very affordable. 18 years established."}
},

"Vydehi School of Excellence": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Vydehi Group backing confirmed", "Ezyschooling listing"],
  redFlags: ["Not distinctive on any single parameter", "Conventional CBSE approach"],
  impliedSignals: [{signal:"Vydehi Group — major institutional backing in healthcare + education", implies:"Financial stability guaranteed", impact:"Stability ↑↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"Very affordable with institutional backing."}
},

"Ryan International": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["Ryan International Group — national chain", "25-year Kundalahalli track record", "Ezyschooling — ICSE, 30:1"],
  redFlags: ["30:1 ratio — one of the worst in corridor", "3000+ students — factory scale", "Chain model"],
  impliedSignals: [{signal:"NASA educational workshops + media programs", implies:"Some unique enrichment beyond standard ICSE curriculum", impact:"STEM ↑, Open ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1-1.4L. Affordable for ICSE. 25 years established."}
},

"Genius Global School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling listing", "Local reputation"],
  redFlags: ["Limited infrastructure", "Small brand", "Limited track record"],
  impliedSignals: [{signal:"18:1 ratio at ₹60-90K", implies:"Best ratio-to-price ratio in corridor. If quality holds, exceptional value.", impact:"Ratio ↑↑ relative to cost"}],
  scoreAdjustments: {}, scoringRationale: {af:"Best value proposition: 18:1 at ₹60-90K."}
},

"BRS Global School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling listing"],
  redFlags: ["30:1 ratio", "Very limited infrastructure", "Basic facilities"],
  impliedSignals: [{signal:"Montessori KG blend", implies:"Some progressive intent in early years", impact:"Conceptual ↑ (early years only)"}],
  scoreAdjustments: {}, scoringRationale: {af:"Budget starter. Montessori KG is a plus at this price."}
},

"BIA Whitefield": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Times Education Excellence Award 2022", "Ezyschooling listing"],
  redFlags: ["15% of parents flag infrastructure concerns", "At upper edge of budget"],
  impliedSignals: [{signal:"Multicultural + inclusive emphasis + Times Award", implies:"Genuine diversity focus", impact:"Open system ↑, Values ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"~₹1.5L. At budget edge. Multicultural is genuine differentiator."}
},

"Chrysalis High MARQ": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["Chrysalis Group — same philosophy as CBSE branch", "Ezyschooling — ICSE, 25:1 ratio (NOT 11:1!)"],
  redFlags: [
    "⚠ Ezyschooling shows 25:1 ratio for MARQ — NOT the 11:1 claimed. This is a significant discrepancy.",
    "Newer campus (est. 2018) — limited track record"
  ],
  impliedSignals: [{signal:"Individual Support Program (ISP) — targeted gap bridging", implies:"Personalized remediation. Good for students who need extra support.", impact:"Conceptual ↑, Academic ↑"}],
  scoreAdjustments: {ra: 62}, // Lowered from 95 — 25:1 per Ezyschooling, NOT 11:1
  scoringRationale: {ra:"⚠ CORRECTED: Ezyschooling shows 25:1 for MARQ, not 11:1 like the CBSE branch. Major correction."}
},

"Ryan Global School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ryan International Group", "Ezyschooling — ICSE+Cambridge"],
  redFlags: ["25:1 ratio", "Chain model", "Less distinctive pedagogy"],
  impliedSignals: [{signal:"ICSE + Cambridge dual board", implies:"Board flexibility is a genuine differentiator", impact:"Open system ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1-1.4L. Affordable. Dual board is the selling point."}
},

"PNC Cognitio School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Cambridge CAIE affiliation confirmed", "Ezyschooling listing"],
  redFlags: ["Cambridge board — transfer issues if moving cities within India", "Smaller school", "At edge of budget"],
  impliedSignals: [{signal:"Cambridge board at moderate Indian price", implies:"Genuine international curriculum accessibility", impact:"Conceptual ↑, Open ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"~₹1.5L. At budget edge. Cambridge is the unique offering."}
},

"Pratham International": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling listing", "Local Varthur reputation"],
  redFlags: ["Smaller brand", "Limited infrastructure", "Varthur still developing"],
  impliedSignals: [{signal:"ICSE + holistic + character building emphasis", implies:"Values-oriented approach", impact:"Values ↑, Conceptual ↑ (slight)"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1-1.4L. Affordable ICSE. Varthur location."}
},

"Insight Academy": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Ezyschooling listing", "Local presence since 2007"],
  redFlags: ["Only up to Class 10", "Limited infrastructure", "Small brand"],
  impliedSignals: [{signal:"Small scale + personal education approach + 2007 est.", implies:"Personalized but limited", impact:"Open ↑, Scale ↓"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹70-100K. Budget option on Marathahalli-Whitefield road."}
},

"Brilliant School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["33 years established (1991)", "Local Kundalahalli reputation"],
  redFlags: ["Traditional approach", "Limited modern infrastructure", "Not cutting-edge"],
  impliedSignals: [{signal:"33 years in Kundalahalli — longest track record", implies:"Maximum stability and local trust", impact:"Stability ↑↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹60-100K. 33 years is the strongest credential."}
},

"Carmel Teresa School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Est. 1887 documented", "Local Whitefield heritage"],
  redFlags: ["⚠ Only up to Class 8 — will need school transfer", "Traditional pedagogy", "Limited STEM"],
  impliedSignals: [{signal:"Founded 1887 — 139 years", implies:"Deep institutional roots. Values-based education with generational trust.", impact:"Values ↑↑, Stability ↑↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹60-100K. Oldest school in Whitefield. Only to Class 8 is the big limitation."}
},

"Nava Prajna Public School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Founded by IPS officer documented", "Local presence since 2006"],
  redFlags: ["Very limited infrastructure", "Only up to Class 10", "Cheapest in corridor — limited resources"],
  impliedSignals: [{signal:"Founded by retired IPS officer", implies:"Values-driven founding, not profit-driven", impact:"Values ↑, Discipline ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹50-80K. Absolute cheapest. IPS founder adds values credibility."}
},

"Prajval Vidya Niketan": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Local parent buzz", "Education reviewer mention", "Ezyschooling listing"],
  redFlags: ["Newer school (2014) — limited track record", "Limited infrastructure", "Small brand"],
  impliedSignals: [{signal:"Described as 'talk of parents' by reviewers", implies:"Word-of-mouth reputation growing — often a genuine quality signal", impact:"Conceptual ↑, Open ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1-1.2L. Affordable. Kaggadasapura hidden gem if verified."}
},

"Gopalan National School": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Gopalan Group backing", "Ezyschooling — ICSE, 22yr track record"],
  redFlags: ["Gopalan brand more associated with real estate than education", "Not distinctive on pedagogy"],
  impliedSignals: [{signal:"Gopalan Enterprises — massive group", implies:"Financial stability. But education is not their core business.", impact:"Stability ↑, Education focus ↓"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1.1-1.5L. ICSE with Gopalan backing. 22 years."}
},

"Ravindra Bharathi": {
  confidence: "Low", googleRating: null, googleReviewCount: null,
  sources: ["Local presence", "Ezyschooling listing"],
  redFlags: ["Limited infrastructure", "Small brand", "Basic facilities"],
  impliedSignals: [{signal:"Main road location — easy access", implies:"Commute advantage is real for daily logistics", impact:"Practical value ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹50-80K. Budget option on main road."}
},

"New Horizon Gurukul": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["New Horizon Group — known brand", "Multiple sources confirm exam focus + rote", "ORR location"],
  redFlags: [
    "⚠ 35:1 ratio — worst in corridor",
    "⚠ Rote/pattern-based learning confirmed by multiple sources",
    "⚠ Fundamentally opposite of AI-age education needs"
  ],
  impliedSignals: [{signal:"Website dominated by board toppers and results", implies:"Exam factory mindset — conceptual learning is not the priority", impact:"Conceptual ↓↓, Open ↓↓, Academic ↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1.5-2L. Over budget. 35:1 is disqualifying for personal attention."}
},

"The Brigade School": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["Brigade Group backing", "Dual board CBSE+ICSE", "Mahadevapura campus"],
  redFlags: ["Over ₹1.5L budget", "Brigade known for real estate, not education primarily"],
  impliedSignals: [{signal:"Brigade Group — one of Bangalore's top infrastructure companies", implies:"Well-funded campus, modern facilities guaranteed. But education expertise is secondary.", impact:"Infrastructure ↑↑, Education philosophy uncertain"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹1.6-2L. Over budget. Dual board is strong. Brigade backing = stability."}
},

"Headstart Montessori": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["25+ year track record", "Genuine Montessori K-18", "IGCSE transition", "School website"],
  redFlags: ["NOT CBSE — board portability issues", "Over budget at ₹2L", "Alternative approach may worry extended family", "Smaller peer group"],
  impliedSignals: [
    {signal:"Genuine Montessori through age 18 — not just marketing the term", implies:"One of few truly alternative schools. Mixed-age groups, child-led learning.", impact:"Conceptual ↑↑, Open ↑↑"},
    {signal:"25+ years of Montessori in Bangalore", implies:"Proven model, not experimental", impact:"Stability ↑, Track record ↑"}
  ],
  scoreAdjustments: {}, scoringRationale: {af:"~₹2L. Over budget. Only for families committed to alternative education."}
},

"NPS Whitefield": {
  confidence: "High", googleRating: null, googleReviewCount: null,
  sources: ["NPS Group — Super 4 network", "98.8% top CBSE score verified", "56 SASMO medals", "⚠ Registrations CLOSED for 2026-27"],
  redFlags: ["⚠ REGISTRATIONS CLOSED for 2026-27 — not an option for your timeline", "Over budget at ₹1.7-1.85L", "28:1 ratio", "Rigid pressure-heavy system"],
  impliedSignals: [{signal:"Website dominated by toppers and board scores", implies:"Exam-factory orientation — strong results but pedagogically rigid", impact:"Academic ↑↑, Conceptual ↓, Open ↓"}],
  scoreAdjustments: {},
  scoringRationale: {af:"₹1.7-1.85L. Over budget.", ac:"98.8% highest CBSE score in Bangalore Sahodaya. Genuine academic excellence.", ad:"CLOSED for 2026-27. Zero admission probability."}
},

"Greenwood High": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["#1 International School — Times of India", "ICSE/IGCSE", "Established 2006"],
  redFlags: ["Way over budget at ₹3L", "ICSE not CBSE", "Sarjapur Road — commute consideration"],
  impliedSignals: [{signal:"#1 ranking + outstanding campus", implies:"Genuine quality at premium price", impact:"All parameters ↑ at premium cost"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹3L+. Way over budget. Included for reference only."}
},

"Inventure Academy": {
  confidence: "Medium", googleRating: null, googleReviewCount: null,
  sources: ["#1 Karnataka — Education World", "54 Cambridge world toppers", "Fortune Future 50"],
  redFlags: ["Way over budget at ₹3.1L", "Highly selective", "Not CBSE"],
  impliedSignals: [{signal:"78% students gain admission to top universities globally", implies:"Genuine outcome data — if verified, strongest academic output in corridor", impact:"Academic ↑↑, Alumni ↑↑"}],
  scoreAdjustments: {}, scoringRationale: {af:"₹3.1L. Ultra-premium. For reference only."}
}

};

// Apply enrichment to SCHOOLS array
function applyEnrichment() {
  SCHOOLS.forEach(school => {
    const enrichment = ENRICHMENT[school.n];
    if (enrichment) {
      school.confidence = enrichment.confidence;
      school.googleRating = enrichment.googleRating;
      school.googleReviewCount = enrichment.googleReviewCount;
      school.sources = enrichment.sources;
      school.redFlags = enrichment.redFlags || [];
      school.impliedSignals = enrichment.impliedSignals || [];
      school.scoringRationale = enrichment.scoringRationale || {};
      // Apply score adjustments
      if (enrichment.scoreAdjustments) {
        Object.entries(enrichment.scoreAdjustments).forEach(([key, val]) => {
          school.s[key] = val;
        });
      }
    }
  });
}
