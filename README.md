# Opengraph Fullstack Image Server

(React + express + sequelize)

## APIs

### Images

[GET][/images/:id](): get a image

[POST][/images](): create a image
 - params
   - title: string, required
   - description: string, required
   - image: file, required

## Getting Started

```bash
# 1-1. Clone Repo
git clone https://github.com/8eatles/og-image-server-react.git
cd og-image-server-react

# 1-2. Install yarn if you not have
npm -g install yarn

# 1-3. Install node package
yarn

# 2. Write your database config file
cp config/database_sample.json config/database.json
vi config/database.json

# 3. Migrate Database
yarn sequelize db:migrate

# 4. run
# - (Option) Start development server
#   yarn dev (or npm run dev)
# - (Option) Build & Start production server
#   yarn build (or npm run build)
#   yarn start (or npm start)
yarn dev
```
