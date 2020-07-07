import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ConverterComponent } from './components/converter/converter.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
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
import { PayComponent } from './components/pay/pay.component';
import { ReviewComponent } from './components/review/review.component';
import { SurveyComponent } from './components/survey/survey.component';
import { Adminpage1Component } from './components/adminpage1/adminpage1.component';
import { Adminpage2Component } from './components/adminpage2/adminpage2.component';
import { Adminpage3Component } from './components/adminpage3/adminpage3.component';

// register the routes (paths) for your pages
const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'howitworks', component: HowItWorksComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'converter', component: ConverterComponent},
  { path: 'user/register', component: UserRegisterComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'getstarted', component: GetStartedComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'pay', component: PayComponent },
  { path: 'review', component: ReviewComponent},
  { path: 'survey', component: SurveyComponent },
  { path: 'todo', component: TodoListComponent},
  { path: 'adminpage1', component: Adminpage1Component },
  { path: 'adminpage2', component: Adminpage2Component },
  { path: 'adminpage3', component: Adminpage3Component },
  {path: 'login', component: LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
