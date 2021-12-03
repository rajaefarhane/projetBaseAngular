import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info={
        nom:'rajae',
        email:'rajae19beddiàgmail.com',
        telephone:'651095501'
  }
comments=[
        {date:new Date(), message:"bonjour"},
        {date:new Date(), message:"bonsoir"},
        {date:new Date(), message:"bonjour bonsoir"},
];
commentaire={date:new Date(),message:""};
  constructor() { }

  ngOnInit(): void {
  }
  onAddCommentaire(c: { date: Date; message: string; }){
    c.date=new Date();

    this.comments.push(c);
    this.commentaire.message="";

  }

}
