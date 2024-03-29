import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';

import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { InventoryComponent } from './pages/game/inventory/inventory.component';
import { CraftingComponent } from './pages/game/crafting/crafting.component';
import { GatheringComponent } from './pages/game/gathering/gathering.component';
import { MapComponent } from './pages/game/map/map.component';
import { ArenaComponent } from './pages/game/arena/arena.component';
import { ItemListComponent } from './pages/game/inventory/item-list/item-list.component';
import { ItemElementComponent } from './pages/game/inventory/item-list/item-element/item-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    StatusBarComponent,
    GameMenuComponent,
    InventoryComponent,
    CraftingComponent,
    GatheringComponent,
    MapComponent,
    ArenaComponent,
    ItemListComponent,
    ItemElementComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
