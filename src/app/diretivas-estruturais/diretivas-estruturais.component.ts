import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Jetosbaldo", idade: 785},
    {nome: "Jacobson", idade: 12},
    {nome: "Gladsknight Silva", idade: 697},
  ];

  public nome: string = 'jar jar binks';
  
  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      } 
    },2000)
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    } 
  }

  public onClickAddList(){
    this.list.push({nome: "Ned", idade: 49});
  }
  
  public onClickEventList(event: number){
    
    this.list.splice(event,1);
  }
}
