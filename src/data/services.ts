export type ServiceItem = {
  id: string;
  title: string;
  price: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    id: "skjeggtrim",
    title: "Skjeggtrim",
    price: "199 kr",
    description: "Skjegg- og mustasjetrim med maskin.",
  },
  {
    id: "herreklipp",
    title: "Herreklipp",
    price: "399 kr",
    description: "Klipp med maskin og saks, uten å gå helt ned til hud.",
  },
  {
    id: "barneklipp",
    title: "Barneklipp",
    price: "299 kr",
    description: "En trygg og hyggelig klipp for barn mellom 6–12 år.",
  },
  {
    id: "skinfade",
    title: "Skin fade",
    price: "450 kr",
    description:
      "En hårklipp der håret på sidene og bak gradvis fades ned til huden, for en clean overgang til lengre hår på toppen.",
  },
  {
    id: "klipp-skjegg",
    title: "Klipp og skjeggtrim",
    price: "499 kr",
    description:
      "Valgfri klipp + profesjonell skjeggtrim. Skreddersydd fade, taper eller klassisk klipp – kombinert med skarp linjering og form av skjegg for et clean og maskulint resultat.",
  },
];
