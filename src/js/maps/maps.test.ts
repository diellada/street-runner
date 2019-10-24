import { ILocation, initMap } from "./maps";

describe("Maps tests", () => {
  let testLocation: ILocation;
  beforeEach(() => {
    testLocation = {lat: 0, lng: 50}
  });

  // Note - testing the google object is extremely difficult due to it's connection the dom. Try and keep your tests to your own code, like previously with our dom work.
  
  test("Map function test would go here", () => {
    // expect(initMap(testLocation)).toBeTruthy();
    // Further tests for Map object could go here
  });
});
