# seams-sql

The seam for SQL databases (Neon and Postgres): a typed SDK that gives code one way to reach a SQL database, with a fake for tests.

This repository holds only the guarded skeleton so far: `createSeamsSql()` returns a seam whose `query()` returns no rows, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-sql`: the SQL seam SDK, with a fake under `./testing`.

## Licence

MIT
