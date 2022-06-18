import { Education } from "src/app/shared/interfaces/education.interface";
import { HardSkill } from "src/app/shared/interfaces/hard-skills.interface";
import { Info } from "src/app/shared/interfaces/info.interface";
import { WorkExperience } from "src/app/shared/interfaces/work-experience.interface";

export const education: Education[] = [
  {
    name: 'Liceum Ogólnokształcące nr XLIV',
    address: 'Wacława 22/24, 93-118 Łódź',
    startDate: new Date(2018, 9, 1),
    endDate: new Date(2021, 6, 30),
    description:
      'Ukończona matura z matematyką oraz j. angielskim rozszerzonym',
  },
  {
    name: 'Państwowa Szkoła Muzyczna I stopnia im. Aleksandra Tansmana',
    address: 'Szpitalna 5/7, 90-001 Łódź',
    startDate: new Date(2011, 9, 1),
    endDate: new Date(2013, 6, 30),
    description: 'Nauka gry na waltorni',
  },
  {
    name: 'Zespół Szkół Muzycznych im. S. Moniuszki I i II stopnia',
    address: 'Rojna 20, 91-140 Łódź',
    startDate: new Date(2014, 9, 1),
    endDate: 'now',
    description:
      'Nauka gry na waltorni, fortepianie/pianinie. Gra w orkiestrze, zespołach, duetach oraz śpiew w chórze.',
  },
];

export const workExperience: WorkExperience[] = [
  {
    name: 'Fundacja "DOBROdzieje się"',
    address: 'Gersona 1/22, 93-259 Łódź',
    startDate: new Date(2021, 10, 4),
    endDate: new Date(2022, 2, 4),
    position: 'Grafik Komputerowy, Menadżer fundacji',
    usedTech: [
      'Adobe Photoshop',
      'Canva',
      'CorelDraw',
      'Microsoft Word',
      'Microsoft Exel',
    ],
    description:
      'Tworzenie kartek i projektów graficznych. Zarządzanie magazynem, przyjmowanie ludzi i kierowanie ludźmi w wielu placówkach. Współprowadzenie akcji "List do św. Mikołaja" (+ewidencjonowanie paczek oraz spis)',
  },
];

export const softSkills: string[]  = [
  'Łatwo nawiązuje kontakty interpersonalne',
  'Potrafię pracować w grupie jak również sam',
  'Jestem otwarty na nowe propozycje',
  'Jestem kreatywny i błyskotliwy',
  'Szybko i chętnie ucze się nowych rzeczy',
  'Lubię działać według planu lecz spontaniczność nie sprawia mi problemu',
  'Jestem lubiany i dobrze postrzegany przez innych',
  'Cenię sobie szczerość i otwartość',
  'Potrafię słuchać ze zrozumieniem',
];

export const hardSkills: HardSkill[] = [
  {
    label: 'Angielski B2',
    value: 100,
  },
  {
    label: 'Polski (ojczysty)',
    value: 100,
  },
  {
    label: 'Microsoft Word',
    value: 95,
  },
  {
    label: 'Microsoft Exel',
    value: 80,
  },
  {
    label: 'Microsoft Powerpoint',
    value: 90,
  },
  {
    label: 'Adobe Photoshop',
    value: 60,
  },
];

export const hobbies: string[] = [
  'Kosmos i zagadnienia związane z wrzechświatem',
  'Działanie techniczne elektroniki i maszyn',
  'Tworzenie muzyki i granie na przeróżnych instrumentach',
  'Pojazdy powietrzne - samoloty i helikoptery',
  'Gry planszowe i strategiczne',
  'Gry komputerowe i symulatory',
];

export const info: Info = {
  firstName: 'Karol',
  secondName: 'Kaszuba-Gałka',
  email: 'karolkaszuba117@gmail.com',
  address: 'Rydla 7A, m45 93-203 Łódź',
  phoneNumber: '+48 794 300 360',
};

export const clause = 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).';
