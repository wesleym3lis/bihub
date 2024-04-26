import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SearchService {
    private baseUrl = process.env.BIBLE_API;

    async randomVerse(version: string): Promise<any> {
        const url = `${this.baseUrl}/verses/${version}/random`
        try {
          const response = await axios.get(url);
          const responseData = response.data;

          const filteredData = responseData.map(item => ({
            name: item.name,
            chapter: item.chapter,
            number: item.number,
            text: item.text,
          }));

          return responseData;
        } catch (error) {
          // Handle error
          throw new Error('Failed to fetch data from external API');
        }
      }
}
