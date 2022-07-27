// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: "postgresql",
		connection: {
			host: "127.0.0.1",
			user: "postgres",
			password: "docker",
			port: 5432,
			database: "workout"
		},
		migrations: {
			directory: "./db/migrations"
		},
		seeds: {
			directory: "./db/seeds"
		}
	},

	test: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	production: {
		client: "postgresql",
		connection: process.env.DATABASE_URL + "?ssl=no-verify",
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "./db/migrations"
		},
		seeds: {
			directory: "./db/seeds"
		}
	}
};
