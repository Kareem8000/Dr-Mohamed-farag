import { ClinicInfo, Service, Review } from './types';

export const CLINIC_INFO: ClinicInfo = {
  name: "أ.د. محمد فرج",
  title: "استشاري جراحة الفم وزراعة الأسنان",
  doctor: "أ.د. محمد فرج",
  address: "التجمع الأول – محور مصطفى كامل – مول رقم 19 – بجوار مستشفى تبارك – القاهرة",
  phone: "+201281022070",
  whatsapp: "201281022070",
  facebook: "https://www.facebook.com/share/1BLwgyj9pR/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/drfarag.dentist",
  tiktok: "https://www.tiktok.com/@dr.mohamed.farag8?_t=ZS-8zcSGVXLTfe&_r=1",
  vezeeta: "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D9%81%D8%B1%D8%AC-%D8%A7%D8%B3%D9%86%D8%A7%D9%86",
  // Updated Google Maps Embed URL based on place ID and coordinates
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.163776269666!2d31.4444017!3d30.0602232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581805501f0d47%3A0xf7386588602e3ac0!2sDr.Mohamed%20Farag%20Dental%20Clinic!5e0!3m2!1sen!2seg!4v1707654321000!5m2!1sen!2seg",
  workingHours: "السبت - الخميس: 12:00 ظهراً - 10:00 مساءً"
};

export const SERVICES: Service[] = [
  {
    id: 'implants',
    title: 'زراعة الأسنان',
    description: 'عوض الأسنان اللي فقدتها بزراعة تعيش معاك العمر كله وشكلها طبيعي جداً.',
    iconName: 'Anchor',
    whatsappMessage: "مساء الخير يا دكتور، كنت عايز استفسر عن تفاصيل زراعة الأسنان."
  },
  {
    id: 'root-canal',
    title: 'حشو وعلاج الجذور',
    description: 'بنعالج العصب بأحدث الأجهزة عشان نلحق الدرس ونخلصك من الوجع نهائياً.',
    iconName: 'Activity',
    whatsappMessage: "مساء الخير يا دكتور، عندي درس تاعبني ومحتاج حشو عصب، ممكن تفاصيل الحجز؟"
  },
  {
    id: 'surgery',
    title: 'جراحة وجه وفكين',
    description: 'جراحات دقيقة للفكين والضروس المدفونة، وكل ده بأمان تام وبدون قلق.',
    iconName: 'Stethoscope',
    whatsappMessage: "مساء الخير، كنت محتاج استشارة بخصوص جراحة فك / خلع ضرس."
  },
  {
    id: 'prosthetics',
    title: 'التركيبات الثابتة',
    description: 'طرابيش وجسور (زيركون - إيماكس) عشان ترجع شكل ووظيفة أسنانك زي الأول وأحسن.',
    iconName: 'Layers',
    whatsappMessage: "مساء الخير يا دكتور، كنت بسأل عن التركيبات والطرابيش للأسنان."
  },
  {
    id: 'cosmetic',
    title: 'تجميل الأسنان',
    description: 'عايز ابتسامة هوليود؟ عندنا فينير وتبييض هيغير شكل ضحكتك 180 درجة.',
    iconName: 'Sparkles',
    whatsappMessage: "مساء الخير، عايز أعرف تفاصيل أكتر عن تجميل الأسنان والفينير."
  },
  {
    id: 'orthodontics',
    title: 'تقويم الأسنان',
    description: 'بنظبط رصة الأسنان ونعالج أي اعوجاج عشان شكل الضحكة والوظيفة يكونوا تمام.',
    iconName: 'GitCommit',
    whatsappMessage: "مساء الخير، كنت عايز أحجز ميعاد لاستشارة تقويم الأسنان."
  },
  {
    id: 'gum',
    title: 'علاج اللثة',
    description: 'علاج الالتهابات وإزالة الجير عشان نحافظ على ثبات الأسنان وصحة الفم.',
    iconName: 'Heart',
    whatsappMessage: "مساء الخير يا دكتور، عندي مشاكل في اللثة وكنت محتاج أكشف."
  },
  {
    id: 'pediatric',
    title: 'أسنان الأطفال',
    description: 'معاملة خاصة للأطفال عشان يحبوا العيادة، بنتابع التبديل ونعالج التسوس بدري.',
    iconName: 'Smile',
    whatsappMessage: "مساء الخير، عايز أحجز كشف أسنان أطفال."
  },
  {
    id: 'general',
    title: 'كشف ومتابعة',
    description: 'فحص شامل وحشوات تجميلية وتنظيف، عشان تلحق أي مشكلة من أولها.',
    iconName: 'ShieldCheck',
    whatsappMessage: "مساء الخير، كنت عايز أحجز ميعاد للكشف والمتابعة."
  }
];

// Updated Reviews with Recent Dates
export const MOCK_REVIEWS: Review[] = [
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21OZlRHeElOVTgyVlROdVRVVm1VRWhCV201bk9HYxAB",
    patientName: "Ahmed Gawish",
    rating: 5,
    text: "Perfect",
    date: "قبل يومين",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjW2kDN2kzfXdyzc54CjScy5wgYSvN9PmCvYgedyOXRNzrtrZc5E=s1920-c-rp-mo-ba3-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT200ME56RkxabkZXVG1WUVRETjNWRzF0WTNSalYxRRAB",
    patientName: "Aya Hamedo",
    rating: 5,
    text: "ممتاز",
    date: "قبل 4 أيام",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWsxFYWi8cGNohsUsht8-pTlXsH1ne7IT1EUFMntUt6lshSuG84=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSUQzNDk3SzVRRRAB",
    patientName: "Haneen Badawi",
    rating: 5,
    text: "خلعت ضروس العقل ال٤ مع الدكتور ماشاء الله عليه سريع وشاطر وفاهم شغله الاستقبال رائع والعيادة نظيفة وكل شي تمام يعطيهم العافية",
    date: "منذ أسبوع",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocI6IpRHS9IQkI_WaMY_o_Od3OONfLlHHtU7nW8AavGrFF7a6w=s1920-c-rp-mo-ba3-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xwV1NGaGphSE5WTjJkTFJXMXRiMHB4U2pSeWJtYxAB",
    patientName: "oya oya",
    rating: 5,
    text: "دكتور محترم جدا وشاطر ما شاء الله ومستمع جدا وصبور وما شاء الله ربنا يزيده من علمه ويحسن ما بين ايديه محستش ب اي الم ف ضرس العقل وكنت مرعوبه والموضوع طلع مع الدكتور بسيط الحمد لله",
    date: "منذ 9 أيام",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLBShl0BBqX1zHLQuYNVYD9eNgadetcw--mhKYj9A0dRWddNw=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT205a1VtOWhSSGxhVVVOM1VHUTBkV3gyYTJwUU4yYxAB",
    patientName: "Hany Al-Khozahi",
    rating: 5,
    text: "السهل الممتع ما شاء الله يا دكتور محمد أفضل من قابلت في طب الأسنان",
    date: "منذ 10 أيام",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKby1d_407DaTr8OnfFlLTxR9zoM5ovs4UZNJRCyIChQhRSbQ=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2taUFNHb3lUa000V1dWUVlpMXNSSEpYU1hwclVVRRAB",
    patientName: "سلطان الرشيدي",
    rating: 5,
    text: "كانت تجربتي مع دكتور الأسنان أكثر من رائعة! من أول زيارة، لاحظت الاحترافية العالية في التعامل والدقة في المواعيد. العيادة نظيفة ومريحة، والدكتور فعلاً بيعرف شغله وبيشرح كل خطوة بكل وضوح واهتمام.",
    date: "منذ 12 يوم",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLscJTbhYJVtjUs_9RI06S-DpFQWo_ETT1WXfYSzRgK_Sfz=s1920-c-rp-mo-ba2-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2paM2RVbEZjR28wZFdabFVrOWFWM2RXVmpCMFRXYxAB",
    patientName: "leviosa12345",
    rating: 5,
    text: "Great doctor !",
    date: "منذ أسبوعين",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJziiCdjkTy7lRojE2wFVjCwKEATJcjD7kV-601Mj7jKq5Uhg=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21oU1IybzRWRFZmUkhGUVVITndNazEyV1V0TGVtYxAB",
    patientName: "YASER A.",
    rating: 4,
    text: "موقع العيادة جيد والعيادة نظيفة وبها طاقم عمل كبير. الدكتور شرح المشكلة بوضوح وطريقة علاجها.",
    date: "منذ أسبوعين",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjV1vk_XqMBA0iwkS8wRbyCZbYceqM18XB0hJuEWxOnPyY6Epmd-WA=s1920-c-rp-mo-ba5-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VKYkRnS3JoNVlXUGFREAE",
    patientName: "Rika",
    rating: 5,
    text: "العياده نظيفه جداا و مجهزة علي اعلي مستوي .. الدكتور شاطر جدااااا و امين و أسعاره مناسبه جدااااااا ..",
    date: "منذ 15 يوم",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUiPKyL42S3_O6KxEee4W0aUDqj-RraygQJWvo49u4iXfOLCUjdDw=s1920-c-rp-mo-ba3-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VNbnp2T2F0aXRIMkhREAE",
    patientName: "Mariam Raed",
    rating: 5,
    text: "a very professional doctor, he’s so fast & never felt pain while he’s working ever",
    date: "منذ 18 يوم",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLAvCpU5xIfE5r3eTzbG0ZQVZomULm_20xk427x7KKXg_mi=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VNMnM2T0tvczhqVmVREAE",
    patientName: "sahar ibrahim",
    rating: 5,
    text: "دكتور ممتاز وشاطر وامين",
    date: "منذ 20 يوم",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJssZgtzsZx2WDgPpLsIA6DQSPmYDWQ5dioa9eEuUJ9HQl-Zw=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VOcTNuSXo0MFpDLWhRRRAB",
    patientName: "Nesreen Nabeel",
    rating: 5,
    text: "الدكتور اكتر من ممتاز وكل حاجة فى العيادة فى منتهى الدقة والانضباط .",
    date: "منذ 3 أسابيع",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIm5Y0IHQjEY2-T9M1h3rlDA3vDtdI8a_ybPm9EMCft_fYq=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VNdVp2dXFBenZHMk9nEAE",
    patientName: "Dina Tarek",
    rating: 5,
    text: "العياده نظيفه جدا وشيك ومضبوطين في المواعيد والدكتور شاطر جدا ومطمئن بالنسبه للألم وبالنسبه للسعر مناسب تماما",
    date: "منذ 3 أسابيع",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLb5NfxwDYp_4XRLY03Ybr9ETjm4tXplQ0HoP5JqQclJFTx5Q=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VQX1dpNWVlZ1AzZmxBRRAB",
    patientName: "Nada Amr",
    rating: 5,
    text: "الدكتور صبور و مستمع جيد و حقيقى فوق الممتاز و فاهم شغله كويس شكراً حقيقى 🌸🌸🌸🌸",
    date: "منذ 25 يوم",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLpVlAyVpSUL8m4X5heTbP5eK2lk7FxkLT-IAczTH2qd5NDZw=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnTUNJMjlULXNRRRAB",
    patientName: "Dina Kamal",
    rating: 5,
    text: "بصراحه دكتور شاطر جدااا وفاهم شغله كويس اووووي وخلعلي ضرسي في ثواني ومحستش بألم نهائي. انا بشكرك جدااا ي دكتور ودايماااا يارب من نجاح لنجاح",
    date: "منذ شهر",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXDYmYeZ4UVmcCSO7AdukG9ImxvO0bpsti5eg0bO0pIRL3XkQboUQ=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnTUNvNTZPTEl3EAE",
    patientName: "Ahmed Hussien",
    rating: 5,
    text: "Very Good doctor, fast, clean in his work. Clean tools and good assisstants.",
    date: "منذ شهر",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJDEcyGQpxBcVffZfNndXchqdITirBZhk_u3MWyizljQ2exbg=s1920-c-rp-mo-ba3-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnTUNRcWRudktREAE",
    patientName: "Karim Ali",
    rating: 5,
    text: "دكتور ممتاز",
    date: "منذ شهر",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXQY9982KMTObUgGRH1rgc7nXATC3CvX-hJBnmbuJ6P8VZfHNU=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnTUNROHMzT3p3RRAB",
    patientName: "Nervana Sallam",
    rating: 5,
    text: "دكتور شاطر واكتر من ممتاز مواعيد مظبوطه واحترافيه فى الشغل استقبال ومعامله ممتازين",
    date: "منذ شهر و 5 أيام",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKshMEZmuUGek7CKTpchw8vFiElRJGZGM6YRVbaTLSm5Vkp7g=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnTURnMUktamlnRRAB",
    patientName: "Hala Bakry",
    rating: 5,
    text: "Professional Doctor Mohamed Farag is a brilliant dentist. I recommend.",
    date: "منذ شهر وأسبوع",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKRqNt5aaEmiFv505G0b2T82hmwfOLRo8RlWJFIWX76zlabHw=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnTURnN2JyVWdnRRAB",
    patientName: "Hesham Helmy",
    rating: 5,
    text: "I have to admit that I used to avoid dentists, but not any more following the pleasant experience at Dr Mohamed Farag Dental Clinic. Best quality of materials used.",
    date: "منذ شهر ونصف",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocK3TcoZbEgxcE_BT3Q5cGlV6-bXxBiroyOt2duPuFXrryFdjw=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURmckxURHp3RRAB",
    patientName: "Nouran Omar El Said",
    rating: 5,
    text: "The doctor is professional and all my previous experiences were great. The clinical is clean and all supporting staff are very helpful.",
    date: "منذ شهرين",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocIoBmks6I7upG4d1nJD1qeTlTi9l4wnlu-t7bGUqDIIyeJywg=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNQcFlpVlhBEAE",
    patientName: "Nery Abdeen",
    rating: 5,
    text: "دكتور اكتر من ممتاز في كل حاجة ❤️",
    date: "منذ شهرين",
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXQPKxU35wfgsmIU4b1uANaSK4TCOfK8i6rB1a43171mu6SoZD_=s1920-c-rp-mo-br100",
    verified: true
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNQeWVUbGFREAE",
    patientName: "Sara Osama",
    rating: 5,
    text: "احب انقل تجربتي مع دكتور محمد فرج انا عملت معاه زراعه درس. الدكتور ممتاز و عارف شغله كويس جدا و العياده نظيفه جدا",
    date: "منذ شهرين ونصف",
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLZSDIkO3CuRrN4DEtzKP5ocOLAypVil6m-j-iHbGh3--8a4A=s1920-c-rp-mo-br100",
    verified: true
  }
];