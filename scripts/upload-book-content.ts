
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';

const DOCS_PATH = path.join(__dirname, '../hackathon-book/docs');
const API_URL = 'http://localhost:3000/api/rag/upload-text';

async function uploadBookContent() {
  try {
    const files = await fs.readdir(DOCS_PATH);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(DOCS_PATH, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        await axios.post(API_URL, {
          filename: file,
          text: content,
        });
        
        console.log(`Uploaded ${file}`);
      }
    }
    console.log('All book content uploaded successfully.');
  } catch (error) {
    console.error('Error uploading book content:', error);
  }
}

uploadBookContent();
