import { Injectable, NotFoundException } from '@nestjs/common';
import { Hsfinder } from './schema/hsfinder.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Injectable()
export class HsfinderService {
    [x: string]: any;
    constructor(
        @InjectModel(Hsfinder.name)
        private hsfinderModel: mongoose.Model<Hsfinder>
    ){}
    
    async findAll():Promise<Hsfinder[]>{
        const hsfinder= await this.hsfinderModel.find() 
        return hsfinder
    }

    async create(Hsfinder:Hsfinder):Promise<Hsfinder>{
        const res = await this.hsfinderModel.create(Hsfinder)
        return res

    }

    async findByID(id:string):Promise<Hsfinder>{
        const Hsfinder= await this.hsfinderModel.findById(id)
        return Hsfinder;

    }

    
        
    
        
        



    }
