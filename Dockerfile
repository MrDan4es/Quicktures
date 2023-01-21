FROM node:latest
WORKDIR /usr/src/frontend
COPY frontend/ ./frontend/
RUN cd frontend && npm install

FROM python:latest
WORKDIR /code/backend
COPY ./backend/requirements.txt /code/backend/
RUN pip install -r requirements.txt
COPY backend/ /code/backend/
