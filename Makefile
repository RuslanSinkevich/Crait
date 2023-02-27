dev: 
	npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
build: 
	npx tailwindcss -i ./src/css/input.css -o ./src/css/build.css --minify
