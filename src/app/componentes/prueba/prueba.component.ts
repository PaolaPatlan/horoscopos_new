import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  likes1:number=54;
  likes2:number=523;
  likes3:number=42;
  likes4:number=54;
  likes5:number=523;
  likes6:number=42;
  likes7:number=54;
  likes8:number=700;
  likes9:number=42;
  likes10:number=54;
  likes11:number=523;
  likes12:number=42;

  comentarios1:number=10;
  comentarios2:number=154;

  constructor() {
  }

  ngOnInit(): void {
  }

  subirLikes(numero:number){
    switch (numero) {
      case 1:
        this.likes1++;
        break;
      case 2:
        this.likes2++;
        break;
      case 3:
        this.likes3++;
        break;
      case 4:
          this.likes4++;
          break;
      case 5:
            this.likes5++;
            break;
      case 6:
              this.likes6++;
              break;
       case 7:
                this.likes7++;
                break;
       case 8:
                  this.likes8++;
                  break;
        case 9:
                    this.likes9++;
                    break;
        case 10:
                      this.likes10++;
                      break;
        case 11:
                        this.likes11++;
                        break;
        case 12:
                          this.likes12++;
                          break;
      default:
        break;
    }
  }

  dejarComentario(numero:number){
    Swal.fire({
      title: 'Escribe tu comentario',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Publicar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu comentario se ha publicado',
          showConfirmButton: false,
          timer: 1500
        })

        switch (numero) {
          case 1:
            this.comentarios1++;
            break;
          case 2:
            this.comentarios2++;
            break;
          default:
            break;
        }

      }
    })
  }

}
