function cleanup {
  echo "stopping server"
  jobs -p | xargs kill
}

trap cleanup EXIT

last_commit_id=x

while true
do
  git fetch
  git pull

  temp_commit_id=$(git log -1 | grep 'commit' | cut -c 8-)

  if [ $last_commit_id != $temp_commit_id ]
  then
    last_commit_id=$temp_commit_id
    npm install
    npm run build && npm run start &
  fi

  sleep 1
done