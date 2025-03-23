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
      findTutor: "Find Your Tutor",
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
    },
  },
  am: {
    translation: {
      home: "መነሻ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      tutors: "አስተማሪዎች",
      contact: "አግኙን",
      findTutor: "አስተማሪዎን ያግኙ",
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
        review: "በጣም ጥሩ ባህሪ ነው ያላት። ለልጄም ጥሩ ናት ፣ ወዳታለች ፣ በጣም አመሰግናለሁ።",
      },
    },
  },
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