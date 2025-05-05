FROM node as builder
WORKDIR /app
COPY frontend/package.json /app
RUN npm install
COPY frontend/ /app
ENV VITE_API_HOSTNAME=http://localhost:3000
RUN npm run build

FROM node
WORKDIR /app
COPY backend/package.json /app
RUN npm install
COPY backend/ /app
COPY --from=builder /app/dist /app/react
RUN npm run build
CMD ["npm","run", "migrate-start"]
