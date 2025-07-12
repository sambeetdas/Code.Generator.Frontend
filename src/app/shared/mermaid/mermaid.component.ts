import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid',
  templateUrl: './mermaid.component.html',
  styleUrls: ['./mermaid.component.css']
})
export class MermaidComponent implements OnChanges, AfterViewInit {
  @Input() chart: string = '';
  @ViewChild('mermaidDiv') mermaidDiv: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chart) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    if (!this.chart || !this.mermaidDiv) {
      return;
    }
    
    // It is important to give each diagram a unique ID
    const key = `mermaid-chart-${Date.now()}`;
    const container = this.mermaidDiv.nativeElement;
    container.innerHTML = ''; // Clear previous renders

    try {
      mermaid.render(key, this.chart).then((result: { svg: string }) => {
        container.innerHTML = result.svg;
      }).catch((e: any) => {
        console.error('Error rendering mermaid chart:', e);
      });
    } catch (e) {
      console.error('Error rendering mermaid chart:', e);
    }
  }
}