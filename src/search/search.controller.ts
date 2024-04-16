import { Controller , Get , Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get('/verses/:version/random')
    async randomVerse(@Param('version') version: string): Promise<any>{
        return this.searchService.randomVerse(version);
    }
}
