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
});
