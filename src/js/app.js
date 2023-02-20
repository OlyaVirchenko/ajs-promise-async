import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    return json(data);
  }
}

(async () => {
  try {
    GameSavingLoader.load();
  } catch (err) {
    console.log(err);
  }
})();
