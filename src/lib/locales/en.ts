import type { Dictionary } from "@/types";

export const getEnglishDictionary = (): Dictionary => ({
  elements: {
    H: { name: "Hydrogen" },
    He: { name: "Helium" },
    Li: { name: "Lithium" },
    Be: { name: "Beryllium" },
    Na: { name: "Natrium" },
    K: { name: "Potassium" },
  },

  elementCategories: {
    OTHER_NONMETALS: "Other nonmetals",
    NOBLE_GASSES: "Noble gasses",
    ALKALI_METALS: "Alkali metals",
    ALKALINE_EARTH_METALS: "Alkaline earth metals",
    POST_TRANSITION_METALS: "Post-transition metals",
    METTALOIDS: "Metalloids",
    ACTINIDES: "Actinides",
    LANTHANIDES: "Lanthanides",
    TRANSITION_METALS: "Transition metals",
  },

  tableFounder: {
    name: "Dmitri Ivanovich Mendeleev",
    birthDate: new Date("1834-02-09"),
    deathDate: new Date("1907-02-02"),
    history: {
      text1:
        "A brilliant Russian scientist, professor, member of the Academy of Sciences, owner of encyclopedic knowledge in chemistry, physics, geography, and economics. Scientists discovered and formulated one of the fundamental laws of nature, the periodic law of chemical elements. Mendeleev worked on his system from 1869 to 1900.",
      text2:
        "It is worth mentioning that when creating his system, Mendeleev left some cells of the table empty and anticipated the discovery of such elements as gallium, scandium, germanium, polonium, astatine, technetium, rhenium and francium. The chemist calculated their atomic masses and indicated their basic properties, but the elements themselves were discovered later.",
      text3: "The scientist died in 1907, at the age of 72.",
    },
  },
});
