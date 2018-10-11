# jauc


## Branch structures
`*master`   Holds the root project
`docs`      Holds the documentation and assets for the wiki

To access other branches please do:
```git checkout docs --orphan```
Then in the new branch
```git pull origin docs```

After this operation is done for all branches, you can simply do
```git fetch --all``` or ```git pull --all``` 
To get all tracked branches at the same time