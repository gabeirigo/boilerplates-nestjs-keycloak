import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

import { KeycloakNoAuthentication } from 'src/auth/jwt-keycloak-strategy/no-authentication.decorator';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/requests/create-company.dto';
import { UpdateCompanyDto } from './dto/requests/update-company.dto';

const config = new Configuration({
    basePath: 'http://localhost:4891/v1',
    apiKey: '',
});

const openai = new OpenAIApi(config);
// openai.baseURL = 'http://localhost:4891/v1';

@Controller('v1/company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @KeycloakNoAuthentication()
    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }
    @KeycloakNoAuthentication()
    @Post('/ai')
    async teste(): Promise<any> {
        const response = await openai.createChatCompletion(
            {
                model: 'mistral-7b-openorca.gguf2.Q4_0',
                messages: [
                    {
                        role: 'system',
                        content:
                            'Sempre responda em português do Brasil de forma informal. Busque no google ou bing as informações.',
                    },
                    ,
                    {
                        role: 'user',
                        content: 'Sabe me dizer a data de hoje?',
                    },
                ],
                max_tokens: 4096,
                temperature: 0.3,
                stream: true,
            },
            {},
        );

        const stream = OpenAIStream(response);
        const returnMessage = new StreamingTextResponse(stream);
    }

    @Get()
    findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.companyService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateCompanyDto: UpdateCompanyDto,
    ) {
        return this.companyService.update(+id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.companyService.remove(+id);
    }
}
