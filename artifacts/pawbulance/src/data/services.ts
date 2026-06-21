export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  heroHeading: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  whySection: {
    heading: string;
    paragraphs: string[];
  };
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  img: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    shortDesc: "Comprehensive health assessments for your pet's ongoing wellness.",
    heroHeading: "General Veterinary Consultation in Dubai",
    heroSub: "A thorough head-to-tail examination by our experienced veterinarians at our JBR clinic — because prevention is the best medicine.",
    metaTitle: "General Vet Consultation Dubai | JBR Veterinary Clinic | Pawbulance",
    metaDescription: "Book a general veterinary consultation at Pawbulance in JBR, Dubai. Expert health assessments for dogs, cats, and small animals. 4.8★ rated vet clinic in Dubai Marina.",
    keywords: "vet consultation Dubai, general vet JBR, veterinarian Dubai Marina, pet checkup Dubai, dog vet Dubai, cat vet JBR",
    whySection: {
      heading: "Why Regular Vet Consultations Matter",
      paragraphs: [
        "Many serious health conditions in pets develop silently — without obvious symptoms until they become advanced. A routine consultation allows our vets to detect early warning signs of disease, parasites, dental issues, and nutritional deficiencies before they escalate into costly and painful problems.",
        "Pets age faster than humans. A single year can represent several years of biological change. Regular check-ups calibrated to your pet's life stage ensure they receive the right care at the right time — from puppyhood to senior years.",
        "At Pawbulance, every consultation includes a full physical examination, weight and nutrition review, coat and skin assessment, and a personalised wellness plan tailored to your pet's breed, age, and lifestyle.",
      ],
    },
    benefits: [
      { title: "Early Disease Detection", desc: "Catch health issues before they become serious and expensive to treat." },
      { title: "Personalised Health Plan", desc: "Custom nutrition and preventive care advice based on your pet's unique needs." },
      { title: "Weight & Nutrition Review", desc: "Keep your pet at a healthy weight with expert dietary guidance." },
      { title: "Peace of Mind", desc: "Know your pet is truly healthy — not just appearing healthy." },
      { title: "Vaccination Schedule", desc: "Stay on track with immunisations and parasite prevention." },
      { title: "Behavioural Guidance", desc: "Discuss any concerns about mood, energy, or behaviour changes." },
    ],
    process: [
      { step: "01", title: "Book Your Appointment", desc: "Reserve your slot online or via WhatsApp. We'll confirm within the hour." },
      { step: "02", title: "Arrival & Check-In", desc: "Arrive at our calm, stress-free JBR clinic. Our team welcomes you and your pet warmly." },
      { step: "03", title: "Full Physical Examination", desc: "Our vet performs a head-to-tail examination and reviews your pet's history." },
      { step: "04", title: "Report & Recommendations", desc: "You receive a clear health report with next steps, follow-ups, and home care guidance." },
    ],
    faqs: [
      { q: "How often should I bring my pet for a general consultation?", a: "For healthy adult pets, we recommend once a year. Senior pets (7+ years) benefit from bi-annual check-ups. Puppies and kittens need more frequent visits in their first year." },
      { q: "What should I bring to the consultation?", a: "Bring any previous vaccination records, a stool sample if possible, and a list of any medications or supplements your pet currently takes." },
      { q: "How long does a consultation take?", a: "A standard consultation takes approximately 20–30 minutes. More complex assessments may take longer." },
      { q: "Do you see all types of pets?", a: "Yes. We see dogs, cats, rabbits, guinea pigs, and other small animals. Please call us in advance for exotic species." },
      { q: "Can I use the Pet Taxi to get to my appointment?", a: "Absolutely. Our Pet Taxi service covers JBR, Dubai Marina, Bluewaters, Palm Jumeirah, and surrounding areas." },
    ],
    img: "/general-consultation.png",
  },
  {
    slug: "vaccinations",
    title: "Vaccinations",
    shortDesc: "Essential immunisations to protect your pet from serious diseases.",
    heroHeading: "Pet Vaccinations in Dubai — JBR Veterinary Clinic",
    heroSub: "Protect your dog or cat from life-threatening diseases with up-to-date core and non-core vaccines administered by our expert team.",
    metaTitle: "Pet Vaccinations Dubai | Dog & Cat Vaccines JBR | Pawbulance",
    metaDescription: "Get your pet vaccinated at Pawbulance, JBR Dubai. Core and non-core vaccines for dogs, cats, and small animals. Book a vaccine appointment online. 4.8★ vet clinic.",
    keywords: "pet vaccinations Dubai, dog vaccines JBR, cat vaccinations Dubai Marina, puppy shots Dubai, kitten vaccines Dubai, pet immunisation UAE",
    whySection: {
      heading: "Why Vaccinations Are Non-Negotiable",
      paragraphs: [
        "Vaccines are one of the most effective tools in veterinary medicine. They train your pet's immune system to recognise and fight dangerous pathogens — some of which can be fatal or cause permanent damage. In Dubai, where pets frequently interact with others in parks, dog beaches, and during travel, the risk of exposure is real.",
        "UAE regulations also require specific vaccinations for pets entering the country, for travel health certificates, and for microchipping registration. Staying up to date protects not just your pet, but the entire community of animals they interact with.",
        "Our vets will review your pet's complete vaccination history, identify any gaps, and create a personalised schedule that covers all essential vaccines — core and non-core — based on your pet's lifestyle and risk profile.",
      ],
    },
    benefits: [
      { title: "Disease Prevention", desc: "Protection against Parvovirus, Distemper, Rabies, Leptospirosis, and more." },
      { title: "UAE Compliance", desc: "Stay compliant with Dubai Municipality pet health requirements." },
      { title: "Travel Ready", desc: "Vaccines are required for health certificates and international pet travel." },
      { title: "Herd Immunity", desc: "Protect other animals your pet comes into contact with." },
      { title: "Long-Term Savings", desc: "Prevention is far less costly than treatment of serious infectious disease." },
      { title: "Personalised Schedule", desc: "Custom vaccine plan based on your pet's age, breed, and lifestyle." },
    ],
    process: [
      { step: "01", title: "Book Vaccine Appointment", desc: "Choose your date online or via WhatsApp. Mention which vaccines are due." },
      { step: "02", title: "Pre-Vaccine Health Check", desc: "Our vet examines your pet to confirm they are healthy enough to vaccinate." },
      { step: "03", title: "Safe Administration", desc: "Vaccines are administered quickly and calmly in our stress-free clinic environment." },
      { step: "04", title: "Vaccine Record Update", desc: "Your pet's official vaccination booklet is updated and reminders are set for boosters." },
    ],
    faqs: [
      { q: "Which vaccines does my dog or cat need in Dubai?", a: "Core vaccines for dogs include Distemper, Parvovirus, Adenovirus (DHPPi), and Rabies. For cats: Feline Herpesvirus, Calicivirus, Panleukopenia (FVRCP), and Rabies. Non-core vaccines depend on lifestyle." },
      { q: "At what age should puppies and kittens start vaccinations?", a: "Puppies start at 6–8 weeks with a series of shots every 3–4 weeks until 16 weeks. Kittens begin at 6–8 weeks. Annual or triennial boosters follow." },
      { q: "Are there any side effects from vaccines?", a: "Most pets experience no side effects. Some may show mild lethargy or soreness at the injection site for 24–48 hours. Severe reactions are very rare but we monitor your pet post-vaccination." },
      { q: "Does my indoor cat still need vaccines?", a: "Yes. Rabies vaccination is legally required in the UAE. Other core vaccines are strongly recommended even for indoor cats." },
      { q: "Can I get a vaccination certificate from you?", a: "Yes. We provide official vaccination certificates and can issue international health certificates for pet travel." },
    ],
    img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "grooming",
    title: "Grooming",
    shortDesc: "Premium spa and grooming services for a clean, healthy, happy pet.",
    heroHeading: "Professional Pet Grooming in JBR, Dubai",
    heroSub: "Beyond aesthetics — our grooming service promotes skin health, parasite detection, and coat condition, all in a calm and stress-free environment.",
    metaTitle: "Pet Grooming Dubai | Dog & Cat Grooming JBR | Pawbulance",
    metaDescription: "Professional pet grooming at Pawbulance, JBR Dubai. Dog grooming, cat grooming, baths, haircuts, nail trimming and more. Book a grooming session online today.",
    keywords: "pet grooming Dubai, dog grooming JBR, cat grooming Dubai Marina, pet salon Dubai, dog bath Dubai, nail trimming cat Dubai",
    whySection: {
      heading: "Grooming Is Healthcare, Not Just Beauty",
      paragraphs: [
        "Regular grooming is far more than keeping your pet looking their best. It plays a vital role in their physical health. Matted fur can trap moisture and cause skin infections. Overgrown nails can alter your pet's gait and lead to joint pain. Regular brushing distributes natural oils and prevents painful knots.",
        "Professional grooming sessions are also an opportunity for trained eyes to spot early signs of skin conditions, lumps, ear infections, or parasites — issues that owners may overlook at home. At Pawbulance, our grooming staff are trained to communicate anything unusual directly to our veterinary team.",
        "Dubai's warm climate creates specific grooming challenges — humidity, dust, and heat make coat management especially important. Our grooming packages are designed for the region's conditions, using high-quality, pet-safe products.",
      ],
    },
    benefits: [
      { title: "Coat Health", desc: "Regular brushing and washing removes dirt, reduces shedding, and improves coat shine." },
      { title: "Skin Condition Checks", desc: "Our groomers are trained to spot early signs of skin irritation or parasites." },
      { title: "Nail & Paw Care", desc: "Prevent pain and joint issues caused by overgrown nails." },
      { title: "Ear Cleaning", desc: "Reduce the risk of ear infections with professional ear hygiene." },
      { title: "Stress-Free Environment", desc: "Our calm clinic environment makes grooming a positive experience for your pet." },
      { title: "Breed-Specific Care", desc: "Grooming tailored to your pet's specific breed requirements and coat type." },
    ],
    process: [
      { step: "01", title: "Book a Grooming Session", desc: "Choose your package and preferred time. We'll confirm your appointment quickly." },
      { step: "02", title: "Pre-Groom Assessment", desc: "We assess your pet's coat condition and discuss the style and products you prefer." },
      { step: "03", title: "Full Grooming Session", desc: "Bath, dry, brush, trim, nail clip, ear clean — tailored to your pet's needs." },
      { step: "04", title: "Pick-Up & Review", desc: "Your pet leaves looking and smelling great. We flag any skin or coat concerns noticed during the session." },
    ],
    faqs: [
      { q: "How often should I groom my dog or cat?", a: "Long-haired breeds typically need grooming every 4–6 weeks. Short-haired breeds every 8–12 weeks. Regular brushing at home between sessions is recommended." },
      { q: "What is included in a grooming session?", a: "Our standard session includes a bath with pet-safe shampoo, blow-dry, brushing, nail trimming, ear cleaning, and a basic trim. Full haircuts are available as an add-on." },
      { q: "Do you groom cats?", a: "Yes. We offer cat grooming including baths, brush-outs, nail trimming, and sanitary trims. Our team is experienced with anxious or sensitive cats." },
      { q: "My pet is anxious about grooming — can you handle that?", a: "Absolutely. We specialise in calm, low-stress grooming techniques. For very anxious pets, we may recommend a gentle sedation consultation with our vet." },
      { q: "Can I use the Pet Taxi for grooming drop-off and pick-up?", a: "Yes. Our Pet Taxi service can drop your pet off for a grooming session and return them home — perfect for busy owners." },
    ],
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop",
  },
  {
    slug: "microchipping",
    title: "Microchipping",
    shortDesc: "Permanent, safe identification for your pet — required by UAE law.",
    heroHeading: "Pet Microchipping in Dubai — JBR Veterinary Clinic",
    heroSub: "A single, quick procedure that permanently links your pet to you. Mandatory in the UAE and the safest way to ensure your pet is always found if lost.",
    metaTitle: "Pet Microchipping Dubai | Dog & Cat Microchip JBR | Pawbulance",
    metaDescription: "Get your pet microchipped at Pawbulance, JBR Dubai. ISO-compliant microchips for dogs, cats, and small animals. UAE mandatory microchipping. Quick, safe, and permanent.",
    keywords: "pet microchip Dubai, dog microchipping JBR, cat microchip UAE, pet ID chip Dubai, pet registration Dubai Municipality, microchip vet Dubai Marina",
    whySection: {
      heading: "Why Every Pet in Dubai Must Be Microchipped",
      paragraphs: [
        "In the UAE, microchipping is not optional — it is required by Dubai Municipality for all dogs and cats. Beyond legal compliance, a microchip is the single most reliable way to identify a lost pet. Collars fall off. Tags fade. A microchip lasts a lifetime.",
        "The procedure takes only seconds. A tiny chip, roughly the size of a grain of rice, is inserted under the skin between your pet's shoulder blades using a sterile needle — no anaesthesia required. The chip stores a unique 15-digit ISO code that can be scanned at any vet clinic, shelter, or Dubai Municipality facility.",
        "Once microchipped, your pet is registered in the national database, linking their chip number to your contact details. If they are ever lost or found, a simple scan reunites you immediately. It is the most effective, permanent, and pain-free identification available.",
      ],
    },
    benefits: [
      { title: "UAE Legal Compliance", desc: "Required by Dubai Municipality for all dogs and cats in the emirate." },
      { title: "Permanent ID", desc: "Unlike collars or tags, a microchip cannot be lost, removed, or damaged." },
      { title: "Quick & Pain-Free", desc: "The procedure takes seconds and causes minimal discomfort — no anaesthesia needed." },
      { title: "Database Registration", desc: "Your contact details are linked to your pet's chip in the national registry." },
      { title: "Travel Requirement", desc: "Required for international pet travel and health certificates." },
      { title: "Lifetime Protection", desc: "One procedure. A lifetime of identification and peace of mind." },
    ],
    process: [
      { step: "01", title: "Book the Procedure", desc: "Schedule a microchipping appointment online or via WhatsApp. No lengthy prep required." },
      { step: "02", title: "Brief Health Check", desc: "Our vet confirms your pet is healthy and ready for the procedure." },
      { step: "03", title: "Chip Implantation", desc: "The microchip is inserted quickly between the shoulder blades. Takes under 10 seconds." },
      { step: "04", title: "Database Registration", desc: "We register your pet's chip and your contact details in the official UAE database." },
    ],
    faqs: [
      { q: "Is microchipping painful for my pet?", a: "The procedure is very quick and causes minimal discomfort — similar to a standard injection. Most pets don't react at all. No anaesthesia is required." },
      { q: "At what age can pets be microchipped?", a: "Puppies and kittens can be microchipped as young as 6–8 weeks old. We recommend doing it at the same time as their first vaccination." },
      { q: "Is microchipping mandatory in Dubai?", a: "Yes. Dubai Municipality requires all dogs and cats to be microchipped and registered. Failure to comply can result in fines." },
      { q: "Can I update my contact details if I move?", a: "Yes. Contact our clinic and we will update your details in the national registry. Always keep your information current." },
      { q: "What chip standard do you use?", a: "We use ISO 11784/11785 compliant 15-digit chips, which are universally readable and accepted for international pet travel." },
    ],
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    shortDesc: "Proactive health management to keep your pet thriving year-round.",
    heroHeading: "Preventive Veterinary Care in Dubai — Pawbulance JBR",
    heroSub: "The best treatment is prevention. Our comprehensive preventive care programmes protect your pet's health before problems arise.",
    metaTitle: "Preventive Pet Care Dubai | Wellness Plans JBR | Pawbulance",
    metaDescription: "Comprehensive preventive veterinary care at Pawbulance, JBR Dubai. Parasite prevention, dental care, nutrition plans, and wellness screenings for dogs and cats in Dubai.",
    keywords: "preventive pet care Dubai, pet wellness plan Dubai, flea tick prevention Dubai, pet parasite control UAE, pet health screening JBR, veterinary wellness Dubai Marina",
    whySection: {
      heading: "Preventing Disease Is Always Better Than Treating It",
      paragraphs: [
        "Reactive medicine — treating your pet only when they show symptoms — is both more stressful for your pet and more expensive for you. Preventive care flips this model. By identifying risks early and maintaining ongoing protection against parasites, dental disease, and nutritional deficiencies, we keep your pet healthier for longer.",
        "Dubai's climate presents unique challenges: year-round heat and humidity create ideal conditions for fleas, ticks, and heartworm. Sand, dust, and pollen affect respiratory health. Our preventive care protocols are specifically calibrated for pets living in the UAE environment.",
        "A tailored preventive care plan from Pawbulance covers parasite prevention, dental hygiene, seasonal health risks, weight management, and regular screenings — all coordinated in a single, easy-to-follow schedule.",
      ],
    },
    benefits: [
      { title: "Parasite Prevention", desc: "Year-round protection from fleas, ticks, worms, and heartworm." },
      { title: "Dental Disease Prevention", desc: "Regular dental checks prevent painful and expensive dental disease." },
      { title: "Weight Management", desc: "Nutritional guidance to maintain healthy weight and avoid obesity-related illness." },
      { title: "Seasonal Protection", desc: "Protocols tailored to Dubai's climate and specific environmental risks." },
      { title: "Blood & Organ Screening", desc: "Annual bloodwork detects organ dysfunction early, before symptoms appear." },
      { title: "Cost Savings", desc: "Prevention consistently costs less than treatment of established disease." },
    ],
    process: [
      { step: "01", title: "Wellness Assessment", desc: "A complete baseline health evaluation to identify your pet's specific risk factors." },
      { step: "02", title: "Custom Prevention Plan", desc: "We design a year-round plan covering vaccines, parasite control, nutrition, and screenings." },
      { step: "03", title: "Ongoing Monitoring", desc: "Regular check-ins to adjust the plan as your pet ages or their needs change." },
      { step: "04", title: "Annual Bloodwork", desc: "Routine bloodwork every 12 months to catch organ and systemic changes early." },
    ],
    faqs: [
      { q: "What does preventive care include?", a: "Preventive care includes routine wellness exams, vaccinations, parasite prevention (fleas, ticks, worms, heartworm), dental checks, nutritional advice, and regular bloodwork for senior pets." },
      { q: "How often does my pet need a wellness visit?", a: "Healthy adult dogs and cats should visit once a year. Puppies, kittens, and seniors (7+ years) benefit from visits every 6 months." },
      { q: "Does my indoor pet need parasite prevention?", a: "Yes. Fleas, ticks, and mosquitoes (which carry heartworm) can enter any home. Indoor pets in Dubai still need regular parasite prevention." },
      { q: "What parasite prevention products do you use?", a: "We use veterinary-grade, evidence-based products appropriate for the UAE climate. Our vets will recommend the best option based on your pet's size, species, and lifestyle." },
      { q: "Is preventive care covered by pet insurance?", a: "Many pet insurance plans in the UAE cover or subsidise wellness visits and preventive treatments. Check your policy details or ask our team for guidance." },
    ],
    img: "https://images.unsplash.com/photo-1550038374-64db45c0d7e4?q=80&w=2080&auto=format&fit=crop",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    shortDesc: "Advanced in-house diagnostic testing for fast, accurate answers.",
    heroHeading: "Veterinary Diagnostics in Dubai — In-House Lab & Imaging",
    heroSub: "When your pet is unwell, answers matter. Our state-of-the-art diagnostic equipment delivers rapid, accurate results so treatment can begin without delay.",
    metaTitle: "Vet Diagnostics Dubai | Pet Blood Tests & X-Ray JBR | Pawbulance",
    metaDescription: "Advanced veterinary diagnostics at Pawbulance, JBR Dubai. In-house blood tests, urinalysis, X-rays and more for dogs and cats. Fast results, expert interpretation. Book now.",
    keywords: "vet diagnostics Dubai, pet blood test Dubai, dog X-ray JBR, cat blood work Dubai Marina, veterinary lab Dubai, pet diagnostic imaging UAE",
    whySection: {
      heading: "Accurate Diagnosis Is the Foundation of Good Treatment",
      paragraphs: [
        "Many illnesses look identical from the outside — lethargy, loss of appetite, weight loss — but have very different underlying causes. Without diagnostics, treatment is guesswork. With accurate testing, we can identify the exact problem and choose the most effective treatment immediately.",
        "At Pawbulance, we operate in-house diagnostic equipment that produces results within minutes, not days. Our haematology and biochemistry analysers provide complete blood counts and organ function panels on-site. This eliminates the waiting time of external labs and allows us to begin treatment in the same visit.",
        "Early diagnosis is especially critical in pets, who are skilled at hiding pain and illness. By the time symptoms become obvious, a condition may already be advanced. Routine diagnostic screening as part of your pet's annual check-up can catch problems while they are still easily treatable.",
      ],
    },
    benefits: [
      { title: "In-House Results", desc: "Blood tests and urinalysis results are available within minutes at our clinic." },
      { title: "Complete Blood Count", desc: "Assess red cells, white cells, and platelets to screen for infection, anaemia, and more." },
      { title: "Organ Function Panels", desc: "Evaluate kidney, liver, and pancreatic function with comprehensive biochemistry." },
      { title: "Urinalysis", desc: "Detect urinary tract infections, kidney disease, and metabolic conditions." },
      { title: "Imaging Referrals", desc: "We coordinate rapid referrals for X-ray and ultrasound when indicated." },
      { title: "Expert Interpretation", desc: "Our vets explain every result in clear language and outline the next steps." },
    ],
    process: [
      { step: "01", title: "Clinical Examination", desc: "Our vet examines your pet and determines which diagnostic tests are appropriate." },
      { step: "02", title: "Sample Collection", desc: "Blood, urine, or swab samples are collected quickly and with minimal stress." },
      { step: "03", title: "In-House Analysis", desc: "Samples are processed in our on-site lab. Most results are ready within 15–30 minutes." },
      { step: "04", title: "Results & Treatment Plan", desc: "Our vet reviews results with you, explains findings, and begins treatment immediately." },
    ],
    faqs: [
      { q: "Does my pet need to fast before blood tests?", a: "For routine bloodwork, a 4–6 hour fast is ideal but not always required. Our team will advise you when booking. For lipid panels or certain organ tests, fasting produces more accurate results." },
      { q: "How long do diagnostic results take?", a: "In-house blood tests and urinalysis results are available within 15–30 minutes. Results requiring external specialist labs typically take 24–48 hours." },
      { q: "Will my pet be sedated for diagnostic procedures?", a: "Most diagnostic procedures — blood draws, urinalysis, swabs — do not require sedation. For imaging or more invasive tests, we will discuss sedation options individually." },
      { q: "What conditions can diagnostics detect?", a: "Diagnostics can identify infections, anaemia, kidney disease, liver disease, diabetes, hormonal disorders, urinary tract infections, cancer markers, and many other conditions." },
      { q: "Do you offer regular health screenings for senior pets?", a: "Yes. We strongly recommend annual bloodwork for all pets over 7 years, as organ function can change significantly with age. Early detection dramatically improves outcomes." },
    ],
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2073&auto=format&fit=crop",
  },
  {
    slug: "dental-care",
    title: "Dental Care",
    shortDesc: "Professional dental cleaning and oral health management for your pet.",
    heroHeading: "Pet Dental Care in Dubai — Professional Veterinary Dentistry",
    heroSub: "Dental disease affects over 80% of dogs and cats over 3 years old. Our professional dental care keeps your pet's mouth healthy and pain-free.",
    metaTitle: "Pet Dental Care Dubai | Dog & Cat Teeth Cleaning JBR | Pawbulance",
    metaDescription: "Professional pet dental care at Pawbulance, JBR Dubai. Dental scaling, cleaning, and oral health assessments for dogs and cats. Prevent dental disease early. Book now.",
    keywords: "pet dental care Dubai, dog teeth cleaning JBR, cat dental cleaning Dubai Marina, veterinary dentistry Dubai, pet oral health UAE, dog dental scaling Dubai",
    whySection: {
      heading: "Dental Disease Is the Most Common, Most Overlooked Pet Health Problem",
      paragraphs: [
        "Studies show that by age 3, over 80% of dogs and 70% of cats already have some form of periodontal disease. Unlike humans, pets cannot tell you their teeth hurt. They continue to eat, play, and behave normally — while suffering silently from infection, inflamed gums, and loose teeth.",
        "Untreated dental disease doesn't stay in the mouth. The bacteria from infected gums enter the bloodstream and can damage the heart, kidneys, and liver over time. A clean mouth is genuinely linked to a longer, healthier life for your pet.",
        "Professional dental cleaning under anaesthesia allows a thorough cleaning below the gum line — the area home brushing cannot reach. Our vets conduct a full oral examination, remove tartar and plaque build-up, and identify any teeth requiring extraction or treatment.",
      ],
    },
    benefits: [
      { title: "Pain Relief", desc: "Dental disease causes chronic pain. Professional cleaning resolves infection and discomfort." },
      { title: "Fresh Breath", desc: "Persistent bad breath is a sign of dental disease — cleaning eliminates the source." },
      { title: "Systemic Health Protection", desc: "Prevent bacteria from reaching the heart, kidneys, and liver through the bloodstream." },
      { title: "Early Problem Detection", desc: "Oral exams identify cracked teeth, cysts, and masses before they cause serious damage." },
      { title: "Home Care Guidance", desc: "We teach you how to brush your pet's teeth and recommend dental chews and diets." },
      { title: "Longer Life", desc: "Studies link good oral health with longer, healthier lifespans in pets." },
    ],
    process: [
      { step: "01", title: "Oral Health Assessment", desc: "Our vet examines your pet's teeth, gums, and mouth during a standard consultation." },
      { step: "02", title: "Pre-Anaesthetic Bloodwork", desc: "Bloodwork confirms your pet is safe for the anaesthetic procedure." },
      { step: "03", title: "Professional Dental Cleaning", desc: "Under anaesthesia, we perform a full scaling and polish above and below the gum line." },
      { step: "04", title: "Recovery & Home Care Plan", desc: "Your pet recovers comfortably. We provide a personalised home dental care routine." },
    ],
    faqs: [
      { q: "Does my pet need anaesthesia for a dental cleaning?", a: "Yes. Anaesthesia is required for safe, thorough cleaning below the gum line. It also prevents stress and discomfort. We perform pre-anaesthetic bloodwork to ensure your pet is a safe candidate." },
      { q: "How do I know if my pet has dental disease?", a: "Signs include bad breath, yellow or brown tartar on teeth, drooling, pawing at the mouth, reluctance to eat hard food, and bleeding gums. Many pets show no obvious signs despite significant disease." },
      { q: "How often does my pet need professional dental cleaning?", a: "Most dogs and cats benefit from professional cleaning every 1–2 years. Smaller breeds and brachycephalic breeds (Pugs, Bulldogs, Persian cats) may need it more frequently." },
      { q: "Can I brush my pet's teeth at home?", a: "Yes, and it's highly effective when done correctly. We will demonstrate proper technique and recommend pet-safe toothpaste. Daily brushing is ideal, even a few times a week makes a significant difference." },
      { q: "Is the anaesthesia safe?", a: "We use modern, carefully monitored anaesthetic protocols. Pre-operative bloodwork, IV fluids, and continuous monitoring throughout the procedure make the process very safe for healthy pets." },
    ],
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "health-certificates",
    title: "Health Certificates",
    shortDesc: "Official veterinary documentation for pet travel and UAE registration.",
    heroHeading: "Pet Health Certificates in Dubai — Travel & Official Documentation",
    heroSub: "Planning to travel internationally with your pet? We issue official veterinary health certificates recognised by UAE and international authorities — quickly and accurately.",
    metaTitle: "Pet Health Certificate Dubai | Pet Travel Docs JBR | Pawbulance",
    metaDescription: "Get official pet health certificates at Pawbulance, JBR Dubai. Travel health certificates for dogs and cats, UAE import/export documentation. Fast, accurate, and USDA-accredited format.",
    keywords: "pet health certificate Dubai, pet travel certificate UAE, dog travel certificate JBR, cat health certificate Dubai, international pet travel Dubai, IATA pet travel Dubai",
    whySection: {
      heading: "Travelling With Your Pet? Documentation Is Everything",
      paragraphs: [
        "International pet travel is one of the most documentation-intensive processes a pet owner can face. Different countries have different requirements — specific vaccines, parasite treatments, blood titre tests, waiting periods, and official government-stamped health certificates. Getting it wrong means your pet could be denied entry, quarantined, or sent back.",
        "At Pawbulance, our veterinarians are experienced in international pet travel documentation. We stay up to date on UAE export requirements and the destination country's import rules, so we can guide you through exactly what your pet needs — and in the right order, since some requirements have mandatory waiting periods.",
        "Whether you're relocating from Dubai, taking your pet on holiday, or importing a pet into the UAE, we prepare the complete documentation package and coordinate with government authorities where required.",
      ],
    },
    benefits: [
      { title: "International Compliance", desc: "Certificates prepared according to the specific requirements of your destination country." },
      { title: "UAE Export Documentation", desc: "Official MOCCAE-compliant certificates for pets leaving the UAE." },
      { title: "UAE Import Documentation", desc: "Proper documentation and guidance for bringing pets into the UAE." },
      { title: "Titre Test Coordination", desc: "Rabies antibody titre tests coordinated for countries requiring them (EU, UK, Australia)." },
      { title: "Airline Compliance", desc: "Documentation formatted to meet IATA Live Animals Regulations standards." },
      { title: "Expert Guidance", desc: "We walk you through every step of the process and timeline." },
    ],
    process: [
      { step: "01", title: "Consultation & Planning", desc: "Book a travel documentation consultation. We review your destination's requirements and timeline." },
      { step: "02", title: "Health Examination", desc: "A full clinical examination is required for the certificate. Your pet must be fit to travel." },
      { step: "03", title: "Vaccination & Treatment Verification", desc: "We confirm or administer any required vaccines, parasite treatments, or titre tests." },
      { step: "04", title: "Certificate Issuance", desc: "We prepare and issue the official certificate, coordinating government endorsement where required." },
    ],
    faqs: [
      { q: "How far in advance should I start the health certificate process?", a: "Start at least 4–6 weeks before travel for most destinations. For countries requiring rabies titre tests (UK, EU, Australia, NZ), start at least 3–6 months in advance due to mandatory waiting periods." },
      { q: "Which countries have the most complex requirements?", a: "Australia, New Zealand, the UK, Japan, and Hawaii have the strictest requirements. The European Union also requires specific documentation and microchip compliance. We advise on all of these." },
      { q: "Does the health certificate need government endorsement?", a: "Many countries require the certificate to be endorsed by MOCCAE (UAE Ministry of Climate Change). We coordinate this process for you." },
      { q: "Can I use the same health certificate for multiple destinations?", a: "Generally, no. Each destination country has specific requirements and the certificate must be issued for that country. If you have a multi-destination trip, contact us to discuss your itinerary." },
      { q: "What vaccinations are required for international travel?", a: "At minimum, Rabies vaccination is required by most countries. Many also require other core vaccines, parasite treatment (tapeworm, ticks), and specific timing windows. Requirements vary significantly by destination." },
    ],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
