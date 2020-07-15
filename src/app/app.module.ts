import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { I18nService } from './i18n.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule} from '@angular/forms';
import { ConverterComponent } from './components/converter/converter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PlanComponent } from './components/plan/plan.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { ReviewComponent } from './components/review/review.component';
import { PayComponent } from './components/pay/pay.component';
import { SurveyComponent } from './components/survey/survey.component';
import { Adminpage1Component } from './components/adminpage1/adminpage1.component';
import { Adminpage2Component } from './components/adminpage2/adminpage2.component';
import { Adminpage3Component } from './components/adminpage3/adminpage3.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { VideoListComponent } from './components/video-list/video-list.component';

const appRoutes: Routes = [
  {
    path:"videos",
    component: VideoListComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    NavBarComponent,
    MainPageComponent,
    ContactPageComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserListComponent,
    TodoListComponent,
    LoginComponent,
    AboutPageComponent,
    HowItWorksComponent,
    ReviewsComponent,
    GetStartedComponent,
    BmiComponent,
    CalculatorComponent,
    PlanComponent,
    MenuComponent,
    OrderComponent,
    ReviewComponent,
    PayComponent,
    SurveyComponent,
    Adminpage1Component,
    Adminpage2Component,
    Adminpage3Component,
    ExperienceComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

