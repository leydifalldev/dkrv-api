#!/bin/sh
while ! nc -z $ELASTICSEARCH_PRIMARY; do sleep 2; done
npm run start:dev