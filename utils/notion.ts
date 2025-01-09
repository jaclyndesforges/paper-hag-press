import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

type Post = {
    properties: {
      Title?: {
        title: { text: { content: string } }[];
      };
      Content?: {
        rich_text: { text: { content: string } }[];
      };
      PublishedDate?: {
        date: { start: string };
      };
    };
  };
  
// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const fetchDatabase = async (databaseId: string): Promise<Post[]> => {
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
      });
  
      // Filter and cast items to only include those with 'properties'
      return response.results.filter(
        (item): item is PageObjectResponse => 'properties' in item
      );
    } catch (error) {
      console.error('Error fetching Notion database:', error);
      return [];
    }
  };
  
