import { Body, Controller, Get, Param, Post,Query } from '@nestjs/common';
import { HsfinderService } from './hsfinder.service';
import { Hsfinder } from './schema/hsfinder.schema';
import { CreateHsfinderDto } from './dto/create-hsfinder.dto';

@Controller('hsfinder')
export class HsfinderController {
    constructor(private hsfinderService : HsfinderService) {}

    @Get()
    async getAllHsfinder():Promise<Hsfinder[]>{
        return this.hsfinderService.findAll();
    }
    @Post()
    async createhsfinder(
        @Body()
        hsfinder: CreateHsfinderDto,
    ):Promise<Hsfinder>{
        return this.hsfinderService.create(hsfinder);
    }

    @Get(':id')
    async getHsfinder(
        @Param("id")
        id:string
    ):Promise<Hsfinder>{
        return this.hsfinderService.findByID(id)

    }   

    
    
    
    
}

