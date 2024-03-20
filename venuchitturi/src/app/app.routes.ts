import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { VenugopalchitturiComponent } from './venugopalchitturi/venugopalchitturi.component';
import { TaoDigitalComponent } from './tao-digital/tao-digital.component';
import { TaombolaGameComponent } from './taombola-game/taombola-game.component';

export const routes: Routes = [
    {
        path:'quiz',
        component:QuizComponent
    },
    {
        path:'resume',
        component:VenugopalchitturiComponent
    },
    {
        path:'app-tao-digital',
        component:TaoDigitalComponent
    },
    {
        path:'tambola',
        component:TaombolaGameComponent
    }
];
