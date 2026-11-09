import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

export const name = 'pmnote-skill'
export const inject = ['skills']
const skillUrl = new URL('./skills/pmnote/SKILL.md', import.meta.url)
const resourceBase = { kind: 'directory', path: fileURLToPath(new URL('./skills/pmnote/', import.meta.url)) }
const candidate = {
  name: 'pmnote',
  description: '查阅 PMNote 公开资料，分析游戏项目管理、游戏 PM 职业发展和 AI 工具。',
  invocation: { modelInvocable: true, userInvocable: true },
  provider: 'pmnote', source: 'bundled', resourceBase, rank: 600, locator: skillUrl,
}
export function apply(ctx) {
  ctx.skills.registerProvider(() => ({
    name: 'pmnote',
    list: async () => [candidate],
    get: async () => {
      const text = await readFile(skillUrl, 'utf8')
      const content = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
      const { rank, locator, ...definition } = candidate
      return { ...definition, content }
    },
  }))
}
