import { RadObject } from "./RadObject";

//Represents a single DnD character's bonuses and battle notes.
export interface Character extends RadObject {
  name?: string;
  maxHp?: number;
  currentHp?: number;
  ac?: number
  proeficiencyBonus?: number;
  initiativeBonus?: number;
  strengthBonus?: number;
  dexterityBonus?: number;
  constitutionBonus?: number;
  intelligenceBonus?: number;
  wisdomBonus?: number;
  charismaBonus?: number;
  notes?: string;
}