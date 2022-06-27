import typescript from "@rollup/plugin-typescript";
import sass from "rollup-plugin-sass"

export default {
	input: "src/index.ts",
	output: {
		file: "build/index.bundle.js",
		format: "esm",
		sourcemap: true
	},
	plugins: [
		typescript({
			tsconfig: "./tsconfig.json"
		}),
		sass({
			output: true,
			sourcemap: true
		})
	]
}
