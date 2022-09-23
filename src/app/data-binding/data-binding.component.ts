import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Lukas";
  public idade: number = 18;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1200px-Flag_of_Bhutan.svg.png";
  public imgTitle: string = "Property Binding";

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

    public alertaInfo(valor: MouseEvent){
      console.log(valor);
    }

    public mouseMoveTeste(valor: MouseEvent){
      
      this.position.x = valor.offsetX;
      this.position.y = valor.offsetY;
    }
}
