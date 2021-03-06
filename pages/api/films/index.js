import swapi from 'swapi-node'
import { getId } from '../util'

// https://www.npmjs.com/package/swapi-node
export default function filmshandler(req, res) {
  swapi.getFilm().then(
    result => {
      const results = result.results.map(r => ({ ...r, 'id': getId(r.url) }));
      res.status(200).json(results);
    }
    ).catch(err => { console.error(err); res.status(500).json(err); });
    //res.status(200).json(people)
}
