# Use official Python image
FROM python:3.10

WORKDIR /app

# Install dependencies
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app code
COPY app /app

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Expose port and run FastAPI server
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
