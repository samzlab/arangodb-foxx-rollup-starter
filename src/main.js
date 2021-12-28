import { aql, db } from '@arangodb';
import createRouter from '@arangodb/foxx/router';

const testCollection = db._collection('test');

const router = createRouter();

router.get('/check', (req, res) => {
	const [ checked ] = db._query(aql`
		UPSERT { _key: 'checked' }
		INSERT { _key: 'checked', value: 1 }
		UPDATE { value: OLD.value + 1 }
		IN ${testCollection}
		RETURN NEW
	`).toArray();

	res.send(`Visited ${checked.value} times!`);
}).response([ 'text/plain' ], 'How many times this endpoint has been called');

module.context.use(router);