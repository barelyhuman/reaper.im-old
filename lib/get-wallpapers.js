import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import serializeDate from 'lib/serialize-date';

export default async () => {
  try {
    const postRoot = path.join(process.cwd(), 'public', 'wallpapers');
    const files = (await fs.readdir(postRoot)).map((item) => ({ name: item }));
    return files;
  } catch (err) {
    throw err;
  }
};
