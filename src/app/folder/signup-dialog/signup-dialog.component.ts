import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss'],
})
export class SignupDialogComponent implements OnInit {
  expression = true
  data = [
    {
      title: "Google",
      icon1: "../../../assets/google.png",
      icon2: "../../../assets/arrow-left-circle.svg"
    },
    {
      title: "LinkedIn",
      icon1: "../../../assets/linkedin 1.svg",
      icon2: "../../../assets/arrow-left-circle.svg"
    },
    {
      title: "Github",
      icon1: "../../../assets/github.svg",
      icon2: "../../../assets/arrow-left-circle.svg"
    },
    {
      title: "Facebook",
      icon1: "../../../assets/facebook 1.svg",
      icon2: "../../../assets/arrow-left-circle.svg"
    }
  ]
  constructor(private modalController: ModalController) { }

  ngOnInit() { }
  signInWithGoogle() {

  }
  signInWithLinkedIn() {

  }
  signInWithGitHub() {

  }
  signInWithFacebook() {

  }
  closeCard() {
    this.expression = false;
  }

}
