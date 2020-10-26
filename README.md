# Books API - JS
API for serving books built with Javascript and Postgres

## Starting
1. Create a `.env` file, using the `.env.example` and change the passwords
2. Start the Docker Containers with `docker-compose up -d`
3. Install the packages with `npm install`
4. Run the migrations with `npx sequelize-cli db:migrate`
5. Run the seeders with `npx sequelize-cli db:seed:all`
6. Start the project with `npm start`

## Documentation
Routes documentation avaiable on https://tashima42.github.io/books-api-js/