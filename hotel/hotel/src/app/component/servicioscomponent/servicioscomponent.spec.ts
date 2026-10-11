import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Servicioscomponent } from "./servicioscomponent";

describe("Servicioscomponent", () => {
  let component: Servicioscomponent;
  let fixture: ComponentFixture<Servicioscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Servicioscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Servicioscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
