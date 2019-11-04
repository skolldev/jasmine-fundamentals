import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalculatorComponent } from "./calculator.component";
import { of } from "rxjs";

fdescribe("CalculatorComponent", () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add 1 if clicking 1", () => {
    spyOn(component, "enterNumber").and.callThrough();
    const buttonEl = fixture.nativeElement.querySelector("#one");
    buttonEl.click();

    expect(component.enterNumber).toHaveBeenCalledWith(1);
    expect(component.number1).toBe(1);
  });
});
