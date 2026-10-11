import creditCleanupCrewCover from "../assets/resources/credit-cleanup-crew.webp.asset.json";
import latePaymentBlueprintCover from "../assets/resources/late-payment-blueprint.webp.asset.json";
import storyOfTilaCover from "../assets/resources/story-of-tila.webp.asset.json";
import unlockingFinancialFreedomCover from "../assets/resources/unlocking-financial-freedom.webp.asset.json";
import businessCreditCover from "../assets/resources/ybc-business-credit.webp.asset.json";
import livingPrivatelyCover from "../assets/resources/living-privately.webp.asset.json";
import creditJungleCover from "../assets/resources/navigating-credit-jungle.webp.asset.json";
import net30Cover from "../assets/resources/net-30.webp.asset.json";
import removingInquiriesCover from "../assets/resources/removing-inquiries.webp.asset.json";
import privacyProtectorsCover from "../assets/resources/privacy-protectors.webp.asset.json";

export const site = {
  name: "Billionaires Clvb",
  legalName: "Billionaires Clvb LLC",
  foundedBy: "Founded by Antonio Cuevas",
  founderSocial: {
    heading: "Connect with Antonio",
    links: [
      { channel: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/acuevas-gotti/" },
      { channel: "youtube", label: "YouTube", url: "https://www.youtube.com/@creditgotti" },
      { channel: "facebook", label: "Facebook Group", url: "https://www.facebook.com/groups/2058569135035056" },
    ],
  },
  title: "Billionaires Clvb | Credit Education, University & Advisory",
  description:
    "Explore credit and business education, Billionaires Clvb University, personalized advisory, and a qualification pathway for business funding.",
  mission: { headline: "Empower people. Expand possibility.", text: "Our mission is to empower, enrich, and educate billions of lives by making meaningful financial knowledge accessible to people and communities. We go beyond surface level credit tips. Our consumer credit education explores consumer rights, credit reporting, lending disclosures, and responsible credit strategy through the Consumer Credit Protection Act and related provisions of Title 15, Chapter 41 of the U.S. Code. Build understanding. Put knowledge into practice. Create a legacy that carries forward.", sourceUrl: "https://www.law.cornell.edu/uscode/text/15/chapter-41" },
  founderBio: ["Antonio Cuevas, founder and CEO, comes from Ysleta Del Sur Pueblo. His calling is to connect people with education, community, and practical resources that strengthen financial understanding and support generational legacy.", "Through Billionaires Clvb, he brings consumer credit education, business foundations, personalized credit advisory, and funding readiness into one connected ecosystem.", "The mission begins with access: an affordable University membership, deeper guidance for those ready for individualized support, and a qualification pathway for businesses seeking capital."],
  heroLead: "Consumer credit and business foundations, recorded courses, and practical resources, all inside Billionaires Clvb University.",
  heroSupporting: "Learn with hundreds of hours of step by step education, recordings, templates, ebooks, and a monthly community meetup and live call.",
  cta: "Start My Blueprint",
  entrance: { heading: "ANCESTRAL MEMORY. FUTURE LEGACY.", status: "Opening the Knowledge Vault" },
  portalUrl: "https://billionairesclvb.app.clientclub.net/courses/products/6fefe905-f9fc-41fb-ab0a-ee36d361cfe5",
  investUrl: "https://lienphatcapital.com",
  overviewVideo: {
    src: "",
    poster: "",
  },
  learningPaths: [
    { title: "Consumer Law Foundation", overview: "Explore consumer reports, rights concepts, and organized preparation for informed conversations.", lesson: "Reading a consumer report with context", resources: ["Report review checklist", "Consumer terminology guide"] },
    { title: "Credit Foundation", overview: "Understand credit reports, common factors, responsible habits, and ways to organize questions.", lesson: "Credit report structure and responsible habits", resources: ["Credit foundations ebook preview", "Report organizer"] },
    { title: "Business Credit Foundation", overview: "Learn foundational business credit vocabulary, records, and readiness concepts.", lesson: "Organizing the business credit foundation", resources: ["Business records checklist", "Readiness worksheet"] },
    { title: "Business Formation", overview: "Review structure, documentation, and responsible organization before consulting qualified professionals.", lesson: "Formation choices and operational records", resources: ["Formation checklist", "Organization worksheet"] },
    { title: "Credit Funding Readiness", overview: "Prepare documentation and questions for responsible funding conversations without promises of approval.", lesson: "Building a funding readiness file", resources: ["Readiness checklist", "Conversation planner"] },
    { title: "Set Up a Trust", overview: "Prepare goals, terminology, and questions for a qualified legal or tax professional. No documents are generated here.", lesson: "Clarifying trust planning objectives", resources: ["Planning questions worksheet", "Ownership map preview"] },
    { title: "508C1A", overview: "An educational introduction to Section 508(c)(1)(A), religious organization concepts, and questions for qualified professionals.", lesson: "Understanding the terminology and professional questions", resources: ["Terminology guide", "Professional consultation checklist"] },
    { title: "Ready to Start Investing", overview: "Explore evaluation, risk, due diligence, and questions to consider before making an investment decision.", lesson: "Separating assumptions, evidence, and risk", resources: ["Evaluation worksheet", "Risk questions guide"] },
    { title: "Tax Strategies", overview: "Build familiarity with tax terminology, recordkeeping, and questions to take to a qualified tax professional.", lesson: "Preparing organized records for tax conversations", resources: ["Recordkeeping checklist", "Tax questions guide"] },
  ],
  resourceLibrary: [
    // Free signup library. Originals stay in authenticated GHL hosting; delivery URLs come only from the resource download resolver (see RESOURCE-ACCESS.md).
    { id: "credit-cleanup-crew", originalFilename: "THE CREDIT CLEANUPCREW.pdf", title: "The Credit Cleanup Crew", category: "Ebooks", topicTags: ["Credit Foundations", "Story based learning"], pageCount: 15, description: "A story based introduction to foundational credit education.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: creditCleanupCrewCover.url, availability: "signup-delivery-pending" as const },
    { id: "late-payment-blueprint", originalFilename: "THE LATE PAYMENT BLUEPRINT A CHILDRENS GUIDE TO FIXING YOUR CREDIT.pdf", title: "The Late Payment Blueprint", category: "Ebooks", topicTags: ["Credit Foundations", "Late payments"], pageCount: 19, description: "An illustrated introductory guide to late payment education and responsible credit habits.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: latePaymentBlueprintCover.url, availability: "signup-delivery-pending" as const },
    { id: "story-of-tila", originalFilename: "The Story of TILA.pdf", title: "The Story of TILA", category: "Guides", topicTags: ["Consumer Law", "TILA"], pageCount: 6, description: "An educational introduction to Truth in Lending concepts.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: storyOfTilaCover.url, availability: "signup-delivery-pending" as const },
    { id: "unlocking-financial-freedom", originalFilename: "Unlocking Financial Freedom The YBC Guide to Mastering Credit and Consumer Law.pdf", title: "Unlocking Financial Freedom", category: "Ebooks", topicTags: ["Consumer Law", "Credit education"], pageCount: 24, description: "An educational overview of credit and consumer law concepts.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: unlockingFinancialFreedomCover.url, availability: "signup-delivery-pending" as const },
    { id: "ybc-business-credit", originalFilename: "YBC BUSINESS CREDIT.pdf", title: "YBC Business Credit", category: "Ebooks", topicTags: ["Business Credit", "Foundations"], pageCount: 23, description: "Introductory education about business credit concepts and organization.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: businessCreditCover.url, availability: "signup-delivery-pending" as const },
    { id: "living-privately", originalFilename: "Living Privately Through Consumer Law The YBC Blueprint (1).pdf", title: "Living Privately Through Consumer Law", category: "Ebooks", topicTags: ["Privacy & Consumer Law", "Consumer education"], pageCount: 17, description: "Privacy themed consumer law education presented for general learning.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: livingPrivatelyCover.url, availability: "signup-delivery-pending" as const },
    { id: "navigating-credit-jungle", originalFilename: "NAVIGATING THE CREDIT JUNGLE.pdf", title: "Navigating the Credit Jungle", category: "Ebooks", topicTags: ["Credit Foundations", "Credit reports"], pageCount: 20, description: "A story based introduction to understanding credit report concepts.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: creditJungleCover.url, availability: "signup-delivery-pending" as const },
    { id: "net-30", originalFilename: "NET 30.pdf", title: "Net 30", category: "Guides", topicTags: ["Business Credit", "Payment terms"], pageCount: 6, description: "An educational introduction to Net 30 payment terms and business credit concepts.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: net30Cover.url, availability: "signup-delivery-pending" as const },
    { id: "removing-inquiries", originalFilename: "Removing Inquries (2).pdf", title: "Removing Inquiries", category: "Guides", topicTags: ["Consumer Credit", "Inquiries"], pageCount: 21, description: "An educational guide to credit inquiries and related consumer credit concepts.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: removingInquiriesCover.url, availability: "signup-delivery-pending" as const },
    { id: "privacy-protectors", originalFilename: "The adventure of privacy protectors.pdf", title: "The Adventures of Privacy Protectors", category: "Ebooks", topicTags: ["Privacy & Consumer Law", "Debt collection"], pageCount: 25, description: "A privacy and debt collection themed guide for general consumer law education.", visibility: "signup" as const, accessUrl: "", fileType: "PDF", thumbnail: privacyProtectorsCover.url, availability: "signup-delivery-pending" as const },
    { id: "university-overview", originalFilename: "", title: "University Overview", category: "Recordings", topicTags: ["University"], pageCount: 0, description: "A forthcoming introduction to Billionaires Clvb University and its educational pathways.", visibility: "public" as const, accessUrl: "", fileType: "Video", thumbnail: "", availability: "coming-soon" as const },
  ],
  entranceEagle: {
    src: "",
    type: "image" as "image" | "video",
  },
  integrations: {
    formEndpoint: "",
    qualificationQuestionnaireUrl: "",
    automationEndpoint: "",
    checkoutUrl: "",
  },
  university: { firstMonth: "$97", renewal: "$149/month thereafter" },
  campuses: [
    {
      name: "Business Formation",
      scope: "Business foundations",
      summary: "Foundational structure, documentation, and responsible business organization.",
      lessons: ["Formation concepts", "Organizing business records", "Operational foundations"],
      materials: ["Formation checklist", "Organization worksheet", "Ebook preview"],
      sample:
        "An introduction to the decisions and records commonly considered when forming and organizing a business.",
      note: "Educational only. Entity and legal decisions should be reviewed with qualified professionals.",
    },
    {
      name: "Trust Education",
      scope: "Trust / Asset Protection / Building Legacy",
      summary: "Trust concepts, asset ownership vocabulary, stewardship, and legacy planning.",
      lessons: ["Trust terminology", "Asset ownership concepts", "Legacy planning questions"],
      materials: ["Legacy planning worksheet", "Ownership map preview", "Recorded lesson preview"],
      sample:
        "A vocabulary first overview for preparing informed questions about ownership and legacy.",
      note: "No trust is created here. This preview is not legal or tax advice.",
    },
    {
      name: "Business Funding",
      scope: "Funding preparation",
      summary: "Documentation, readiness, and preparation for responsible funding conversations.",
      lessons: ["Funding vocabulary", "Readiness fundamentals", "Preparing documentation"],
      materials: ["Readiness checklist", "Document organizer", "Questions worksheet"],
      sample:
        "A preparation lesson focused on records and questions that may support a funding discussion.",
      note: "No approval, amount, relationship, rate, or outcome is promised.",
    },
    {
      name: "Credit Repair",
      scope: "Consumer Law University",
      summary: "Report comprehension, identifying possible inaccuracies, and responsible habits.",
      lessons: ["Reading credit reports", "Recognizing possible inaccuracies", "Responsible credit habits"],
      materials: ["Report review checklist", "Document organization template", "Affidavit template preview"],
      sample:
        "A guided overview of report sections and ways to organize questions about information that may be inaccurate.",
      note: "Educational only. No legal advice, guaranteed removals, or debt elimination.",
    },
    {
      name: "Trust Set Up",
      scope: "Trust / Asset Protection / Building Legacy",
      summary: "An educational overview of trust preparation and questions for qualified professionals.",
      lessons: ["Preparing your objectives", "Roles and terminology", "Professional consultation questions"],
      materials: ["Preparation checklist", "Questions worksheet", "Record organizer"],
      sample:
        "A preparation focused lesson for clarifying goals before speaking with a qualified professional.",
      note: "No legal documents or trusts are created, and no specific trust form is endorsed.",
    },
    {
      name: "Crypto Currency",
      scope: "Digital Assets University",
      summary: "Digital asset concepts, wallets, custody, security, and risk awareness.",
      lessons: ["Digital asset vocabulary", "Wallets and custody", "Security and risk awareness"],
      materials: ["Educational glossary", "Risk checklist", "Security worksheet"],
      sample:
        "A terminology first lesson covering custody choices and common digital security considerations.",
      note: "No live prices, yields, investment recommendations, or guarantees.",
    },
    {
      name: "Financial Literacy",
      scope: "Financial foundations",
      summary: "Core money vocabulary, planning habits, and informed decision making concepts.",
      lessons: ["Financial vocabulary", "Cash flow awareness", "Planning fundamentals"],
      materials: ["Budget worksheet", "Financial glossary", "Ebook preview"],
      sample:
        "A foundation for reading common financial terms and building organized personal decision habits.",
      note: "General education only; not individualized financial advice.",
    },
    {
      name: "Fitness",
      scope: "Wellness foundations",
      summary: "General wellness habits that support energy, consistency, and sustainable routines.",
      lessons: ["Building consistent habits", "Movement fundamentals", "Rest and recovery awareness"],
      materials: ["Habit tracker preview", "Wellness reflection worksheet", "Recorded lesson preview"],
      sample: "A general overview of creating a realistic wellness routine around consistent daily habits.",
      note: "General wellness education only; not medical, nutrition, or fitness advice.",
    },
    {
      name: "Investment Opportunity",
      scope: "Evaluation and risk education",
      summary: "Educational frameworks for evaluating opportunities, assumptions, and risk.",
      lessons: ["Opportunity evaluation", "Understanding risk", "Due diligence questions"],
      materials: ["Evaluation worksheet", "Risk checklist", "Questions guide"],
      sample: "An educational framework for comparing claims, assumptions, risks, and unanswered questions.",
      note: "No securities offers, live deals, returns, recommendations, or guarantees.",
    },
    {
      name: "Consumer Credit",
      scope: "Consumer Law University",
      summary: "Consumer reports, rights concepts, document organization, and responsible credit management.",
      lessons: ["Consumer report structure", "Consumer rights concepts", "Document organization"],
      materials: ["Educational checklist", "Affidavit template preview", "Ebook preview"],
      sample: "A guided overview of how consumer reports are organized and how to prepare questions for qualified professionals.",
      note: "Educational only. No legal advice, guaranteed removals, or debt elimination.",
    },
    {
      name: "Personal & Business Funding",
      scope: "Funding readiness",
      summary: "Personal and business documentation, readiness concepts, and responsible preparation.",
      lessons: ["Personal readiness concepts", "Business readiness concepts", "Comparing documentation needs"],
      materials: ["Readiness worksheet", "Records checklist", "Conversation planner"],
      sample: "A comparison of personal and business preparation topics before a funding conversation.",
      note: "No approval, amount, relationship, rate, or outcome is promised.",
    },
    {
      name: "Real Estate Investing",
      scope: "Real Estate University",
      summary: "Ownership fundamentals, basic deal evaluation, cash flow concepts, and due diligence.",
      lessons: ["Ownership foundations", "Basic deal evaluation", "Cash flow concepts"],
      materials: ["Deal worksheet preview", "Due diligence checklist", "Recorded lesson preview"],
      sample: "An educational walkthrough of categories commonly reviewed before discussing a property opportunity.",
      note: "No live opportunity, investment recommendation, projected return, or guarantee.",
    },
    {
      name: "Tax & Wealth Strategies",
      scope: "Intro to Taxes University",
      summary: "Tax terminology, recordkeeping, preparation, and questions for qualified professionals.",
      lessons: ["Tax terminology", "Recordkeeping foundations", "Preparing professional questions"],
      materials: ["Recordkeeping checklist", "Educational worksheet", "Tax questions guide"],
      sample: "A foundational lesson on organized records and preparing informed questions for a tax professional.",
      note: "Educational only; no individualized tax, legal, or financial advice.",
    },
    {
      name: "AI & Automation",
      scope: "AI University",
      summary: "AI fundamentals, clearer prompts, responsible use, and workflow automation concepts.",
      lessons: ["AI foundations", "Writing clearer prompts", "Responsible workflow automation"],
      materials: ["Prompt library preview", "Workflow template", "Responsible use checklist"],
      sample: "A practical introduction to framing useful prompts and reviewing AI assisted work responsibly.",
      note: "Educational only. Automated tools do not replace professional judgment.",
    },
    {
      name: "Business Credit",
      scope: "Business credit education",
      summary: "Business credit fundamentals, documentation, organization, and readiness concepts.",
      lessons: ["Business credit foundations", "Organizing business records", "Readiness concepts"],
      materials: ["Readiness checklist", "Organization template", "Recorded lesson preview"],
      sample: "A preparation lesson focused on organizing records and understanding business credit fundamentals.",
      note: "No approval, funding amount, rate, or credit outcome is promised.",
    },
  ],
  interests: ["University", "Credit Advisory", "Business Funding"] as const,
  curriculum: [
    {
      title: "Consumer Credit",
      text: "Understand reports, credit factors, and responsible credit management.",
      detail:
        "Explore how reports are organized, what influences a credit profile, and ways to approach responsible credit management.",
    },
    {
      title: "Business Formation",
      text: "Learn foundational business setup and organizational concepts.",
      detail:
        "Work through the concepts behind choosing a structure, organizing records, and building an operational foundation.",
    },
    {
      title: "Business Credit & Funding",
      text: "Understand business credit and the preparation involved in seeking capital.",
      detail:
        "Learn the language of business credit and the documentation and planning often involved in funding readiness.",
    },
    {
      title: "Real Estate & Ownership",
      text: "Explore investing fundamentals, cash flow, and ownership responsibilities.",
      detail:
        "Study foundational ownership considerations and the responsibilities that accompany property decisions.",
    },
    {
      title: "Tax, Trust & Legacy Education",
      text: "Learn concepts to discuss with qualified professionals.",
      detail:
        "Build familiarity with terms and questions to bring to your own licensed legal, tax, and financial professionals.",
    },
    {
      title: "AI & Automation",
      text: "Explore tools and systems that support business operations.",
      detail:
        "Consider practical workflows and responsible ways to use tools as your business grows.",
    },
  ],
  resources: {
    Training: {
      eyebrow: "ON DEMAND LEARNING",
      title: "Training, on your timeline.",
      text: "Step-by-step educational content and recorded live training to revisit as you build.",
      items: ["Consumer credit foundations", "Business setup concepts", "Recorded live sessions"],
    },
    Templates: {
      eyebrow: "WORKING LIBRARY",
      title: "A place to start, not a shortcut.",
      text: "Practical templates, including the Affidavit Template Library. Review every document for your circumstances before use.",
      items: ["Business planning templates", "Affidavit templates", "Organization worksheets"],
    },
    Ebooks: {
      eyebrow: "REFERENCE SHELF",
      title: "Keep the fundamentals close.",
      text: "Educational ebooks and reference materials for your next stage of learning.",
      items: ["Credit fundamentals", "Business foundations", "Ownership concepts"],
    },
  },
  faqs: [
    {
      q: "Who is Billionaires Clvb for?",
      a: "Consumers learning about credit, new entrepreneurs, and business owners seeking education and guidance. Our primary business audience generates $1 million or less in annual revenue.",
    },
    {
      q: "What does University membership cost?",
      a: "Your first month is $97. Membership renews at $149 per month thereafter, subject to the finalized membership terms.",
    },
    {
      q: "What is included?",
      a: "Hundreds of hours of step by step educational content, recordings, a monthly meetup and live call, templates, ebooks, and affidavit templates.",
    },
    {
      q: "Do I need to join the University to request advisory?",
      a: "No. Advisory is available to members and to people who are not members.",
    },
    {
      q: "How do I discuss business funding?",
      a: "Submit your interest and complete our qualification questionnaire. Eligibility must be evaluated before potential options can be discussed.",
    },
    {
      q: "Are results guaranteed?",
      a: "No. Educational participation does not guarantee a credit outcome, financing approval, income, or investment return.",
    },
  ],
};
export type Interest = (typeof site.interests)[number];
