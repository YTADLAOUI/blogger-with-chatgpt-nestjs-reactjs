import { Injectable } from '@nestjs/common';
import { Article } from './models/article.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ArticlesService {

  constructor(@InjectModel(Article.name) private articleModel:Model<Article> ) {}
  async save(body:any){
    const createdArticle= new this.articleModel(body);
    await createdArticle.save();
    return createdArticle;
  }
  async findAll(){
    return await this.articleModel.find().populate('author');
  }
  async findOne(option){
    return await this.articleModel.findOne(option);
  }
   async update(id,options){
    return await this.articleModel.updateOne({ _id: id },options);
   }
    // async delete(id: string){
    //   return await this.articleModel.deleteOne({ _id: id });
    // }

}
