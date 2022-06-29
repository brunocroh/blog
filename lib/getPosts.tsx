import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

const usePosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = await fs.readdir(postsDirectory)

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, "utf8")
      const document = matter(fileContents)

      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        date: document.data.date,
        markdown: document.content,
      }
    })
  )
}

export default usePosts
