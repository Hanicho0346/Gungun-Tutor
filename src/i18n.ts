// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      tutors: "Tutors",
      contact: "Contact",
      FindTutor: "Find Your Tutor",
      heroTitle: "Empower Your {{highlight}} Future with Expert Tutoring",
      heroHighlight: "Child's",
      heroSubtitle: "Personalized one-on-one tutoring for all subjects and grade levels",
      getTutor: "Get Tutor",
      BecomeTutor:"Become a Tutor",
      whatWeDo: "What We {{highlight}}",
      whatWeDoHighlight: "Do",
      servicesDescription: "Goongun Tutor provides world-class educational services without compromising quality.",
      ourServices: "Our Services",
      helpChild: "We will help your child with their academics",
      businessIdeas: "Business Ideas",
      businessDescription: "Based on client needs, we will provide some good business solutions.",
      development: "Development",
      developmentDescription: "Creating your own website was never that easy. Come and check it out!",
      successTitle: "More Engaging, More {{highlight}} Result",
      successHighlight: "Successful",
      successDescription: "Our range of online study tools prepared by university teachers and experts in the field that individuals can enroll in to practice and assess where they are standing.",
      moreAboutUs: "More About Us",
      testimonials: "Our Testimonials",
      clientsSay: "Our {{highlight}} Says",
      clientsHighlight: "Client's",
      testimonialsDescription: "Discover how our tutoring services have empowered countless parents and students alike to achieve academic success.",
      howWeWork: "How We Work",
      workDescription: "Lessons to fit your schedule, from the comfort of home",
      whereWeTutored: "Where We've Tutored",
      tutoringDescription: "Our dedicated tutors serve students across Ethiopia, bringing quality education to every corner.",
      tutoringNetwork: "Our network of qualified tutors spans across Ethiopia, providing comprehensive educational support to students in need of quality learning opportunities.",
      features: {
        trainedTutor: "Trained Tutor",
        personalized: "Personalized Learning",
        flexible: "Flexible Scheduling",
        progress: "Progress Tracking"
      },
      screenFeatures: [
        {
          number: "1",
          title: "Talk face-to-face",
          description: "Students and tutors see each other via live video – great for building rapport"
        },
        {
          number: "2",
          title: "Share and collaborate",
          description: "Upload essays or past papers, and work through examples together on the whiteboard"
        },
        {
          number: "3",
          title: "Rewatch lessons",
          description: "Lessons are recorded, so students can watch them later for revision"
        }
      ],
      client1: {
        name: "John Doe",
        relation: "Mother",
        review: "Goongun Tutor has helped my child improve his grades significantly. I highly recommend their services.",
      },
      client2: {
        name: "Jane Doe",
        relation: "Sister",
        review: "The tutors at Goongun Tutor are very professional and have helped my child excel in his studies.",
      },
      client3: {
        name: "Alice Smith",
        relation: "Father",
        review: "My child has shown remarkable improvement in his studies since he started tutoring with Goongun Tutor.",
      },
    }
  },
  am: {
    translation: {
      home: "መነሻ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      tutors: "አስተማሪዎች",
      contact: "አግኙን",
      FindTutor: "አስተማሪዎን ያግኙ",
      BecomeTutor:"አስተማሪ ይሁኑ",
      heroTitle: "የልጅዎን {{highlight}} በብቃት ያለው አስተማሪ ያስተምረዋል",
      heroHighlight: "ወደፊት",
      heroSubtitle: "ለሁሉም የትምህርት ዓይነቶች እና ደረጃዎች የተለየ የአንድ ለአንድ አስተማሪ",
      getTutor: "አስተማሪ ያግኙ",
      whatWeDo: "ምን {{highlight}}",
      whatWeDoHighlight: "እንሰራለን",
      servicesDescription: "ጎንጉን አስተማሪ �ለማቻለ ጥራት ያለው የትምህርት አገልግሎት ይሰጣል።",
      ourServices: "የእኛ አገልግሎቶች",
      helpChild: "ልጅዎን በትምህርታቸው ለመርዳት እንረዳለን",
      businessIdeas: "የንግድ ሀሳቦች",
      businessDescription: "በደንበኞች ፍላጎት ላይ በመመስረት ጥሩ የንግድ መፍትሄዎችን እናቀርባለን።",
      development: "ልማት",
      developmentDescription: "የራስዎን ድረ-ገጽ መፍጠር በጭራሽ አስቸጋሪ አይደለም። እስኪ ይፈትሹት!",
      successTitle: "የበለጠ አስደሳች፣ የበለጠ {{highlight}} ውጤት",
      successHighlight: "ተሳካ",
      successDescription: "በዩኒቨርሲቲ መምህራን እና በሙያ ባለሙያዎች የተዘጋጁ የመስመር ላይ የትምህርት መሳሪያዎች ስብስብ ለመለማመድ እና የት እንደሚገኙ ለመገምገም ሊመዘገቡ ይችላሉ።",
      moreAboutUs: "ስለ እኛ የበለጠ",
      testimonials: "የደንበኞች አስተያየቶች",
      clientsSay: "ደንበኞቻችን {{highlight}}",
      clientsHighlight: "ይላሉ",
      testimonialsDescription: "የእኛ የአስተማሪነት አገልግሎት እንዴት ማህበረሰብን እንደሚያስተምር ይመልከቱ።",
      howWeWork: "እንዴት እንሰራለን",
      workDescription: "በቤትዎ ሰላም ሰላም ከመጠን በላይ የሚስማማ ትምህርት",
      whereWeTutored: "የምናስተምርበት ቦታ",
      tutoringDescription: "በመላው ኢትዮጵያ የሚገኙ ተማሪዎችን ጥራት ያለው ትምህርት እናቀርባለን።",
      tutoringNetwork: "በመላው ኢትዮጵያ የሚገኙ ብቁ አስተማሪዎች የሚያስተምሩ ሲሆን ጥራት ያለው የትምህርት ድጋፍ እናቀርባለን።",
      features: {
        trainedTutor: "ተሰልፈው የተመረቁ አስተማሪዎች",
        personalized: "በተለየ የተዘጋጀ ትምህርት",
        flexible: "ተለዋዋጭ የጊዜ ሰሌዳ",
        progress: "የሂደት መከታተያ"
      },
      screenFeatures: [
        {
          number: "1",
          title: "ቀጥታ ውይይት",
          description: "ተማሪዎች እና አስተማሪዎች በቀጥታ ቪዲዮ አማካኝነት ይገናኛሉ"
        },
        {
          number: "2",
          title: "አጋርነት",
          description: "ልጆች የተለያዩ የትምህርት እቃዎችን በመጠቀም በአጋርነት ይሰራሉ"
        },
        {
          number: "3",
          title: "ትምህርቶችን እንደገና ይመልከቱ",
          description: "ትምህርቶቹ ተቀርፀው ይቀመጣሉ ስለዚህ ተማሪዎች በኋላ ላይ ለማየት ይችላሉ"
        }
      ],
      client1: {
        name: "ወ/ሮ ቅድስት",
        relation: "እናት",
        review: "ያየነው ለውጥ በጣም ጥሩ ነው። ልጃችን ላይ ለውጥ አይተንባታል። ሰዐት አክባሪ ፣ ጥሩ አስጠኚ ናት። ተቋሙን እናመሰግናለን።",
      },
      client2: {
        name: "ዶ/ር ሂዎት",
        relation: "እናት",
        review: "በጣም ጥሩ በጣም ደስ የምትል ነች። ለልጅ የምትሆን በጣም ጎበዝ። እናመሰግናለን።",
      },
      client3: {
        name: "ወ/ሮ ፍቅር",
        relation: "እናት",
        review: "በጣም ጥሩ ባህሪ �ነው ያላት። ለልጄም ጥሩ ናት ፣ ወዳታለች ፣ በጣም አመሰግናለሁ።",
      },
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;