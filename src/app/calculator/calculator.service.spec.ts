import { TestBed } from "@angular/core/testing";

import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CalculatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should handle adding", () => {});

  it("should handle subtracting", () => {});

  it("should handle multiplication", () => {});

  it("should handle divison", () => {});

  it("should handle pow", () => {});

  xit("should handle large numbers for pow", () => {
    const base = 42;
    const exponent = 6;

    const expectedResult = Math.pow(42, 6);

    const result = service.pow(base, exponent);
    expect(result).toBe(expectedResult);
  });
});
