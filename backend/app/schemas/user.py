from pydantic import BaseModel, EmailStr
from typing import Optional

#==============
#User Registration
#==============

class UserCreate(BaseModel):
    email: EmailStr
    password:str

#==============
#User Login
#==============

class UserLogin(BaseModel):
    email:EmailStr
    password:str

#==============
#User Response
#==============

class UserResponse(BaseModel):
    id:int
    email:EmailStr
    provider:str

    class Config:
        from_attributes = True