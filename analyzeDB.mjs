import { PERFUME_FORMULAS } from './src/data/perfumeFormulas.js';

const ids = new Set();
const dupes = [];
const brands = {};
const families = {};

PERFUME_FORMULAS.forEach(p => {
  if (ids.has(p.id)) {
    dupes.push(p.id);
  }
  ids.add(p.id);
  brands[p.brand] = (brands[p.brand] || 0) + 1;
  families[p.family] = (families[p.family] || 0) + 1;
});

console.log('='.repeat(60));
console.log('資料庫狀態報告');
console.log('='.repeat(60));
console.log(`當前條目: ${PERFUME_FORMULAS.length}`);
console.log(`唯一ID: ${ids.size}`);
console.log(`重複: ${dupes.length > 0 ? dupes.join(', ') : '✓ 無重複'}`);
console.log(`需要添加: ${200 - PERFUME_FORMULAS.length} 個香水\n`);

console.log('品牌分布 (前10):');
Object.entries(brands)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([b, c]) => console.log(`  ${b.padEnd(15)} ${c} 個`));

console.log('\n香調分布:');
Object.entries(families)
  .sort((a, b) => b[1] - a[1])
  .forEach(([f, c]) => console.log(`  ${f.padEnd(15)} ${c} 個`));

// 導出所有現有ID供參考
console.log('\n所有現有ID (前30個):');
Array.from(ids).slice(0, 30).forEach((id, i) => {
  if (i % 3 === 0) process.stdout.write('\n  ');
  process.stdout.write(id.padEnd(30));
});
console.log('\n');
