import axios from 'axios';
import { makeAutoObservable } from 'mobx';

type DT = {
  [key: string]: string;
};

class CurrentLanguage {
  private currentLanguage: string;
  private currentDict: DT | null;

  constructor() {
    makeAutoObservable(this);
    this.currentLanguage = 'ru';
    this.currentDict = null;
  }

  public set setLang(lang: string) {
    new Promise(async () => {
      let { data } = await axios.get<DT>(`/dicts/${lang}.json`);
      this.currentDict = data;
      this.currentLanguage = lang;
    });
  }

  public get lang(): DT | null {
    if (this.currentDict) {
      return this.currentDict;
    }
    this.setLang = 'ru';
    return this.currentDict;
  }
}

export const cl = new CurrentLanguage();
