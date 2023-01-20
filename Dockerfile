FROM node:latest
WORKDIR /usr/src/frontend
COPY frontend/ ./frontend/
RUN cd frontend && npm install

FROM python:latest
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/