/**
 * 資料結構驗證腳本
 * 用於找出 perfumeFormulas.js 中結構不正確的香水資料
 */
import { PERFUME_FORMULAS } from "./src/data/perfumeFormulas.js";

const issues = [];

PERFUME_FORMULAS.forEach((p, i) => {
  const problems = [];

  if (!p.perfumer) problems.push("missing_perfumer");
  if (!p.ingredients) problems.push("missing_ingredients");
  if (!p.gender) problems.push("missing_gender");

  // topNotes 應是字串陣列，不是物件陣列
  if (
    Array.isArray(p.topNotes) &&
    p.topNotes.length > 0 &&
    typeof p.topNotes[0] === "object"
  ) {
    problems.push("topNotes_is_objects");
  }
  if (
    Array.isArray(p.heartNotes) &&
    p.heartNotes.length > 0 &&
    typeof p.heartNotes[0] === "object"
  ) {
    problems.push("heartNotes_is_objects");
  }
  if (
    Array.isArray(p.baseNotes) &&
    p.baseNotes.length > 0 &&
    typeof p.baseNotes[0] === "object"
  ) {
    problems.push("baseNotes_is_objects");
  }

  if (problems.length > 0) {
    issues.push({ index: i, id: p.id, name: p.name, problems });
  }
});

console.log("Total perfumes:", PERFUME_FORMULAS.length);
console.log("Issues found:", issues.length);
issues.forEach((x) => console.log(JSON.stringify(x)));
