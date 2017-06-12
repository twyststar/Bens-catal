import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor() { }
  @Output() clickSender= new EventEmitter();

  ngOnInit() {
  }
  JobList: Job[] = [
  new Job('Pokemon Trainer', 'Gotta catch them all', 15, 'full-time', 'Seattle', 'Professor Oak', false),
  new Job('Mattress Tester', 'Test mattresses', 100, 'full-time', 'Bellevue', 'Serta Sheep', false),
  new Job('Squire', 'Squire, attend me!', 0, 'full-time', 'Imladris', 'Sir Galvanon', false)
  ]
  jobForm = null;
  selectedJob = null;
  toggleInfo(job){

    if(job.show){
      job.show = false;
    }else{
      job.show = true;
    }
  }
  editJob(clickedJob) {
    this.selectedJob = null;
   this.selectedJob = clickedJob;
 }
 finishedEditing() {
   this.selectedJob = null;
 }
 addJob() {
   this.jobForm = true;
 }
 createJob(title: string, description: string, pay:  number, hours: string, location: string, contact: string) {
  var newJob = new Job (title, description, pay, hours, location, contact, false);
  this.JobList.push(newJob);
  this.jobForm = null;
 }
}
