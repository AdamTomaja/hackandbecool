#!/bin/sh
version=$1
echo "Applying spotless"
./gradlew spotlessApply

echo "Publishing with version $version"
echo "Building docker image"
docker build -t vault:5556/foodie-backend:$version .

echo "Pushing image to vault"
docker push vault:5556/foodie-backend:$version


git add .
git commit -m "New version $version"
git push origin master