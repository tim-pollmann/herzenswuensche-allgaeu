function get_last_commit_id {
  local last_commit_id=$(git log -1 | grep 'commit' | cut -c 8-)
  echo $last_commit_id
}

while true
do
  git fetch && git pull

  if [ last_commit_id != $(get_last_commit_id) ]
  then
    last_commit_id=$(get_last_commit_id)
    npm install
    npm run build && npm run start -p 3004
  fi

  sleep 15
done