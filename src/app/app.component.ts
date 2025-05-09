import { Component, Injector, NO_ERRORS_SCHEMA, OnInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadComponentStrategyService } from '../services/load-component-strategy.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers:[LoadComponentStrategyService,NgTemplateOutlet,CommonModule],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'formBuilder';
  componentS:any;
  componentN:any;
  constructor(private test: LoadComponentStrategyService, private vcr : ViewContainerRef, private injector: Injector){}
  ngOnInit(){
    this.test.executeStrategy(this.vcr,'string',this.injector).then((data)=>{
      console.log(data)
      this.componentS = data
    })
    this.test.executeStrategy(this.vcr,'number',this.injector).then((data)=>{
      console.log(data)
      this.componentN = data
    })
  }
}
