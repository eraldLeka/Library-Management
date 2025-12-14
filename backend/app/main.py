from fastapi import FastAPI
from app.database.database import engine, Base
from app.models import user

app = FastAPI (title="Library Management System")



@app.get("/")
def root():
    return {"message":"API is running"}