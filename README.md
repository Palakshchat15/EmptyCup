# EmptyCup - Interior Designers (Mobile Web)

This is a full stack assignment project for EmptyCup, implementing a mobile-first web page that lists interior designers. The project includes frontend styling based on a Figma design, dynamic shortlist functionality, backend data serving via Flask, and deployment using Docker and Render.


##  Live Demo

- **Frontend**: https://frontend-3q05.onrender.com
- **Backend**: https://emptycup-y6md.onrender.com/api/listings

##  Project Structure

Project
├── backend
  ├── app.py
  ├── venv
  ├── Dockerfile
  └── requirements.txt
├── public
    └── images
        └── ead2bbdb886ca807a68a0276bed49797273d82f1.png
    ├── listings.json
├── src
    └── App.tsx
    └── index.css
    └── main.tsx
    └── vite-env.d.ts
    ├── components
        └── Header.tsx
        └── Logo.tsx
        └── Navigation.tsx
        └── StarRating.tsx
        └── StudioCard.tsx
        └── StudioList.tsx
├── .env
├── .gitignore
├── Dockerfile
├── index.html
├── docker-compose.yml
└── package.json

## Start Command

Frontend - npm run dev
Backend - python app.py

## Shortlist Functionality
-> Tap the "Shortlist" icon → icon fills in

-> Tap again → icon outline

-> Toggle top “Shortlisted” button to filter listings

## Run Locally with Docker
-> Create Dockerfile for both backend and frontend

-> Create docker-compose.yml file

-> In the terminal run: docker-compose --build

-> And then run: docker-compose up --build

-> The project will be deployed on docker desktop

## Backend Deployment on Render

-> First, push the whole repo to the GitHub

-> Go to https://render.com

-> Click "New Web Service"

-> Connect your GitHub

-> Set environment:

  - Language: Python 3

  - Build Command: pip install -r requirements.txt

  - Start Command: python app.py

  - Working Directory: backend

-> Click Deploy

## Frontend Deployment on Render

-> Create a .env file in frontend or root folder

-> Set the environment variable as
   VITE_BACKEND_URL=https://project-backend.onrender.com

-> Update the fetch call in the StudioList.tsx
   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/listings`)

-> GitHub repo was already pushed while deploying backend

-> Go to https://vercel.com

-> Click "New Project"

-> Select your repo

-> In project settings:

   - Framework Preset: Vite

   - Root Directory: .

   - Build Command: npm run build

   - Output Directory: dist

-> Environment Variable:
   -  VITE_BACKEND_URL=https://project-backend.onrender.com

-> Click Deploy
