web:
	cd frontend && npx nuxi dev --dotenv .env.local

back:
	. backend/venv/bin/activate && python backend/manage.py runserver
