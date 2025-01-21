creamos un entorno virtual con python -m venv .venv
run .venv\Scripts\activate
run pip install -r requirements.txt
cd src
uvicorn main:app --reload


deactivate 