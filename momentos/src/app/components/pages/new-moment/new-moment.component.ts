import { Component, OnInit } from '@angular/core';
import { Momento } from 'src/app/Momento';
import { MomentoService } from 'src/app/services/momento.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar';

  constructor(private momentoService: MomentoService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async createHandler(momento: Momento) {
    const formData = new FormData();
    formData.append('title', momento.title);
    formData.append('description', momento.description);

    if (momento.image) {
      formData.append('image', momento.image);
    }

    await this.momentoService.createMomento(formData).subscribe();
  }
}
