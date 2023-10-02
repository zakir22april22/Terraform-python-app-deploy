FROM alpine

WORKDIR /app

COPY . /app/

CMD [ "python", "app.py" ]