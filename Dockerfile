FROM node:latest

WORKDIR /lively_contributions

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
