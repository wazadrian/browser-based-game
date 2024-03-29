import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ArenaComponent } from './pages/game/arena/arena.component';
import { CraftingComponent } from './pages/game/crafting/crafting.component';
import { GatheringComponent } from './pages/game/gathering/gathering.component';
import { InventoryComponent } from './pages/game/inventory/inventory.component';
import { MapComponent } from './pages/game/map/map.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'game',
    component: GameComponent,
    children: [
      {path: 'arena', component: ArenaComponent},
      {path: 'crafting', component: CraftingComponent},
      {path: 'gathering', component: GatheringComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'map', component: MapComponent},
    ],
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
