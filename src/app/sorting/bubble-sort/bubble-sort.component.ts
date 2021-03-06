import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  @ViewChild('canvas',{static:true}) canvas: ElementRef<HTMLCanvasElement>;
  context:CanvasRenderingContext2D;
  heightValues:number[] = [];
  states: number[] = [];
  n = 15;
  i = 0;
  j = 0;
  animation = null;
  stopped:boolean;
  width;
  height;

  constructor() { 
  } 

  ngOnInit() {
    this.width = this.canvas.nativeElement.width = 1000;
    this.height = this.canvas.nativeElement.height = 500;
    this.initLines();
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.transform(1, 0, 0, -1, 0, this.canvas.nativeElement.height)
    this.drawLines();
  }

  draw(){
    let a = this.heightValues[this.j];
    let b = this.heightValues[this.j+1];
    if (a > b){
      this.states[this.j] = 1
      this.states[this.j+1] = 2
      this.swap(this.j,this.j+1);
      this.clear();
      this.drawLines();
      this.states[this.j] = 0
      this.states[this.j+1] = 0
    }
    if(this.i < this.heightValues.length){
      this.j += 1;
      if (this.j >= this.heightValues.length -1 -this.i){
        this.j = 0;
        this.i += 1;
      }
    }else{
      this.stop();
    }
    if(!this.stopped){
      this.animation = requestAnimationFrame(this.draw.bind(this))
    }    
  }

  initLines(){
    for (let i = 0; i < this.n; i++){
      this.heightValues.push(Math.random()*this.height);
      this.states[i] = 0;
    }
  }

  randomize(){
    this.heightValues = []
    if(this.n > 100){this.n = 100;}
    this.initLines();
    this.clear();
    this.drawLines();
  }

  clear(){
    this.context.clearRect(0,0,this.width,this.height);
  }

  drawLines(){
    let margin = 2;
    let w = this.width-10;
    let h = this.height;
    let lw = (w / this.n) - margin; 
    let temp = this.n;
    
    for (let i = 0; i < this.heightValues.length; i++){
      let x = (lw * i) + (margin * i);
      if(this.states[i] == 0){
        this.context.fillStyle = "rgba(220, 160, 255, 0.8)"
      }else if(this.states[i] == 2){
        this.context.fillStyle = "red"
      }else{
        this.context.fillStyle = "purple"
      }
      
      this.context.strokeRect(x, 0, lw, this.heightValues[i]);
      this.context.fillRect(x, 0, lw, this.heightValues[i]);
    }
    
  }
  
  swap(a, b){
    let temp = this.heightValues[a];
    this.heightValues[a] = this.heightValues[b];
    this.heightValues[b] = temp;
  }

  start(){
    this.stopped = false;
    this.animation = requestAnimationFrame(this.draw.bind(this))
  }
  
  stop() {
    if (this.animation) {
      this.j = 0;
      this.i = 0;
      this.stopped = true;
      window.cancelAnimationFrame(this.animation);
      this.animation = null;
    }
  }

}
