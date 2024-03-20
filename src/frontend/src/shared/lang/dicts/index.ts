import ruDict from './ru.json';

type DictType = typeof ruDict;

const dicts = {
  ru: ruDict as DictType,
};

export { dicts, type DictType };
