
FROM python:3.8-alpine
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt 
CMD gunicorn -b 0.0.0.0:$PORT app:app