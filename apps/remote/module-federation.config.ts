import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
	name: "remote",

	exposes: {
		"./routes": "./src/remote-entry.ts",
	},
};

export default config;
