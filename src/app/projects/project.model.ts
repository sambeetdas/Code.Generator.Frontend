export enum ProjectStatus {
  Created,
  DiagramGenerated,
  CodeGenerated,
  Deployed
}

export interface Project {
  id: number;
  name: string;
  description: string;
  requirements: string;
  mermaidDiagram?: string;
  generatedCode?: string;
  status: ProjectStatus;
}

export interface CreateProjectDto {
  name: string;
  description: string;
  requirements: string;
}

export interface UpdateProjectDto {
  name?: string;
  description?: string;
  requirements?: string;
  mermaidDiagram?: string;
  generatedCode?: string;
  status?: ProjectStatus;
}

export interface DeployRequest {
  environment: string;
}