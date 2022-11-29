import { Component, OnInit } from "@angular/core";
import { addition } from "../addition/addition";
import { substraction } from "../substraction/substraction";
import { multiplication } from "../multiplication/multiplication";
import { division } from "../division/division";
import { sqrt } from "../sqrt/sqrt";
import { exp } from "../exp/exp";

@Component({
  selector: "app-ui",
  templateUrl: "./ui.component.html",
  styleUrls: ["./ui.component.css"],
})
export class UiComponent implements OnInit {
  constructor() {}

  result = 0;
  operator1 = 0;
  operator2 = 0;

  ngOnInit() {}

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  substraction() {
    let myResult = 0;
    myResult = substraction(this.operator1, this.operator2);
    this.result = myResult;
  }

  multiplication() {
    let myResult = 0;
    myResult = multiplication(this.operator1, this.operator2);
    this.result = myResult;
  }

  division() {
    let myResult = 0;
    myResult = division(this.operator1, this.operator2);
    this.result = myResult;
  }

  sqrt() {
    let myResult = 0;
    myResult = sqrt(this.operator1);
    this.result = myResult;
  }

  exp() {
    let myResult = 0;
    myResult = exp(this.operator1, this.operator2);
    this.result = myResult;
  }
}
