import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardDetailsComponent } from './repo-card-details.component';

describe('RepoCardDetailsComponent', () => {
  let component: RepoCardDetailsComponent;
  let fixture: ComponentFixture<RepoCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
