FROM node:20-alpine as builder

WORKDIR /app

ARG NEXT_PUBLIC_BASE_PATH NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_BASE_PATH=${NEXT_PUBLIC_BASE_PATH} 
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} 

COPY package.json package-lock.json ./
RUN npm install

RUN echo $ENV_FILE_BASE64 | base64 -d  > .env

COPY . .
RUN npm run build

FROM node:20-alpine as runner

WORKDIR /app

ENV PORT=80

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 80
ENTRYPOINT ["npm", "run", "start"]