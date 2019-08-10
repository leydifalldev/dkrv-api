#!/bin/sh
while ! nc -z elasticsearch_1:9200; do sleep 2; done
npm run start