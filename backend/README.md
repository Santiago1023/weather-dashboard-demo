We create a virtual environment with:
- python -m venv .venv
  
run:
- .venv\Scripts\activate
  
run:
- pip install -r requirements.txt

cd src:
- uvicorn main:app --reload
