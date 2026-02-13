/**
 * Translation Helper Script
 * Processes Vue chapter files to add bilingual support
 * Uses isZh ternaries for inline text and v-if/v-else for code blocks
 */
import fs from 'fs'
import path from 'path'

// Chinese-to-English translation dictionary for common terms in all chapters
const commonTranslations = {
  // Trend/Pattern analysis
  '趨勢分析：': 'Trend Analysis:',
  '關鍵：': 'Key Insight:',
  '關鍵洞察：': 'Key Insight:',
  '支鏈效應：': 'Branching Effect:',
  '共軛效應：': 'Conjugation Effect:',
  '萜烯規律：': 'Terpene Pattern:',
  '氧化態規律：': 'Oxidation State Pattern:',
  '酯化規律：': 'Esterification Pattern:',
  '含氮規律：': 'Nitrogen-Containing Pattern:',
  '硫化物規律：': 'Sulfide Pattern:',
  '環張力規律：': 'Ring Strain Pattern:',
  '黃金環徑：': 'Golden Ring Size:',
  '手性效應：': 'Chirality Effect:',
  '對稱性悖論：': 'Symmetry Paradox:',
  '構象熵效應：': 'Conformational Entropy Effect:',
  '爭議狀態：': 'Controversy Status:',
  '規律：': 'Pattern:',
  '稀釋悖論：': 'Dilution Paradox:',
  '文化vs基因：': 'Culture vs Genetics:',
  'Log P甜蜜點：': 'Log P Sweet Spot:',
  
  // Section labels
  '總結': 'Summary',
  
  // Common table content
  '前調': 'Top Note',
  '中調': 'Middle Note',
  '基調': 'Base Note',
  '弱': 'Weak',
  '強': 'Strong',
  '極強': 'Very Strong',
  '中': 'Medium',
  '高': 'High',
  '低': 'Low',
  '極低': 'Extremely Low',
  '無': 'None',
  '基準': 'Baseline',
}

// Process a single paragraph <p> tag with Chinese content
function processParagraph(line) {
  // Skip already translated lines (contain isZh or t())
  if (line.includes('isZh') || line.includes("t('")) return line
  
  // Match <p> tags with Chinese content
  const pMatch = line.match(/^(\s*)<p>(.*)<\/p>$/)
  if (!pMatch) return line
  
  const indent = pMatch[1]
  const content = pMatch[2]
  
  // Check if content has Chinese characters
  if (!/[\u4e00-\u9fff]/.test(content)) return line
  
  // Don't process if it has complex HTML (nested tags beyond simple <strong>, <span>)
  // Just mark it for manual review
  return line // Keep as-is for now, too complex for auto-translation
}

// Process heading tags
function processHeading(line) {
  if (line.includes('isZh') || line.includes("t('")) return line
  
  const hMatch = line.match(/^(\s*)<h4>(.*)<\/h4>$/)
  if (!hMatch) return line
  
  const indent = hMatch[1]
  const content = hMatch[2]
  
  if (!/[\u4e00-\u9fff]/.test(content)) return line
  
  // For h4 headings with emojis, wrap in isZh
  return line // Keep for manual processing
}

// Main processing
async function main() {
  const viewsDir = path.join(process.cwd(), 'src', 'views')
  const files = fs.readdirSync(viewsDir).filter(f => /Chapter[1-8]View\.vue$/.test(f))
  
  console.log('Files to process:', files)
  
  for (const file of files) {
    const filePath = path.join(viewsDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Count Chinese characters in template section
    const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/)
    if (!templateMatch) continue
    
    const template = templateMatch[1]
    const chineseChars = (template.match(/[\u4e00-\u9fff]/g) || []).length
    const alreadyTranslated = (template.match(/isZh/g) || []).length
    const tCalls = (template.match(/t\('/g) || []).length
    
    console.log(`\n${file}:`)
    console.log(`  Chinese characters in template: ${chineseChars}`)
    console.log(`  isZh references: ${alreadyTranslated}`)
    console.log(`  t() calls: ${tCalls}`)
    console.log(`  Estimated untranslated strings: ${Math.round(chineseChars / 5)}`)
  }
}

main().catch(console.error)
