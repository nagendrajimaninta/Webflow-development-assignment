import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  cardsPerPage = 10; // Number of cards to display per page
  currentPage = 1; // Current page number
  data = [
    {
      title: "ML Conceptual Question ",
      icon1: "../../../assets/google.png",
      icon2: "../../../assets/_Group_.svg",
      style: {
        background: "linear-gradient(204deg, #E4658E 10.96%, #4E267C 78.44%)"
      }
    },
    {
      title: "ML Coding Question ",
      icon1: "../../../assets/linkedin 1.svg",
      icon2: "../../../assets/_Groupsecond.svg",
      style: {
        background: "linear-gradient(204deg, #89DDE3 10.96%, #00494F 78.44%)"

      }
    },
    {
      title: "ML Coding Question",
      icon1: "../../../assets/github.svg",
      icon2: "../../../assets/_Group_.svg",
      style: {
        background: "linear-gradient(204deg, #E4658E 10.96%, #4E267C 78.44%)"

      }
    },
    {
      title: "ML System Design",
      icon1: "../../../assets/facebook 1.svg",
      icon2: "../../../assets/_Group_.svg",
      style: {
        background: "linear-gradient(204deg, #F9956A 10.96%, #470F0F 78.44%)"

      }
    },
    {
      title: "ML Coding Question",
      icon1: "../../../assets/github.svg",
      icon2: "../../../assets/_Group_.svg",
      style: {
        background: "linear-gradient(204deg, #E4658E 10.96%, #4E267C 78.44%)"

      }
    }
  ]
  constructor(public dialog: MatDialog
  ) { }

  ngOnInit() {

  }
  openDialogFun() {

    this.dialog.open(SignupDialogComponent, {
      width: '350px',
      panelClass: 'custom-dialog-container'
    });

  }
  getTotalPages(): number {
    return Math.ceil(this.data.length / this.cardsPerPage);
  }
  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // Function to handle previous page button click
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
