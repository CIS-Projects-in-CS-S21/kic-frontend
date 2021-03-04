push:
	docker build -t gcr.io/keeping-it-casual/kic-frontend:dev .
	docker push gcr.io/keeping-it-casual/kic-frontend:dev