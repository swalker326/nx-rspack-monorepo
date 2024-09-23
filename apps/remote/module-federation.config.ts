import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
	name: "remote",

	exposes: {
		"./routes": "./src/remote-entry.ts",
		"./Module": "./src/app/App.tsx",
	},
};

export default config;
