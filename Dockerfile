FROM node:16-alpine AS builder
COPY . /src
WORKDIR /src
RUN yarn install
RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

COPY --from=builder /src/build ./build
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/public ./public
COPY --from=builder /src/package.json ./package.json

EXPOSE 8000

CMD ["npx", "serve", "-s", "build", "-l", "8000"]
