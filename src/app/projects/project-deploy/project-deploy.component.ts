import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-deploy',
  templateUrl: './project-deploy.component.html',
  styleUrls: ['./project-deploy.component.css']
})
export class ProjectDeployComponent implements OnInit {
  @Input() projectId: number;
  deployForm: FormGroup;
  deploymentMessage: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.deployForm = new FormGroup({
      environment: new FormControl('production', Validators.required)
    });
  }

  onDeploy() {
    if (this.deployForm.invalid) {
      return;
    }
    this.projectService.deployProject(this.projectId, this.deployForm.value).subscribe(
      response => {
        this.deploymentMessage = 'Deployment initiated successfully!';
        console.log(response);
      },
      error => {
        this.deploymentMessage = 'Deployment failed.';
        console.error(error);
      }
    );
  }
}