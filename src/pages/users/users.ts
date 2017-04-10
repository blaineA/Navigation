import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ngOnInit(){
    this.name = this.navParams.data
  }
  onGoBack(){
    this.navCtrl.pop();
    //this.navCtrl.popToRoot();
  }
}
