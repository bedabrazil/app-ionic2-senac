import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactService} from '../../app/services/contact.service';
import {Course} from '../../app/models/course';
import {Academic} from '../../app/models/academic';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactService]
})
export class ContactPage implements OnInit {
  public title: string = 'Escolaridade';
  public courses: Course[];
  public academic: Academic;
  constructor(public navCtrl: NavController, public contactService: ContactService) {}

  ngOnInit(){
    this.courses = this.contactService.showCourses();
    this.academic = this.contactService.showAcademic();
  }
}
