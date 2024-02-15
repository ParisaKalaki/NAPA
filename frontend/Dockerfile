FROM node:lts-iron

EXPOSE 5173 

RUN mkdir -p /app/public /app/src

WORKDIR /app

COPY package.json /app/package.json

RUN npm install
# Run 'npm run dev' when the container starts.
CMD ["npm", "run", "dev", "--host 0.0.0.0"]