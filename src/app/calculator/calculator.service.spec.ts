import { TestBed } from "@angular/core/testing";

import { CalculatorService } from "./calculator.service";
import { PiAPIService } from "../pi-api/pi-api.service";

class CakeService {
  public getPi() {
    return 3.1415926;
  }
}

fdescribe("CalculatorService", () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PiAPIService, useClass: CakeService }]
    });
    service = TestBed.get(CalculatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should handle adding", () => {
    const result = service.add(2, 2);
    expect(result).toBe(4, "this is basic maths!");
  });

  it("should handle subtracting", () => {});

  it("should handle multiplication", () => {
    spyOn(service, "multiply").and.callThrough();
    const result = service.multiply(100, 7);
    expect(result).toBe(700);
    expect(service.multiply).toHaveBeenCalledTimes(8);
  });

  it("should handle divison", () => {
    const result = service.divide(7, 0);
    expect(service.divide).not.toThrow();
    expect(result).toBe(Infinity);
  });

  it("should handle pow", () => {});

  it("should handle large numbers for pow", () => {
    const base = 42;
    const exponent = 6;

    const expectedResult = Math.pow(base, exponent);

    const result = service.pow(base, exponent);
    expect(result).toBe(expectedResult);
  });

  it("should get pi", () => {
    // spyOn(service, "getPi").and.returnValue(3.1415926);
    const pi = service.getPi();
    expect(pi).toBe(3.1415926);
  });
});
