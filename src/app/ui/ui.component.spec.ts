import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("UI- Component Test Suite", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // *** A D D I T I O N ***

  describe("ADITION - Component", () => {
    it("Should call addition method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 2;
      component.operator2 = 2;

      // Act
      component.addition();
      result = component.result;

      // Assert
      expect(result).toBe(4);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "3.1416";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(3.1416);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "2.71";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(2.71);
    });

    it("should add operator1 and operator2 when i click the addition button ", () => {
      // Arrange
      component.operator1 = 5.0;
      component.operator2 = 2.5;
      let additionButton = fixture.debugElement.query(
        By.css(".addition-button")
      );

      // Act
      additionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(7.5);
    });

    it("Should render sum in result div", () => {
      // Arrange
      component.operator1 = 5;
      component.operator2 = 5;

      // Act
      component.addition();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("10");
    });
  });

  // *** S U B S T R A C T I O N ***

  describe("SUBSTRACTION - Component", () => {
    it("Should call substraction method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 10;
      component.operator2 = 3;

      // Act
      component.substraction();
      result = component.result;

      // Assert
      expect(result).toBe(7);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "3.1416";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(3.1416);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "2.71";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(2.71);
    });

    it("Should add operator1 and operator2 when i click the substraction button", () => {
      // Arrange
      component.operator1 = 65;
      component.operator2 = 42;
      let substractionButton = fixture.debugElement.query(
        By.css(".substraction-button")
      );

      // Act
      substractionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(23);
    });

    it("Should render substraction in result div", () => {
      // Arrange
      component.operator1 = 10;
      component.operator2 = 5;

      // Act
      component.substraction();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("5");
    });
  });

  // *** M U L T I P L I C A T I O N ***

  describe("MULTIPLICATION - Component", () => {
    it("Should call multiplication method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 4;
      component.operator2 = 2;

      // Act
      component.multiplication();
      result = component.result;

      // Assert
      expect(result).toBe(8);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "37";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(37);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "45";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(45);
    });

    it("should add operator1 and operator2 when i click the multiplication button ", () => {
      // Arrange
      component.operator1 = 25;
      component.operator2 = 3;
      let multiplicationButton = fixture.debugElement.query(
        By.css(".multiplication-button")
      );

      // Act
      multiplicationButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(75);
    });

    it("Should render multiplication in result div", () => {
      // Arrange
      component.operator1 = 300;
      component.operator2 = 2.5;

      // Act
      component.multiplication();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("750");
    });
  });

  // *** D I V I S I O N ***

  describe("DIVISION - Component", () => {
    it("Should call division method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 24;
      component.operator2 = 3;

      // Act
      component.division();
      result = component.result;

      // Assert
      expect(result).toBe(8);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "300";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(300);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "488";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(488);
    });

    it("should add operator1 and operator2 when i click the division button ", () => {
      // Arrange
      component.operator1 = 150;
      component.operator2 = 15;
      let divisionButton = fixture.debugElement.query(
        By.css(".division-button")
      );

      // Act
      divisionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(10);
    });

    it("Should render division in result div", () => {
      // Arrange
      component.operator1 = 30.8;
      component.operator2 = 2;

      // Act
      component.division();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("15.4");
    });
  });

  // *** S Q U A R E  -  R O O T ***

  describe("SQUARE - ROOT - Component", () => {
    it("Should call square-root method", () => {
      // Arrange
      let result = 0;
      component.operator1 = 25;

      // Act
      component.sqrt();
      result = component.result;

      // Assert
      expect(result).toBe(5);
    });

    it("Should set operator1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator1"]')
      ).nativeElement;

      // Act
      inputElement.value = "823";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator1).toEqual(823);
    });

    it("Should set operator2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="operator2"]')
      ).nativeElement;

      // Act
      inputElement.value = "619";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.operator2).toEqual(619);
    });

    it("should add operator1 when i click the division button ", () => {
      // Arrange
      component.operator1 = 9;
      let sqrtButton = fixture.debugElement.query(By.css(".sqrt-button"));

      // Act
      sqrtButton.triggerEventHandler("click", null);

      // Assert
      expect(component.result).toBe(3);
    });

    it("Should render square root in result div", () => {
      // Arrange
      component.operator1 = 81;

      // Act
      component.sqrt();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("9");
    });
  });
});
