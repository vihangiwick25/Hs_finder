import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true
})

export class Hsfinder{
    @Prop()
    hsCode: string;

    @Prop()
    hsChapterNumber: string;

    @Prop()
    type:string;

    @Prop()
    section:string;

    @Prop()
    chapter:string

    @Prop()
    hsChapterRoman:string

    @Prop()
    description:string

    @Prop()
    moreInfo:string

    @Prop()
    imposedBill:string

    @Prop()
    source:string

    @Prop()
    reference:string

    @Prop()
    lastUpdated:string

    @Prop()
    keywords:string
    
}

export const HsfinderSchema = SchemaFactory.createForClass(Hsfinder)

