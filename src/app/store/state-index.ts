import
  {
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HEROES_NODE, heroReducer, HeroState } from './hero/hero.reducer';


export interface State
{
  [ HEROES_NODE ]: HeroState;
}

export const reducers: ActionReducerMap<State> = {
  [ HEROES_NODE ]: heroReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
