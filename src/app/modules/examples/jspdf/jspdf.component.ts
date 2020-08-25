import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import  html2canvas from 'html2canvas';

@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.scss'],
})
export class JspdfComponent {
  @ViewChild('htmlData') htmlData: ElementRef;
  @ViewChild('content', { static: false }) content: ElementRef;
  name = 'Angular 10  pdf';

  constructor() {}

  createPDF() {
    this.generatePdf('contentToConvert', 'newPDF.pdf', 3000);
  }

  generatePdf(elementId: string, fileName: string, timeout = 2000) {
    const element = document.getElementById(elementId),
      options = {
        imageTimeout: timeout,
        background: 'white',
        allowTaint: true,
        useCORS: false,
        height: element.clientHeight,
        width: element.clientWidth,
      };

    html2canvas(element, options).then((canvas) => {
      let imgData = canvas.toDataURL('image/png');
      // new JsPDF(
      //   Orientation, // Landscape or Portrait
      //   unit, // mm, cm, in
      //   format // A2, A4 etc
      // );
      let imgWidth = 210,
        pageHeight = 295,
        imgHeight = (canvas.height * imgWidth) / canvas.width,
        heightLeft = imgHeight,
        doc = new jsPDF('p', 'mm', 'a4'),
        position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save(fileName + '.pdf');
    });
  }

  public downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      },
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers,
    });

    doc.save('test.pdf');
  }
}
