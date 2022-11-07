import { prisma } from 'lib/prisma'

async function getCategories() {
  return await prisma.mTagCategory.findMany({})
}

export default async function Categories(): Promise<any> {
  const categories: Category[] = await getCategories()

  const categoryList = categories.map((category: Category) => (
    <span
      key={category.id}
      className="inline-block border-2 border-solid border-main bg-accent px-2 py-1 text-xs text-white"
    >
      {replaceOverWordCount(category.name)}
    </span>
  ))

  return <div className="mb-[24px] flex gap-2 overflow-scroll whitespace-nowrap">{categoryList}</div>
}

function replaceOverWordCount(text: string): string {
  const wordCount: number = text.length
  const wordLimit: number = 16

  if (wordCount >= wordLimit) {
    let targetWord = text.slice(wordLimit, wordCount + 1)
    return text.replace(targetWord, '...')
  }

  return text
}
