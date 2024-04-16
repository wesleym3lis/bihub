import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SearchService {
    private baseUrl = process.env.BIBLE_API;

    async randomVerse(version: string): Promise<any> {
        const url = `${this.baseUrl}/verses/${version}/random`
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          // Handle error
          throw new Error('Failed to fetch data from external API');
        }
      }
}
