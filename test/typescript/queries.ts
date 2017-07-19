import * as pgPromise from '../../typescript/pg-promise';

const pgp: pgPromise.IMain = pgPromise();

const db: pgPromise.IDatabase<any> = pgp('connection');

const qrm = pgPromise.queryResult;

db.query('', [], qrm.one | qrm.none)
    .then(data => {
        const d1 = data.value;
        const d2 = data[0].value;
    });

db.none('')
    .then(data => {
    });

db.one('', [], value => {
}, 'this')
    .then(data => {
        const value = data.value;
    });

db.oneOrNone('')
    .then(data => {
        const value = data.value;
    });

db.many('')
    .then(data => {
        const value = data[0].ops;
    });

db.result('', [], () => {
}, 123)
    .then(data => {
        const value = data.rows[0].name;
        const d: number = data.duration;
    });

db.map('', null, row => {
    return row.value;
})
    .then((data: any[]) => {
        const l: number = data.length;
    });

db.each('', null, row => {
    const v = row.value;
})
    .then((data: any[]) => {
        const l: number = data.length;
    });

db.task(t => {
    return t.batch([
        t.one('')
    ])
        .then((data: any[]) => {
            const l: number = data.length;
            return data;
        });
})
    .then(data => {
        const d1 = data.value;
        const d2 = data[0].value;
    });
