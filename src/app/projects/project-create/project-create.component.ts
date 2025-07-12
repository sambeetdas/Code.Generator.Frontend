import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      requirements: new FormControl(null, Validators.required)
    });
  }

  onCreateProject() {
    if (this.projectForm.invalid) {
      return;
    }
    this.projectService.createProject(this.projectForm.value).subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }
}