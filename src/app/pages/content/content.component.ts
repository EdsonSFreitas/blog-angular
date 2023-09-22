import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  pictureCover:string = "https://res.cloudinary.com/practicaldev/image/fetch/s--7q3tE-xl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/qyix6eyhrnc8x9c44yp2.jpg";
  @Input()
  contentTitle:string = "Titulo da noticia";
  @Input()
  contentDescription:string = "Descricao da noticia no Content";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
