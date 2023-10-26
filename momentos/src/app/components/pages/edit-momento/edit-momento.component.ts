import { Component, OnInit } from '@angular/core';
import { MomentoService } from 'src/app/services/momento.service';
import { Momento } from 'src/app/Momento';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-momento',
  templateUrl: './edit-momento.component.html',
  styleUrls: ['./edit-momento.component.css'],
})
export class EditMomentoComponent implements OnInit {
  moment!: Momento;
  btnText: string = 'Editar';
  constructor(
    private momentoService: MomentoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentoService.getMomento(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  async editHandler(momentData: Momento) {
    const id = this.moment.id;

    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentoService.updateMoment(id!, formData).subscribe();

    this.messageService.add(`Momento ${id} atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
