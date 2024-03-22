import { makeAutoObservable } from 'mobx';
import en from './en.json';
import ru from './ru.json';

const dicts = { en: en, ru: ru };

export type LangDict = typeof en;
export type langs = keyof typeof dicts;

class LangStore {
  private dicts;
  private current: langs;

  constructor() {
    this.dicts = dicts;
    this.current = (localStorage.getItem('lang') as langs | null) ?? 'ru';
    makeAutoObservable(this);
  }

  public get dict(): LangDict {
    return this.dicts[this.current];
  }

  public set lang(nLang: langs) {
    localStorage.setItem('lang', nLang);
    this.current = nLang;
  }

  public get lang() {
    return this.current;
  }

  public get langLabels() {
    return Object.keys(this.dicts);
  }
}

export const LS = new LangStore();
