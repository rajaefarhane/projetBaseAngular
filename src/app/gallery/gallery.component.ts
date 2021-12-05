import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
pagePhoto:any;
p:number=1;
size: number=10;
  totalPages!: number;
  motCle:string="";
pages:Array<number>=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(data:any){
    //console.log(data);
    this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="+data.motcle+"&per_page="+this.size+"&page="+this.p)
    .pipe(map(resp=>resp))
     .subscribe((data: any)=>{
       console.log(data);
 this.pagePhoto=data;
 this.totalPages=data.totalHits/this.size;
 if(data.totalHits % this.size !=0) ++this.totalPages;
 this.pages=new Array(this.totalPages);
     })
  }


}
