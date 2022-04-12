import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPlayerComponent } from './film-player.component';

describe('FilmPlayerComponent', () => {
  let component: FilmPlayerComponent;
  let fixture: ComponentFixture<FilmPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
