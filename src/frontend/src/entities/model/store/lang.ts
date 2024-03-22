import { makeAutoObservable } from 'mobx';
import en from './en.json';
import ru from './ru.json';

const dicts = { en: en, ru: ru };

export type LangDict = typeof en;
export type langs = keyof typeof dicts;

class LangStore {
  private langs;
  private current: langs;

  constructor() {
    this.langs = dicts;
    this.current = 'ru';
    makeAutoObservable(this);
  }

  public get dict(): LangDict {
    console.log('dict getter');

    return this.langs[this.current];
  }

  public set lang(nLang: langs) {
    this.current = nLang;
  }

  public get cLang() {
    return this.current;
  }
}

export const LS = new LangStore();
