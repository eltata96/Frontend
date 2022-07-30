import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectoss:Proyectos[]=[];
  public editProyectos: Proyectos | undefined;
  public deleteProyectos: Proyectos | undefined;

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.getProyectoss();
  }

  public getProyectoss():void{
    this.proyectosService.getProyectos().subscribe({next:(Response: Proyectos[]) =>{
      this.proyectoss=Response;
    },
  error:(error:HttpErrorResponse)=>{
    alert(error.message);
  }})
  }
  public onOpenModal(mode:String, proyectos?: Proyectos):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addProyectosModal');
    }else if(mode==='delete'){
      this.deleteProyectos=proyectos;
      button.setAttribute('data-target', '#deleteProyectosModal');
    }else if(mode==='edit'){
      this.editProyectos=proyectos;
      button.setAttribute('data-target', '#editProyectosModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddProyectos(addForm: NgForm){
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.addProyectos(addForm.value).subscribe({
      next: (response:Proyectos)=>{
        console.log(response);
        this.getProyectoss();
        addForm.reset();
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateProyectos(proyectos: Proyectos){
    this.editProyectos=proyectos;
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.updateProyectos(proyectos).subscribe({
      next: (response:Proyectos)=>{
        console.log(response);
        this.getProyectoss();
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteProyectos(idPro: number):void{
    this.proyectosService.deleteProyectos(idPro).subscribe({
      next: (response:void)=>{
        console.log(response);
        this.getProyectoss();
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}