// Per-service detail page content, taken from the scraped toplinehome.ca
// service pages in the project root. All six source pages share an identical
// structure (locality subhead, explainer, advantages, closing), so one template
// renders all six with no special cases.
//
// The wording is the source wording. The only departures are mechanical:
// inline cross-links were flattened to plain text (the "other services" strip
// handles that navigation), and the one em dash in the GoNano intro became a
// comma, per the no-dashes rule. No claim here was invented or reworded.
// The only authored text on these pages is navigational. See PRODUCT.md
// principle 1.

export interface Advantage {
  title: string;
  body: string;
}

export interface ServiceDetail {
  /** The locality H2 from the source page. */
  heading: string;
  /** Opening paragraph, verbatim. */
  intro: string;
  explainerTitle: string;
  explainerBody: string;
  advantagesTitle: string;
  advantages: Advantage[];
  closingTitle: string;
  closingBody: string[];
  /** Shortened intro for meta description and social cards. */
  metaDescription: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "attic-insulation": {
    heading: "Eco-Friendly Attic Insulation for Ottawa, ON & Calgary, AB Homes",
    intro:
      "Well-insulated attics make entire homes feel more comfortable. TopLine Home Solutions installs high quality attic insulation in Ottawa, ON & Calgary, AB homes using ecofriendly blown cellulose materials. Our team helps you achieve steady comfort, smaller energy bills, and a cleaner space overhead that helps trap heat in winter and keep rooms cooler in summer. Each installation stays neat and reliable from start to finish, delivering the performance your home deserves.",
    explainerTitle: "What Is Cellulose Attic Insulation?",
    explainerBody:
      "Cellulose attic insulation is made from recycled paper fibers treated to resist fire, mold, and pests. This dense, loose-fill material is blown into your attic, settling into gaps, cracks, and corners that other materials often miss. This even coverage enhances thermal control, boosting your home's efficiency and lowering energy bills. By blocking heat flow and reducing drafts, cellulose insulation helps maintain a comfortable, consistent indoor climate year-round.",
    advantagesTitle: "Advantages of Choosing Cellulose Attic Insulation",
    advantages: [
      {
        title: "Energy Efficiency",
        body: "Heating and cooling costs drop significantly when you choose cellulose insulation to keep indoor temperatures steady throughout the year.",
      },
      {
        title: "Air Sealing",
        body: "Small gaps and cracks in your attic floor disappear under this thick layer of fibers, slowing down airflow to stop unwanted drafts.",
      },
      {
        title: "Soundproofing",
        body: "Noise from the street or loud neighbors stays outside thanks to cellulose insulation. You'll notice a quieter space immediately after installation.",
      },
      {
        title: "Eco-Friendly",
        body: "Old newspapers find a new life as a powerful tool to protect your living space, saving you money while helping the planet at the same time.",
      },
      {
        title: "Pest Protection",
        body: "Rats and mice find it very difficult to move through this dense, heavy material. Special minerals added to the fibers create a shield to keep your attic clean and safe from intruders.",
      },
    ],
    closingTitle:
      "Enhance Your Home's Efficiency With Our Comprehensive Attic Insulation Services",
    closingBody: [
      "A high-performing attic protects your family from harsh weather and rising utility bills. Our approach treats your attic as a complete system. We assess ventilation, airflow, and efficiency needs before building a custom plan for your home. This ensures we fix hidden air leaks and poor airflow, rather than just adding a layer of fluff.",
      "You'll feel the difference right away with warmer winters, cooler summers, and fewer drafts. Quality materials and skilled hands produce results that last. Ready for a more comfortable and efficient home? Contact TopLine Home Solutions today for a professional quote to bring cellulose attic insulation to your home.",
    ],
    metaDescription:
      "Eco-friendly blown cellulose attic insulation for Ottawa, ON and Calgary, AB homes. Steady comfort, smaller energy bills, and a cleaner space overhead.",
  },

  "air-sealing-ventilation": {
    heading: "Premium Air Sealing Solutions in Ottawa, ON & Calgary, AB",
    intro:
      "Residents trust TopLine Home Solutions for premium air sealing in Ottawa, ON & Calgary, AB to support proper home performance. We seal small gaps to ensure fresh air circulates freely while keeping conditioned air inside the house. Proper attic ventilation keeps your property fresh and supports excellent energy efficiency. Homeowners appreciate the immediate improvements in daily comfort. Upgrading your property creates a welcoming environment for your entire family, keeping every room comfortable year-round.",
    explainerTitle: "Lower Your Utility Bills With Proper Attic Air Sealing",
    explainerBody:
      "Attic air sealing means finding and closing small, hidden gaps between your living space and the attic. Openings often exist around light fixtures, plumbing pipes, wiring, and access hatches. Sealing these leaks keeps your conditioned air in your living space, not the attic. Air sealing works with your insulation to improve energy efficiency, lower utility bills, and reduce stress on your heating and cooling systems, keeping your home comfortable all year round.",
    advantagesTitle: "Key Advantages of Proper Air Sealing & Ventilation",
    advantages: [
      {
        title: "Retain Energy & Warmth",
        body: "Sealing gaps in your attic and foundation keeps conditioned air inside, lowering your monthly utility bills and ensuring your home stays comfortable year-round.",
      },
      {
        title: "Improved Indoor Comfort",
        body: "Your home will have more consistent temperatures, eliminating annoying drafts and cold spots that can make certain rooms uncomfortable for some family members.",
      },
      {
        title: "Support HVAC Efficiency",
        body: "Proper air sealing and ventilation reduce the daily workload on your HVAC equipment, helping the entire system last longer and perform more efficiently.",
      },
      {
        title: "Maintaining Dry Spaces",
        body: "Blocking outside air movement prevents humid air from entering your space, protecting your home's structure from hidden rot and mold growth.",
      },
    ],
    closingTitle:
      "Seal Your Home's Hidden Leaks for Lasting Comfort & Energy Savings Today",
    closingBody: [
      "A drafty house not only wastes money but can also be uncomfortable. Our team goes beyond filling visible gaps to find and seal hidden air leaks inside walls and around pipes. Sealing these spaces before adding insulation is the best way to keep your home warm in the winter and cool in the summer.",
      "This thorough approach improves your home's comfort, protects it from moisture damage, and lowers your energy bills. We use high-quality materials and customize our strategies for your specific home to ensure the best results. Contact TopLine Home Solutions today for a free estimate and let our experienced professionals transform your house.",
    ],
    metaDescription:
      "Premium attic air sealing and ventilation in Ottawa, ON and Calgary, AB. Seal hidden leaks, lower utility bills, and keep every room comfortable year-round.",
  },

  "cellulose-soundproofing": {
    heading: "Home Soundproofing in Ottawa, ON & Calgary, AB for Lasting Peace",
    intro:
      "A peaceful home feels different the moment you walk inside. TopLine Home Solutions provides reliable home soundproofing in Ottawa, ON & Calgary, AB with our premium cellulose insulation. Outside noise fades while indoor temperatures remain steady, creating calm, cozy spaces. Your energy bills shrink as your comfort grows. Every room feels more private and restful. Our careful process transforms how your home sounds and feels, creating a peaceful sanctuary for your family to relax.",
    explainerTitle: "Create a Quieter, More Energy-Efficient Home Today",
    explainerBody:
      "Cellulose insulation is a smart, eco-friendly material made from recycled paper fibers. It's treated for fire and mold resistance, making it durable and safe for your home. Crews pack the dense material into walls, ceilings, and floors, filling every gap to create a sound barrier. This density traps noise and softens sounds between rooms. At the same time, it improves energy efficiency, keeping your home comfortable year-round while lowering energy bills. It's one practical solution for a quieter, more efficient home.",
    advantagesTitle: "A Seamless Seal for Maximum Soundproofing",
    advantages: [
      {
        title: "Superior Noise Reduction",
        body: "Cellulose insulation easily absorbs airborne sounds, such as voices and traffic noise, reducing sound transfer between rooms.",
      },
      {
        title: "Complete Coverage",
        body: "This material fills every gap around pipes, wiring, and framing, eliminating hidden paths for sounds and settling snugly to ensure the area is sealed with no air pockets.",
      },
      {
        title: "Improved Indoor Comfort",
        body: "Enjoy peaceful rooms as outside noise stays out and privacy improves, while stopping vibrations from traveling between walls and floors in your home.",
      },
      {
        title: "Thermal Insulation",
        body: "Keep your home comfortable year-round with better temperature control. Cellulose insulation helps improve your home's energy efficiency while saving you money.",
      },
    ],
    closingTitle:
      "Upgrade Your Living Space With High-Performance Cellulose Insulation",
    closingBody: [
      "Smart soundproofing starts with the right team and materials. TopLine Home Solutions pairs high-performance cellulose insulation with careful installation for real results. Our crews focus on full coverage to ensure every corner of your home benefits from lasting efficiency, delivering total performance, and combining insulation and sound control in a single upgrade.",
      "Our reliable, professional service shapes each project around your needs, meaning a quieter, more energy-efficient home is always within reach. Contact us today for a free estimate and start enjoying the calm, comfortable space you and your family deserve.",
    ],
    metaDescription:
      "Home soundproofing with premium cellulose insulation in Ottawa, ON and Calgary, AB. Quieter rooms, steadier temperatures, and lower energy bills.",
  },

  "gonano-roofing-spray": {
    heading: "Save With GoNano Roofing Spray in Ottawa, ON & Calgary, AB",
    intro:
      "Your roof is one of the most important investments in your home, and protecting it properly can significantly extend its lifespan and prevent costly repairs. At TopLine Home Solutions, we offer advanced GoNano Roofing Spray services in Ottawa, ON & Calgary, AB designed to strengthen, protect, and preserve your roofing system for years to come. This innovative solution creates a long-lasting, breathable protective barrier that helps defend against moisture, UV damage, and the harsh freeze-thaw cycles common in Canadian climates.",
    explainerTitle: "GoNano Nanotechnology",
    explainerBody:
      "Unlike traditional oil-based sealants that only coat the surface and can trap moisture, GoNano uses silicon-based nanotechnology to penetrate deep into roofing materials at the microscopic level. This allows your shingles to maintain proper breathability while sealing out water, helping to prevent cracking, premature aging, and structural damage. The result is a more durable, weather-resistant roof that performs better over time.",
    advantagesTitle: "Comprehensive Protection for Your Home",
    advantages: [
      {
        title: "Waterproof Barrier",
        body: "Each silicon molecule creates a permanent shield as it penetrates deep into the shingles. This helps repel water and manages moisture absorption.",
      },
      {
        title: "Sun & Weather Resistance",
        body: "The roofing spray reflects harmful UV rays to prevent the roofing material from becoming brittle and cracking.",
      },
      {
        title: "Organic Growth Defense",
        body: "Specialized compounds in the spray prevent mold and moss from growing in your shingles' pores, helping maintain a clean appearance.",
      },
      {
        title: "Energy Efficiency",
        body: "The thermal barrier properties lower the heat absorbed by your attic on hot days, keeping your home cooler and saving you money on utility bills.",
      },
    ],
    closingTitle:
      "Prevent Leaks and Costly Repairs With Our Affordable Roof Restoration Option",
    closingBody: [
      "Protect and restore your home without the high cost of a full roof replacement. GoNano roofing spray adheres to numerous building materials to strengthen your existing structure and prevent leaks. Homeowners and local businesses choose this preventative maintenance for its reliability and long-term value.",
      "By strengthening your roof now, you lower future repair bills and avoid costly disasters. Don't wait for small issues to grow. Contact TopLine Home Solutions today to schedule a consultation and get your free, customized quote from our knowledgeable staff. Give your home the ultimate care it deserves and enjoy total peace of mind.",
    ],
    metaDescription:
      "Advanced GoNano Roofing Spray in Ottawa, ON and Calgary, AB. A breathable, long-lasting barrier against moisture, UV damage, and freeze-thaw cycles.",
  },

  "attic-insulation-removal": {
    heading: "Top-Rated Insulation Removal Services in Ottawa, ON & Calgary, AB",
    intro:
      "The insulation in your attic shapes how comfortable, efficient, and healthy your home feels. TopLine Home Solutions provides professional insulation removal in Ottawa, ON & Calgary, AB to help homeowners restore air quality and cut energy costs. Our team prepares your attic for new materials, creating a healthier environment. You will notice a major difference in your utility bills and daily comfort levels. Upgrading your insulation starts with a clean slate and makes your home more comfortable.",
    explainerTitle: "Old Insulation Quietly Costs You More",
    explainerBody:
      "Attic insulation doesn't last forever. Over time, it breaks down, losing its ability to keep your home comfortable and increasing your utility costs. Heat escapes in the winter, and cool air slips out in the summer. Old insulation can also trap moisture, leading to musty odors and poor air quality. Removing this old, damaged material is essential before installing new high-performance insulation to ensure it works effectively and keeps your home healthy and efficient.",
    advantagesTitle: "How Do I Know If I Need Insulation Removal?",
    advantages: [
      {
        title: "Contamination & Damage",
        body: "Mold, water damage, or pests in your attic indicate your insulation is failing. These issues reduce effectiveness and can cause more serious problems if left unaddressed.",
      },
      {
        title: "Poor Energy Efficiency",
        body: "High energy bills are a common sign that your insulation is no longer working. Other indicators include rooms feeling too hot or too cold.",
      },
      {
        title: "Air Quality Concerns",
        body: "Musty odors coming from your vents can be traced back to old or contaminated insulation, impacting the air your family breathes every day.",
      },
    ],
    closingTitle:
      "Experience Better Air Quality & Long-Term Savings With a New Attic System",
    closingBody: [
      "A full attic upgrade is the key to a more efficient home. It starts with removing old, ineffective insulation. Then we air-seal your attic to stop hidden leaks that waste energy and drive up your utility bills. Finally, we install high-performance cellulose insulation to keep your home comfortable year-round.",
      "Replacing your insulation provides you with better temperatures, cleaner air, and long-term savings. Ready to transform your home's comfort and efficiency? Contact TopLine Home Solutions today to schedule your consultation and see what a full attic system upgrade can do for you.",
    ],
    metaDescription:
      "Professional attic insulation removal in Ottawa, ON and Calgary, AB. Clear out old, contaminated material and restore air quality before a new system goes in.",
  },

  "mold-removal-prevention": {
    heading: "Reliable Mold Removal Services Across Ottawa, ON & Calgary, AB",
    intro:
      "A safe, comfortable home starts with clean air and a strong structure. TopLine Home Solutions offers mold removal services for Ottawa, ON & Calgary, AB homes that target the root cause for lasting results. We focus on stopping growth before it spreads, ensuring your living space remains a sanctuary. Our team keeps your property in top shape so you can enjoy a bright environment where the structure stays strong, and the air stays clean.",
    explainerTitle: "Our Complete Mold Treatment Approach",
    explainerBody:
      "Effective mold treatment requires more than simply wiping down affected surfaces. It starts with a comprehensive inspection to identify the source of moisture, such as leaks or poor ventilation. After identifying the root cause, our team uses professional-grade treatments to safely remove all visible and hidden mold from your home. We then fix any ventilation or humidity issues to prevent any mold from returning to ensure a cleaner, healthier living space you can feel confident in.",
    advantagesTitle: "Whole-Home Approach to Preventing Mold Growth",
    advantages: [
      {
        title: "Air Sealing & Moisture Control",
        body: "Our team finds and seals small air leaks to keep humid air from entering your home, keeping moisture levels low and preventing mold growth.",
      },
      {
        title: "Ventilation Improvements",
        body: "Proper airflow reduces dampness by removing stale air from your home. Fans and vents work together to stop moisture from settling on surfaces.",
      },
      {
        title: "Insulation Solutions",
        body: "Upgrading your attic insulation can help prevent condensation and moisture buildup. Our cellulose insulation prevents temperature changes that can cause water buildup in your walls and attics.",
      },
      {
        title: "Ongoing Home Protection",
        body: "Continuous air monitoring keeps your home comfortable and dry, protecting your family from mold spores and unpleasant odors.",
      },
    ],
    closingTitle:
      "Protect Your Home With Long-Term Mold Prevention & Professional Repairs",
    closingBody: [
      "Mold growth requires real, lasting solutions, not short-term fixes that leave the door open for it to return. A healthy house needs a complete strategy that prevents problems before they start. TopLine Home Solutions takes a full-system approach, combining mold treatment with air sealing and insulation upgrades to protect your home from the inside out.",
      "Our team delivers experienced craftsmanship using durable, high-quality materials on every job. To give you added peace of mind, every project includes a two-year warranty so you can feel confident in your investment. Choosing a long-term solution is the best way to keep your family safe and your home's structure strong. Contact TopLine Home Solutions today to schedule your consultation and take the first step toward a cleaner, more protected home for years to come.",
    ],
    metaDescription:
      "Mold removal and prevention for Ottawa, ON and Calgary, AB homes. We target the moisture at the root cause, not just the surface, for lasting results.",
  },
};
