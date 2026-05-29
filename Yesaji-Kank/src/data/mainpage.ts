import { card, Extrainfo, feedback, history, moreInfo, prashansapatr, shivkalin, trust, work ,FooterInfo, cardtext} from "@/types";

export const ExtraInfo:Record<"mr" | "en",Extrainfo[]> = {

    mr:[
        {name: "आमचे कौतुक करायला महाराज ठाम आहेत.",description:" येसाजी कंक (कुतुबशहाचे बक्षीस नाकारताना)",btn1:"सपंर्क  ",btn2:"अधिक माहिती" }
    ],
    en:[
        {name :"The Maharaj is firm to praise us.", description:"Yesaji Kank (While rejecting Qutbash's reward)", btn1:"More Info", btn2:"Contact us"}
    ]
}


export const Trust:Record<"mr"|"en", trust[]> = {
    mr:[{name:"ट्रस्ट विषयी", desc1:"सरनोबत येसाजी कंक ट्रस्ट ही संस्था सामाजिक, सांस्कृतिक, शैक्षणिक आणि ऐतिहासिक वारसा जपण्यासाठी कार्यरत असलेली एक प्रेरणादायी संस्था आहे. स्वराज्याचे शूर सेनानी सरनोबत येसाजी कंक यांच्या पराक्रमातून प्रेरणा घेत समाजासाठी विविध उपक्रम राबविण्याचे कार्य ट्रस्टमार्फत  केले जाते." , desc2:" ट्रस्टचे मुख्य उद्दिष्ट इतिहासाचे जतन, युवकांना प्रेरणा, ग्रामीण  विकास आणि समाजहिताचे कार्य पुढे नेणे हे आहे. महाराष्ट्राच्या  वैभवशाली इतिहासाची ओळख नवीन पिढीपर्यंत पोहोचविण्यासाठी विविध सांस्कृतिक आणि ऐतिहासिक कार्यक्रम आयोजित केले जातात." , btn:"अधिक वाचा"}],
    en:[{name:"About Trust", desc1:"Sarnobat Yesaji Kank Trust is an inspiring organization dedicated to preserving social, cultural, educational, and historical heritage. Drawing inspiration from the valor of Swarajya's brave warrior Sarnobat Yesaji Kank, the trust undertakes various initiatives for the betterment of society.", desc2:"The main objectives of the trust are to preserve history, inspire youth, promote rural development, and advance social welfare. Various cultural and historical programs are organized to introduce the glorious history of Maharashtra to the new generation." , btn:"Read More"}]

}

export const MoreInfo:Record<"mr"|"en", moreInfo[]> = {
    mr:[{desc:"स्वराज्याचेसरनोबत येसाजी कंक यांच्या शौर्य, साहस, शिस्त, आणि विवेकबुद्धी अशा अनेक पैलूंचा. आदर्श ठेवनू जनसेवेचेकार्य हाती घेतलेले महाराष्ट्रातील ऐतिहासिक व सामाजिक वारसा जपणारे ट्रस्ट." , name:" ' सरनोबत येसाजी कंक ट्रस्ट ' .",btn:"अधिक वाचा"}],
    en:[{desc:"Inspired by the bravery, courage, discipline, and wisdom of Swarajya's Chief of Army Yesaji Kank, this trust in Maharashtra serves the people and preserves historical and social heritage.",name:"Sarnobat Yesaji Kank Trust", btn:"Read More "}]

}

export const History:Record<"mr"|"en", history[]> = {
    mr:[{name:"ऐतिहासिक वाडा " , desc:"मराठा काळातील दुर्मिळ ऐतिहासिक वस्तू, वास्तू व स्मारकांचे दस्तऐवजीकरण व जतन करून पुढील पिढीसाठी वारसा सुरक्षित ठेवण्याचे कार्य ट्रस्ट करत आहे."}],
    en:[{name:"Historical Wada" , desc:"The Trust is working to document and preserve rare historical objects, structures, and monuments from the Maratha era, safeguarding the heritage for future generations."}]

}

export const Work:Record<"mr"|"en", work[]> = {
    mr:[{name:"आमची कामे " , desc:"जनतेप्रती कृषी, क्रीडा, सामाजिक आणि सांस्कृतिक विभागांमध्ये केलेलं कार्य" , btn:"सर्व पहा"}],
    en:[{name:"Our Work" , desc:"Work undertaken for the public across the fields of agriculture, sports, social welfare, and culture.)" , btn:"View All"}]

}


export const Shivkalin:Record<"mr"|"en", shivkalin[]> = {
    mr:[{name:"शिवकालीन सग्रंह" , desc:"रणांगणात गाजलेली शिवकालीन शस्त्रे, शिवकालीन चलनातील नाणी, आणि छ. शिवाजी महाराज ते छ. राजाराम महाराज यांचा सहवास लाभलेला भुतोंडे येथील कंक वाडा..!"}],
    en:[{name:"Shivkalin Collection" , desc:" Weapons from Shivaji Maharaj's time that were used in battle, coins from that same era, and the Kank house at Bhutonde, a home visited by every King from Chh. Shivaji Maharaj to Chh.Rajaram Maharaj..!"}]

}
export const Card:Record<"mr"|"en", card[]> = {
    mr:[{name:"शिवकालीन शस्त्रे" , desc:"छत्रपती शासनातील युद्धात तलवार, भाला, धोप, ढाल, दांडपट्टा अशा शस्त्रांचा वापर केला जाई."},
        {name:"शिवराई व होन", desc:"शिवराई व होन ही छत्रपती शिवाजी महाराजांच्या काळात आर्थिक कामासाठी चलनात वापरली जात. "},
        {name:"शिवकालीन पत्र " , desc:"तत्कालीन पत्रांमधून राजव्यवस्था, दैनंदिन कामे, बोलीभाषा या गोष्टी शिकायला मिळतात."}
    ],
    en:[{name:"Shivkalin Armoury" , desc:"During the Chhatrapatis' reign, weapons such as swords, spears, dhas, shields, and dandpatas were used in warfare."},
        {name:"Shivraai and Hon" , desc:" During the era of Chhatrapati Shivaji Maharaj, the Shivrai and Hon were the currencies used for economic transactions."},
        {name:"Shivkalin Patr", desc:"Contemporary letters provide insights into the administrative system, daily routines, and spoken dialects of that period"}
    ]

}

export const Prashansapatr:Record<"mr"|"en", prashansapatr[]> = {
    mr:[{name:"प्रशंसापत्रे"}],
    en:[{name:"Prashansapatr" , }]

}


export const Feedback:Record<"mr"|"en", feedback[]> = {
    mr:[{name:"गणेश पाटील",desc:"येसाजी कंक यांचे कार्य अतिशय प्रेरणादायी आहे. त्यांची निष्ठा आणि शौर्य आजही मार्गदर्शक ठरते. इतिहासात त्यांचे योगदान अत्यंत महत्त्वाचे आहे. अशा महान व्यक्तिमत्त्वाला मनःपूर्वक अभिवादन."},
        {name:"रोहित देशमुख",desc:"येसाजी कंक यांची निष्ठा आणि धैर्य अद्वितीय आहे। त्यांनी स्वराज्यासाठी दिलेले योगदान मोठे आहे। त्यांच्या कार्यामुळे इतिहास उजळला आहे। अशा वीरांना मनःपूर्वक सलाम।"},
       {name:"सोनाली शिंदे", desc:"वाड्याचा परिसर आणि वातावरण खूप शांत आणि सुंदर आहे. इतिहास आणि संस्कृती जवळून अनुभवता आली. शस्त्रे आणि स्मारक पाहताना खूप अभिमान वाटला. एक अविस्मरणीय अनुभव!"}
    ],
    en:[
        {name:"Ganesh Patil", desc:"The work of Yesaji Kank is extremely inspiring. His dedication and bravery still serve as a guide. His contribution to history is immense. A heartfelt tribute to such a great personality."},
        {name:"Rohit Deshmukh", desc:"The loyalty and courage of Yesaji Kank are unparalleled. His contribution to Swarajya is immense. History has been illuminated by his deeds. A sincere salute to such a brave warrior."},
        {name:"Sonali Shinde", desc:"The Wada premises and atmosphere are very peaceful and beautiful. We could experience history and culture up close. Seeing the weapons and memorial filled us with great pride. An unforgettable experience!"}
    ]

}


export const FooterData: Record<"mr" | "en", FooterInfo[]> = {
  mr: [
    {
      trustName: "सरनोबत येसाजी कंक ट्रस्ट",
      homeTitle: "मुख्यपृष्ठ",
      homeLinks: ["स्वराज्य योगदान", "गॅलरी", "देणगी", "संपर्क", "आमची कामे", "शिवकालीन संग्रह"],
      aboutTitle: "आमच्याबद्दल",
      aboutLinks: ["कंक घराणे", "येसाजी कंकांबद्दल", "सरनोबत येसाजी कंक वाडा,भुतोंडे", "सरनोबत येसाजी कंक ट्रस्ट", "आमचा प्रवास", "विश्वस्त मंडळ"],
      contactTitle: "संपर्क",
      email: "info@yesajikanktrust.org",
      phone: "+91 1234567890",
      address: "सरसेनापती कंक वाडा, भुतोंडे ता.भोर जि. पुणे",
      rights: "© 2026 Zonixtec IT Services Private Limited. सर्व हक्क राखीव.",
      tagline: "इतिहास जतन करणे, भावी पिढ्यांना प्रेरणा देणे",
      homeLinksWithUrl: [
        { text: "स्वराज्य योगदान", href: "/swarajya_contribution" },
        { text: "गॅलरी", href: "/gallery" },
        { text: "देणगी", href: "/donation" },
        { text: "संपर्क", href: "/contact" },
        { text: "आमची कामे", href: "/our-work" },
        { text: "शिवकालीन संग्रह", href: "/shivaji-era" },
      ],
      aboutLinksWithUrl: [
        { text: "कंक घराणे", href: "/about/kank-family" },
        { text: "येसाजी कंकांबद्दल", href: "/about/yesaji-kank" },
        { text: "सरनोबत येसाजी कंक वाडा,भुतोंडे", href: "/about/kank-wada" },
        { text: "सरनोबत येसाजी कंक ट्रस्ट", href: "/about" },
        { text: "आमचा प्रवास", href: "/about/our-journey" },
        { text: "विश्वस्त मंडळ", href: "/about/trust" },
      ],
    }
  ],
  en: [
    {
      trustName: "Sarnobat Yesaji Kank Trust",
      homeTitle: "Home",
      homeLinks: ["Swarajya Contribution", "Gallery", "Donations", "Contact", "Our Work", "Historical Collection"],
      aboutTitle: "About Us",
      aboutLinks: ["Kank Family", "About Yesaji Kank", "Yesaji Kank Wada, Bhutonde", "Sarnobat Yesaji Kank Trust", "Our Journey", "Trustees"],
      contactTitle: "Contact",
      email: "info@yesajikanktrust.org",
      phone: "+91 1234567890",
      address: "Sarsenapati Kank Wada, Bhutonde, Tal. Bhor, Dist. Pune",
      rights: "© 2026 Zonixtec IT Services Private Limited. All rights reserved.",
      tagline: "Preserving history, inspiring future generations",
      homeLinksWithUrl: [
        { text: "Swarajya Contribution", href: "/swarajya_contribution" },
        { text: "Gallery", href: "/gallery" },
        { text: "Donations", href: "/donation" },
        { text: "Contact", href: "/contact" },
        { text: "Our Work", href: "/our-work" },
        { text: "Historical Collection", href: "/shivaji-era" },
      ],
      aboutLinksWithUrl: [
        { text: "Kank Family", href: "/about/kank-family" },
        { text: "About Yesaji Kank", href: "/about/yesaji-kank" },
        { text: "Yesaji Kank Wada, Bhutonde", href: "/about/kank-wada" },
        { text: "Sarnobat Yesaji Kank Trust", href: "/about" },
        { text: "Our Journey", href: "/about/our-journey" },
        { text: "Trustees", href: "/about/trust" },
      ],
    }
  ]
};




export const CardText:Record<"mr"|"en", cardtext[]> = {
    mr:[{name:"कृषी", desc:" आधुनिक शेती याचे प्रशिक्षण व मार्गदर्शन"},
        {name:"क्रीडा",desc:"खिलाडूवृत्ती वाढविण्यासाठी क्रीडा स्पर्धांचे आयोजन"},
        {name:"सामाजिक",desc:"जनतेच्या सेवेचे अखंड कार्य"},
        {name:"सांस्कृतिक" , desc:"कला व संस्कृतीचा अनमोल वारसा"}
    ],
    en:[{name:"Agricultural", desc:"Training and Guidance for Modern farming "},
        {name:"Sports", desc:"Organization of sports competitions to build sportsmanship"},
        {name:"Social", desc:"Unceasing service to the public"},
        {name:"Cultural", desc:" An invaluable heritage of art and culture."}
    ]

}


// सरनोबत येसाजी कंक ट्रस्ट.
// (Inspired by the bravery, courage, discipline, and wisdom of Swarajya's Chief of Army Yesaji