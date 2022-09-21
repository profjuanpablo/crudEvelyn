import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allFruits:Fruits[] = [];
  constructor(private fruitService:FruitsService) { }

  deleteModal:any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );

    this.get();
  }

  get(){
    this.fruitService.get()
    .subscribe(( data ) =>{
      this.allFruits = data;
    })
  }

  openDeletModal(id:number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.fruitService.delete(this.idToDelete)
    .subscribe((data) =>{
      this.allFruits = this.allFruits.filter(_ => _.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }
}
