// Simple i18n utility for English (en) and Telugu (te)
// Usage:
// - Add data-i18n="key" to any element whose innerText should be translated.
// - For placeholders, add data-i18n-placeholder="key".
// - For titles, add data-i18n-title="key".
// - Call i18n.apply() after DOM loads; include this script before page-specific scripts.

(function () {
  const STORAGE_KEY = "avakash_language";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      site_name: "Avakash",
      nav_review: "Review",
      nav_about: "About",
      nav_contact: "Contact Us",
      nav_dashboard: "Dashboard",
      home_welcome: "Welcome to Avakash",
      home_tagline:
        "Unlock your future with Avakash — where opportunities meet talent",
      btn_login: "Login",
      btn_signup: "Signup",
      login_heading: "Login to Avakash",
      label_email: "Email Address",
      ph_email: "example@mail.com",
      label_password: "Password",
      ph_password: "Enter your password",
      label_role: "Select Role",
      role_user: "User",
      role_employer: "Employer",
      btn_login_submit: "Login",
      btn_google: "Continue with Google",
      no_account: "Don't have an account?",
      link_signup: "Signup",
      lang_toggle: "TE / EN",
      about_title: "About Avakash",
      about_tagline: "Connecting Rural Talent with Opportunities",
      about_intro_h2: "Introduction",
      about_intro_p1:
        "At Avakash, we believe that meaningful work should not depend on where you live.",
      about_intro_p2:
        "To solve this, Avakash was created as a dedicated rural job searching platform.",
      about_intro_body1:
        "At <strong>Avakash</strong>, we believe that meaningful work should not depend on where you live. Rural communities often face limited access to skill development, centralized job information, and career support. This leads to underemployment and loss of local talent.",
      about_intro_body2:
        "To solve this, Avakash was created as a <strong>dedicated rural job searching platform</strong>. It connects job seekers with opportunities in agriculture, education, small businesses, and various local industries. We make the process simple, transparent, and accessible for all.",
      about_mission_h2: "Our Mission",
      about_mission_body:
        "Our mission is to <strong>empower rural communities</strong> by making job opportunities more accessible, inclusive, and reliable. We aim to strengthen local economies by helping people find work close to home and reducing the need for migration to cities.",
      about_objectives_h2: "Objectives",
      about_motivation_h2: "Motivation",
      about_motivation_body1:
        "Rural communities often lack centralized access to job resources, career counseling, or market insights. Many talented individuals remain unnoticed simply because they don’t have access to proper platforms.",
      about_motivation_body2:
        "Avakash aims to change this by combining <strong>localized job data</strong> with <strong>technology</strong>. We want to give rural job seekers clarity, confidence, and real opportunities right at their doorstep.",
      about_technology_h2: "Technology",
      about_technology_body:
        "The Avakash website is designed with accessibility and scalability in mind:",
      about_scope_h2: "Scope",
      about_scope_body:
        "While Avakash currently focuses on rural job seekers, our vision is to expand further.",
      about_benefits_h2: "Benefits",
      about_benefits_seekers_h3: "For Job Seekers",
      about_benefits_employers_h3: "For Employers",
			about_obj_li1: "Connect rural job seekers with opportunities that match their skills.",
			about_obj_li2: "Support small and medium rural enterprises in hiring skilled workers.",
			about_obj_li3: "Provide a user-friendly, simple interface for all age groups.",
			about_obj_li4: "Build confidence among rural youth and women by giving them access to jobs.",
			about_obj_li5: "Introduce advanced features like voice search, AI suggestions, and offline mode.",
			about_seekers_li1: "Find jobs close to home.",
			about_seekers_li2: "Voice-based search for easier access.",
			about_seekers_li3: "Low-data and offline access in poor connectivity areas.",
			about_seekers_li4: "Opportunities for part-time, seasonal, and self-employment.",
			about_employers_li1: "Access a pool of skilled local workers.",
			about_employers_li2: "Reduce hiring costs with direct job posting.",
			about_employers_li3: "Grow rural enterprises with the right workforce.",
      about_vision_h2: "Our Vision",
      about_inspiration_h2: "Our Inspiration",
      footer_copy: "© 2025 Avakash | Bridging Rural Talent with Opportunities",
      employer_heading: "Employer Profile - Avakash",
      employer_name_label: "Name",
      employer_name_ph: "Shop/Business Owner Name",
      employer_address_label: "Address",
      employer_address_ph: "Full address of the shop or office",
      employer_village_label: "Village",
      employer_village_ph: "Enter village name",
      employer_skills_label: "Required Skills",
      employer_skills_select: "Select a Skill",
			employer_skill_teaching: "Teaching",
			employer_skill_cooking: "Cooking",
			employer_skill_tailoring: "Tailoring",
			employer_skill_retail: "Retail Sales",
			employer_skill_plumbing: "Plumbing",
			employer_skill_electrician: "Electrician",
			employer_skill_driving: "Driving",
			employer_skill_customer_service: "Customer Service",
      employer_age_label: "Age Limit",
      employer_age_select: "Select Age Limit",
			employer_age_18_25: "18–25",
			employer_age_18_30: "18–30",
			employer_age_18_35: "18–35",
			employer_age_21_40: "21–40",
			employer_age_no_limit: "No Age Limit",
      employer_working_label: "Working Hours",
      employer_working_ph: "e.g., 9am - 6pm",
      employer_salary_label: "Salary Offered",
      employer_salary_ph: "e.g., ₹12,000 per month",
      employer_description_label: "Job Description",
      employer_description_ph: "Brief description of the job role",
      employer_contact_label: "Contact Number",
      employer_contact_ph: "e.g., 9876543210",
      employer_upload_label: "Upload Shop Photo",
      employer_save_btn: "Save Employer Profile",
      user_heading: "User Profile - Avakash",
      user_name_label: "Name",
      user_name_ph: "Enter your full name",
      user_email_label: "Email",
      user_email_ph: "Enter your Email",
      user_age_label: "Age",
      user_age_ph: "Enter your age",
      user_gender_label: "Gender",
      user_gender_select: "Select Gender",
      user_gender_male: "Male",
      user_gender_female: "Female",
      user_gender_other: "Other",
      user_gender_na: "Prefer not to say",
      user_village_label: "Village Name",
      user_education_label: "Education",
      user_education_ph: "e.g., 10th pass, 12th Pass, Diploma",
      user_skills_label: "Skills",
      user_skills_ph: "e.g., Teaching, Cooking..",
      user_contact_label: "Contact Number",
      user_contact_ph: "e.g., 9876543210",
      user_timings_label: "Preferred Work Timings",
      user_timings_ph: "e.g., 9:00-6:00",
      user_apply_btn: "Apply Job",
      about_tech_li_html: "<strong>HTML</strong> – For creating job profiles and structure.",
      about_tech_li_css: "<strong>CSS</strong> – For designing a clean and attractive layout.",
      about_tech_li_js: "<strong>JavaScript</strong> – For interactive and dynamic features.",
      about_tech_li_wp: "<strong>WordPress</strong> – For easy content management and updates.",
      about_scope_li1: "Extend services to semi-urban and urban regions.",
      about_scope_li2: "Promote self-employment, seasonal work, and part-time jobs.",
      about_scope_li3: "Support work-from-home opportunities for youth and women.",
      about_scope_li4: "Provide low-data or offline modes for areas with poor internet connectivity.",
      about_scope_li5: "Enable AI-driven career guidance and personalized job matching.",
      about_vision_body: "We dream of a future where every rural youth has access to career opportunities, migration to cities is reduced, and local businesses grow with skilled workers. Avakash connects communities with opportunities and builds stronger, sustainable economies.",
      about_inspiration_body: "We are inspired by rural communities – their strength, skills, and determination. Below is a representation of our mission to connect rural talent with jobs.",
    },
    te: {
      site_name: "అవకాశ్",
      nav_review: "సమీక్ష",
      nav_about: "గురించి",
      nav_contact: "మమ్మల్ని సంప్రదించండి",
      nav_dashboard: "డాష్‌బోర్డ్",
      home_welcome: "అవకాశ్‌కు స్వాగతం",
      home_tagline:
        "అవకాశ్‌తో మీ భవిష్యత్తు తెరిచి — అవకాశాలు ప్రతిభను కలుస్తాయి",
      btn_login: "లాగిన్",
      btn_signup: "సైన్ అప్",
      login_heading: "అవకాశ్‌లో లాగిన్ చేయండి",
      label_email: "ఈమెయిల్ చిరునామా",
      ph_email: "example@mail.com",
      label_password: "పాస్వర్డ్",
      ph_password: "మీ పాస్వర్డ్ నమోదు చేయండి",
      label_role: "భూమికను ఎంచుకోండి",
      role_user: "వినియోగదారు",
      role_employer: "నియోజకుడు",
      btn_login_submit: "లాగిన్",
      btn_google: "గూగుల్‌తో కొనసాగండి",
      no_account: "ఖాతా లేదా?",
      link_signup: "సైన్ అప్",
      lang_toggle: "TE / EN",
      about_title: "అవకాశ్ గురించి",
      about_tagline: "గ్రామీణ ప్రతిభను అవకాశాలతో కలుపుతున్నాము",
      about_intro_h2: "పరిచయం",
      about_intro_p1:
        "అవకాశ్‌లో, మీరు ఎక్కడ ఉంటారో దానిపై అర్థవంతమైన పని ఆధారపడకూడదని మేము విశ్వసిస్తున్నాము.",
      about_intro_p2:
        "దీనికి పరిష్కారంగా, అవకాశ్‌ను ఒక ప్రత్యేక గ్రామీణ ఉద్యోగ శోధన వేదికగా సృష్టించబడింది.",
      about_intro_body1:
        "<strong>అవకాశ్</strong>లో, మీరు ఎక్కడ ఉంటారో దానిపై అర్థవంతమైన పని ఆధారపడకూడదని మేము విశ్వసిస్తున్నాము. గ్రామీణ సముదాయాలు తరచుగా నైపుణ్యాభివృద్ధి, కేంద్రీకృత ఉద్యోగ సమాచారం మరియు కెరీర్ మద్దతుకు పరిమిత ప్రాప్తిని ఎదుర్కొంటాయి. దీని వల్ల ఉపాధి లోపం మరియు స్థానిక ప్రతిభ నష్టం జరుగుతుంది.",
      about_intro_body2:
        "దీనికి పరిష్కారంగా, <strong>అవకాశ్</strong>ను ఒక ప్రత్యేక గ్రామీణ ఉద్యోగ శోధన వేదికగా సృష్టించాము. ఇది వ్యవసాయం, విద్య, చిన్న వ్యాపారాలు మరియు వివిధ స్థానిక పరిశ్రమలలో అవకాశాలతో ఉద్యోగార్థులను కలుపుతుంది. మేము ప్రక్రియను సులభం, పారదర్శకం మరియు అందరికీ అందుబాటులో ఉండేలా చేస్తాము.",
      about_mission_h2: "మా లక్ష్యం",
      about_mission_body:
        "ఉద్యోగ అవకాశాలను మరింత అందుబాటులో, సమగ్రంగా మరియు విశ్వసనీయంగా చేయడం ద్వారా <strong>గ్రామీణ సముదాయాలను శక్తివంతం చేయడం</strong> మా లక్ష్యం. ఇంటి దగ్గరే పని దొరకేలా చేసి, నగరాలకు వలస అవసరం తగ్గించేలా స్థానిక ఆర్థిక వ్యవస్థలను బలోపేతం చేయాలనేది మా ఉద్దేశ్యం.",
      about_objectives_h2: "లక్ష్యాలు",
      about_motivation_h2: "ప్రేరణ",
      about_motivation_body1:
        "గ్రామీణ సముదాయాలకు ఉద్యోగ వనరులు, కెరీర్ సలహాలు లేదా మార్కెట్ అవగాహనకు కేంద్రీకృత ప్రాప్తి తరచుగా ఉండదు. సరైన వేదికలు లేకపోవడం వల్ల అనేక ప్రతిభావంతులైన వ్యక్తులు గుర్తించబడకుండా ఉంటున్నారు.",
      about_motivation_body2:
        "<strong>స్థానికీకరించిన ఉద్యోగ డేటా</strong>ను <strong>సాంకేతికత</strong>తో కలిపి, గ్రామీణ ఉద్యోగార్థులకు స్పష్టత, నమ్మకం మరియు నిజమైన అవకాశాలు వారి ముంగిటనే అందించాలని అవకాశ్ లక్ష్యంగా పెట్టుకుంది.",
      about_technology_h2: "సాంకేతికత",
      about_technology_body:
        "అందుబాటు మరియు మోతాదును దృష్టిలో పెట్టుకుని అవకాశ్ వెబ్‌సైట్ రూపొందించబడింది:",
      about_scope_h2: "వ్యాప్తి",
      about_scope_body:
        "ప్రస్తుతం అవకాశ్ గ్రామీణ ఉద్యోగార్థులపై దృష్టి సారించినప్పటికీ, భవిష్యత్తులో మరింత విస్తరించాలన్నది మా ఆశయం.",
      about_benefits_h2: "ప్రయోజనాలు",
      about_benefits_seekers_h3: "ఉద్యోగార్థులకు",
      about_benefits_employers_h3: "నియోజకులకు",
			about_obj_li1: "గ్రామీణ ఉద్యోగార్థులను వారి నైపుణ్యాలకు సరిపడే అవకాశాలతో కలపడం.",
			about_obj_li2: "చిన్న మరియు మధ్య తరహా గ్రామీణ సంస్థలకు నైపుణ్యం కలిగిన కార్మికులను నియమించడంలో సహాయం చేయడం.",
			about_obj_li3: "అన్ని వయసు వర్గాల కోసం సులభమైన, వినియోగదారుకు అనుకూలమైన ఇంటర్‌ఫేస్ అందించడం.",
			about_obj_li4: "ఉద్యోగ ప్రాప్తి ద్వారా గ్రామీణ యువత మరియు మహిళల్లో ఆత్మవిశ్వాసాన్ని పెంపొందించడం.",
			about_obj_li5: "వాయిస్ సెర్చ్, AI సూచనలు మరియు ఆఫ్లైన్ మోడ్ వంటి ఆధునిక ఫీచర్లను ప్రవేశపెట్టడం.",
			about_seekers_li1: "ఇంటి దగ్గరే ఉద్యోగాలు పొందడం.",
			about_seekers_li2: "సులభమైన ప్రాప్యత కోసం వాయిస్ ఆధారిత శోధన.",
			about_seekers_li3: "చెడు కనెక్టివిటీ ప్రాంతాల్లో తక్కువ డేటాతో/ఆఫ్లైన్ ప్రాప్తి.",
			about_seekers_li4: "పార్ట్‌టైమ్, సీజనల్ మరియు స్వయం ఉపాధి అవకాశాలు.",
			about_employers_li1: "నైపుణ్యం కలిగిన స్థానిక కార్మికుల బృందానికి ప్రాప్యత.",
			about_employers_li2: "ప్రత్యక్ష ఉద్యోగ ప్రకటనలతో నియామక ఖర్చులను తగ్గించడం.",
			about_employers_li3: "సరైన వర్క్‌ఫోర్స్‌తో గ్రామీణ సంస్థలను అభివృద్ధి చేయడం.",
      about_vision_h2: "మా దృష్టి",
      about_inspiration_h2: "మా ప్రేరణ",
      footer_copy: "© 2025 అవకాశ్ | గ్రామీణ ప్రతిభను అవకాశాలతో కలుపుతున్నాము",
      employer_heading: "నియోజకుడి ప్రొఫైల్ - అవకాశ్",
      employer_name_label: "పేరు",
      employer_name_ph: "దుకాణం/వ్యాపార యజమాని పేరు",
      employer_address_label: "చిరునామా",
      employer_address_ph: "దుకాణం లేదా కార్యాలయానికి పూర్తి చిరునామా",
      employer_village_label: "గ్రామం",
      employer_village_ph: "గ్రామం పేరు నమోదు చేయండి",
      employer_skills_label: "అవసరమైన నైపుణ్యాలు",
      employer_skills_select: "ఒక నైపుణ్యాన్ని ఎంచుకోండి",
			employer_skill_teaching: "బోధన",
			employer_skill_cooking: "వంట",
			employer_skill_tailoring: "టైలరింగ్",
			employer_skill_retail: "రిటైల్ సేల్స్",
			employer_skill_plumbing: "ప్లంబింగ్",
			employer_skill_electrician: "ఎలక్ట్రీషియన్",
			employer_skill_driving: "డ్రైవింగ్",
			employer_skill_customer_service: "కస్టమర్ సర్వీస్",
      employer_age_label: "వయో పరిమితి",
      employer_age_select: "వయో పరిమితిని ఎంచుకోండి",
			employer_age_18_25: "18–25",
			employer_age_18_30: "18–30",
			employer_age_18_35: "18–35",
			employer_age_21_40: "21–40",
			employer_age_no_limit: "వయో పరిమితి లేదు",
      employer_working_label: "పని గంటలు",
      employer_working_ph: "ఉదా., ఉదయం 9 - సాయంత్రం 6",
      employer_salary_label: "జీతం",
      employer_salary_ph: "ఉదా., ₹12,000 నెలకు",
      employer_description_label: "ఉద్యోగ వివరణ",
      employer_description_ph: "పాత్ర యొక్క సంక్షిప్త వివరణ",
      employer_contact_label: "సంప్రదింపు సంఖ్య",
      employer_contact_ph: "ఉదా., 9876543210",
      employer_upload_label: "దుకాణం ఫోటోను అప్‌లోడ్ చేయండి",
      employer_save_btn: "నియోజకుడి ప్రొఫైల్‌ను సేవ్ చేయండి",
      user_heading: "వినియోగదారు ప్రొఫైల్ - అవకాశ్",
      user_name_label: "పేరు",
      user_name_ph: "మీ పూర్తి పేరు నమోదు చేయండి",
      user_email_label: "ఈమెయిల్",
      user_email_ph: "మీ ఈమెయిల్ నమోదు చేయండి",
      user_age_label: "వయసు",
      user_age_ph: "మీ వయసు నమోదు చేయండి",
      user_gender_label: "లింగం",
      user_gender_select: "లింగాన్ని ఎంచుకోండి",
      user_gender_male: "పురుషుడు",
      user_gender_female: "స్త్రీ",
      user_gender_other: "ఇతర",
      user_gender_na: "చెప్పడానికి ఇష్టంలేదు",
      user_village_label: "గ్రామం పేరు",
      user_education_label: "విద్య",
      user_education_ph: "ఉదా., 10వ పాస్, 12వ పాస్, డిప్లొమా",
      user_skills_label: "నైపుణ్యాలు",
      user_skills_ph: "ఉదా., బోధన, వంట..",
      user_contact_label: "సంప్రదింపు సంఖ్య",
      user_contact_ph: "ఉదా., 9876543210",
      user_timings_label: "ఇష్టమైన పని సమయాలు",
      user_timings_ph: "ఉదా., 9:00-6:00",
      user_apply_btn: "ఉద్యోగానికి దరఖాస్తు చేయండి",
      about_tech_li_html: "<strong>HTML</strong> – ఉద్యోగ ప్రొఫైళ్లు మరియు నిర్మాణాన్ని సృష్టించడానికి.",
      about_tech_li_css: "<strong>CSS</strong> – శుభ్రమైన మరియు ఆకర్షణీయమైన రూపకల్పన కోసం.",
      about_tech_li_js: "<strong>JavaScript</strong> – ఇంటరాక్టివ్ మరియు డైనమిక్ ఫీచర్ల కోసం.",
      about_tech_li_wp: "<strong>WordPress</strong> – సులభమైన కంటెంట్ నిర్వహణ మరియు నవీకరణల కోసం.",
      about_scope_li1: "సెమీ-అర్బన్ మరియు అర్బన్ ప్రాంతాలకు సేవలను విస్తరించడం.",
      about_scope_li2: "స్వయం ఉపాధి, సీజనల్ మరియు పార్ట్‌టైమ్ ఉద్యోగాలను ప్రోత్సహించడం.",
      about_scope_li3: "యువత మరియు మహిళల కోసం ఇంటి నుండి పని చేసే అవకాశాలను ప్రోత్సహించడం.",
      about_scope_li4: "పూర్తి కనెక్టివిటీ లేని ప్రాంతాల్లో తక్కువ డేటా/ఆఫ్లైన్ మోడ్‌లను అందించడం.",
      about_scope_li5: "AI ఆధారిత కెరీర్ మార్గదర్శకత్వం మరియు వ్యక్తిగతీకరించిన జాబ్ మ్యాచ్‌ను ప్రారంభించడం.",
      about_vision_body: "ప్రతి గ్రామీణ యువకుడికి కెరీర్ అవకాశాలు అందుబాటులో ఉండే భవిష్యత్తు మన కల. నగరాలకు వలస తగ్గి, నైపుణ్యం కలిగిన కార్మికులతో స్థానిక వ్యాపారాలు అభివృద్ధి చెందాలి. అవకాశ్ సముదాయాలను అవకాశాలతో కలిపి మరింత బలమైన, స్థిరమైన ఆర్థిక వ్యవస్థలను నిర్మిస్తోంది.",
      about_inspiration_body: "గ్రామీణ సముదాయాల బలం, నైపుణ్యాలు మరియు పట్టుదల మాకు ప్రేరణ. గ్రామీణ ప్రతిభను ఉద్యోగాలతో కలపాలన్న మా లక్ష్యాన్ని కింద చూపిన చిత్రీకరణ ప్రతిబింబిస్తుంది.",
    },
  };

  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setCurrentLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang === "te" ? "te" : "en");
  }

  function translateElement(el, lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    const htmlKey = el.getAttribute("data-i18n-html");
    if (htmlKey && dict[htmlKey] !== undefined) {
      el.innerHTML = dict[htmlKey];
    }
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
    const phKey = el.getAttribute("data-i18n-placeholder");
    if (phKey && dict[phKey] !== undefined && "placeholder" in el) {
      el.placeholder = dict[phKey];
    }
    const titleKey = el.getAttribute("data-i18n-title");
    if (titleKey && dict[titleKey] !== undefined) {
      el.title = dict[titleKey];
    }
  }

  function applyTranslations() {
    const lang = getCurrentLang();
    const all = document.querySelectorAll(
      "[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-title]"
    );
    all.forEach((el) => translateElement(el, lang));
  }

  function toggleLanguage() {
    const next = getCurrentLang() === "en" ? "te" : "en";
    setCurrentLang(next);
    applyTranslations();
  }

  // Expose minimal API
  window.i18n = {
    apply: applyTranslations,
    toggle: toggleLanguage,
    get: getCurrentLang,
    set: (lang) => {
      setCurrentLang(lang);
      applyTranslations();
    },
    translations,
  };

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setCurrentLang(getCurrentLang());
      applyTranslations();
    });
  } else {
    setCurrentLang(getCurrentLang());
    applyTranslations();
  }
})();
