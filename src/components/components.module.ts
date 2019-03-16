import { NgModule } from '@angular/core';
import { StudyComponent } from './study/study';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { MakeupComponent } from './makeup/makeup';
import { LifeComponent } from './life/life';
import { OthersComponent } from './others/others';
@NgModule({
	declarations: [StudyComponent,
    MakeupComponent,
    LifeComponent,
    OthersComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [StudyComponent,
    MakeupComponent,
    LifeComponent,
    OthersComponent]
})
export class ComponentsModule {}
