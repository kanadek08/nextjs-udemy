import path from 'path';
import grayMatter from 'gray-matter';
import fs from 'fs';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = grayMatter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getAllPostIds () {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = grayMatter(fileContents);

  const blogContents = await remark()
  .use(html)
  .process(matterResult.content);

  const blogContentsHTML = blogContents.toString();

  return {
    id,
    blogContentsHTML,
    ...matterResult.data,
  }





  return {
    id,
    ...matterResult.data,
  };
}