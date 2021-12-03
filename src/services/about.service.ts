import { Injectable } from '@angular/core';

@Injectable()
export class AboutService{
 
    info={
        nom:'rajae',
        email:'rajae19beddi@gmail.com',
        telephone:'651095501'
  }
comments=[
        {date:new Date(), message:"bonjour"},
        {date:new Date(), message:"bonsoir"},
        {date:new Date(), message:"bonjour bonsoir"},
];
  addComments(c: { date: Date; message: string; }){
    c.date=new Date();
      this.comments.push(c);

  }
  getAllComments(){
      return this.comments;
  }
  getInfo(){
      return this.info;
  }
}