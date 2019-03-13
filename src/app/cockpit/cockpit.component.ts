import { Component, 
         OnInit, 
         Output, 
         EventEmitter, 
         ViewChild, 
         ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName: string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInpute: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInpute.value, serverContent: this.serverContentInput.nativeElement.value});
  }
  onAddBlueprint(nameInpute: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInpute.value, serverContent: this.serverContentInput.nativeElement.value});
  }
    
}
