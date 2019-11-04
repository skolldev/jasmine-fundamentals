import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PiAPIService {
  public getPi(): number {
    return 3.1415926;
  }
  constructor() {}
}
