import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewInit, OnDestroy {
   @Input('srvElement') element: {type:string, name: string, content: string};
   @Input() name: string;
   @ViewChild('heading') header: ElementRef;
   @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called!')
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngOn it called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content off paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck it called!');

  }

  ngAfterContentInit(){
    console.log('AfteContendInit is called');
  }
  
  ngAfterContentChecked(){
    console.log('AfterContendCheck is called');
    console.log('Text Content off paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngAfterViewInit(){
    console.log('AfterViewInit is called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);

  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked is called');
  }
  ngOnDestroy(){
    console.log('OnDestroy is called');
  }
}
