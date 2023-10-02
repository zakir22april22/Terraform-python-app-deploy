FROM alpine

WORKDIR /app

COPY . /app/

EXPOSE 3000

CMD [ "python", "app.py" ]