import * as core from '@angular/core';
import { AboutService } from 'src/services/about.service';

@core.Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements core.OnInit {
  info:any;
  comments:any[];
commentaire={date:new Date(),message:""};
  
//ca c'est l'injetion des service 

  constructor(private aboutService: AboutService) {
      this.info=this.aboutService.getInfo();
      this.comments=this.aboutService.getAllComments();
   }

  ngOnInit(): void {
  }
  onAddCommentaire(c: { date: Date; message: string; }){
    this.aboutService.addComments(c);
  
    this.commentaire.message="";
    this.comments=this.aboutService.getAllComments();

  }


}
