import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  mermaidScript: string;
  generatedCode: string;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectService.getProject(params.id).subscribe(project => {
        this.project = project;
        this.mermaidScript = project.mermaidDiagram;
        this.generatedCode = project.generatedCode;
      });
    });
  }

  onGenerateDiagram() {
    this.projectService.generateDiagram(this.project.id).subscribe((res: any) => {
      this.mermaidScript = res.mermaidDiagram;
    });
  }

  onGenerateCode() {
    this.projectService.generateCode(this.project.id).subscribe((res: any) => {
      this.generatedCode = res.generatedCode;
    });
  }

  onUpdateDesign() {
    this.projectService.updateProject(this.project.id, { mermaidDiagram: this.mermaidScript }).subscribe(() => {
      // Show success message
    });
  }
}