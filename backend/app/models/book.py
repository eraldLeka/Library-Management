from sqlalchemy import Column, Integer, String, Date, Boolean;
from app.database.database import Base

class Book(Base):
    __tablename__ = "books"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    author = Column(String(255), nullable=False)
    
    category = Column(String(255), nullable=True)
    language = Column(String(255), nullable=True)
    
    pages = Column(Integer, nullable=True)
    quantity = Column(Integer, nullable=False, default=1)
    
    available_copies = Column(Integer, nullable=False, default=1)
    
    is_active = Column(Boolean, default=True)
    