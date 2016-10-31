import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ResumeService} from '../../app/services/resume.service';
import {Company} from '../../app/models/company';

@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
  providers: [ResumeService]
})
export class ResumePage implements OnInit {

  public title: string = 'Experiências';
  public companies: Company[];
  constructor(public navCtrl: NavController, public resumeService: ResumeService) {}

  ngOnInit() {
    this.companies = this.resumeService.showCompanies();
  }

}
